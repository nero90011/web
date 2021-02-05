<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-25 13:59:49
 * @LastEditTime: 2020-04-30 21:07:17
 * @LastEditors: Do not edit
 * @Description: 
 -->
<template lang="pug">
    v-container( class="grey lighten-4" )
        //- 如果为空,提醒用户
        v-card(v-if="Object.values(GetterWaitForPingJ).length===0" ripple to="/shopcar" elevation="0")
            v-card-text(class="text-center") 这里空空如也😢,点我去购物车🎁🎁🎁看看吧!
        v-card( elevation="0" 
            class="mb-3"
            v-for="(order,uuid) in GetterWaitForPingJ" :key="order.key"
        )
            v-card-title(
                class="body-2 font-weight-bold"
                v-text="`订单号:${uuid}`" 
            )
            v-card(elevation="0" 
                v-for="category in order" :key="category.key" 
                class="mt-3"
            )
                //- 店铺名
                v-row(class="mt-n5")
                    v-col(class="pl-6")
                        v-icon(class="yellow--text text--darken-4") mdi-store
                        span(
                            class="body-2 font-weight-black"
                            v-text="`${category.susername}的店铺`" 
                        ) 
                //- 商品展示
                v-row
                    v-col(cols="4" class="pr-0 py-1" align="center")
                        //- 图片
                        v-img( 
                                :src="category.img" 
                                width="95" height="95" class="nero-img-border" ripple
                                @click="$router.push(`/category/${category.cid}`)"
                            )
                    v-col(cols="5" class="pl-0 py-0" align="start")
                        v-row()
                            //- 标题
                            v-col(class="py-1 pr-7" cols="12" )
                                div(
                                    v-text="category.title" 
                                    class="pt-1 body-2 font-weight-black"
                                )
                            //- 分类
                            v-col(class="py-0 pr-7" cols="12" )
                                v-chip(v-text="category.choose" 
                                    label dense class="mt-2 grey lighten-3"
                                )
                    v-col(cols="3" align="end")
                        v-icon(x-small) mdi-currency-cny
                        //- 价格
                        span(v-text="category.onemoney" class="body-2 mr-2") 
                        br
                        //- 数量
                        span(v-text="`x${category.num}`" class="body-2 grey--text mr-2")
                //- 收货地址 
                v-row
                    v-col(cols="12" align="center")
                        span(class="body-2 ml-n3 grey--text" ) 您已收货,评价一下吧😊
                //- 评价按钮
                v-row
                    v-col(cols="12" align="end" class="py-6 px-6")
                        v-btn( 
                            outlined rounded 
                            color="yellow darken-4"
                            @click="handleShowAssessDialog(category)"
                        ) 评价
        //- 发布评价dialog
        v-dialog(
            v-model="showAssessDialog" 
            fullscreen
            hide-overlay transition="dialog-bottom-transition"
        )   
            v-card( color="grey lighten-3")
                //- dialog 头部
                v-app-bar(dense elevation="0" color="grey lighten-3")
                    v-btn( icon @click="showAssessDialog=!showAssessDialog") 
                        v-icon(v-text="'mdi-arrow-left'" )
                    span(class="font-weight-black ml-n1") 发表评价:
                    v-spacer
                    span(class="red--text font-weight-black"
                        @click="addAssess"
                    ) 发布
                //- dialog 商品部分
                v-container(  )
                    v-card( elevation="0")
                        v-row
                            v-col(cols="3" class="pl-6")
                                //- 图片
                                v-img( 
                                        :src="dialogAssessData.img" 
                                        width="50" height="50" class="nero-img-border" ripple
                                        @click="$router.push(`/category/${dialogAssessData.cid}`)"
                                    )
                            v-col(class="pr-6")
                                //- 标题
                                div(
                                    v-text="`${dialogAssessData.title}/${dialogAssessData.choose}`" 
                                    class="body-2  ml-n5"
                                )
                        //- 打分
                        v-row
                            v-col(cols="3" class="pl-6" align="end")
                                span(class="body-2 font-weight-bold") 请打分
                            v-col(cols="6" align="end" class="mt-n2")
                                v-rating(
                                    v-model="assess.rating" 
                                    length="3" background-color="grey lighten-1" color="red lighten-3"

                                )
                            v-col(cols="3" align="start" class="pr-6")
                                span(class="red--text text--lighten-3" v-text="composeAssessTest" ) 
                        //- 评价内容
                        v-row
                            v-col(cols="12" class="px-6")
                                v-textarea(
                                    auto-grow
                                    label="您的评价可以帮助更多想买的人"
                                    rows="4"
                                    row-height="30"
                                    append-icon="mdi-pencil"
                                    color="red lighten-3"
                                    counter="300"
                                    v-model="assess.assesstext"
                                    maxlength="300" 
                                )

</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator'
import { Order } from '../../interface/order'

const CenterModule = namespace('center')
const AssessModule=namespace('assess')
@Component({
    middleware: 'auth',
})
export default class Wait extends Vue {
    @CenterModule.Getter GetterWaitForPingJ: any
    @CenterModule.Action getOrders: any
    @CenterModule.Mutation setOrderHaveChange:any
    @AssessModule.Action submitAssess:any
    @AssessModule.Mutation setAssessHaveChange:any
    @AssessModule.Action getAssess:any

    private showAssessDialog: boolean = false
    private dialogAssessData: Order = {} as Order
    // 生成评价的数据
    private assess: any = {
        rating: 3,
        assesstext: '',
    }
    // 提交评价到后台
    async addAssess() {
        if (this.assess.assesstext.trim() === '') {
            // 用户没有填写 进行提醒
        } else {
            // assess 数据 生成
            this.assess.oid = this.dialogAssessData.id
            this.assess.uuid = this.dialogAssessData.uuid
            this.assess.uid = this.dialogAssessData.uid
            this.assess.sid = this.dialogAssessData.sid
            this.assess.choose = this.dialogAssessData.choose
            this.assess.cid = this.dialogAssessData.cid
            this.assess.title = this.dialogAssessData.title
            this.assess.img = this.dialogAssessData.img
            // 提交到vuex 进行action
            await this.submitAssess(this.assess)
            // 提醒订单进行更新
            await this.setOrderHaveChange(true)
            await this.getOrders()
            // 提醒评价进行更新
            await this.setAssessHaveChange(true)
            await this.getAssess()
            // 关闭dialog
            this.showAssessDialog=!this.showAssessDialog
        }
    }

    // 计算评价文字
    get composeAssessTest() {
        if (this.assess.rating === 3) {
            return '好评😊'
        } else if (this.assess.rating === 2) {
            return '中评🙂'
        } else {
            return '差评😒'
        }
    }

    handleShowAssessDialog(category: Order) {
        this.dialogAssessData = category
        this.showAssessDialog = true
    }

    mounted() {
        this.getOrders()
    }
    layout() {
        return 'nothing'
    }
}
</script>

<style scoped lang="scss"></style>
