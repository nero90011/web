<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-25 13:11:00
 * @LastEditTime: 2020-04-30 21:08:33
 * @LastEditors: Do not edit
 * @Description: 
 -->
<template lang="pug">
    v-container(  )
        //- 如果为空,提醒用户
        v-card(v-if="Object.values(GetterWaitForShouHuo).length===0" ripple to="/shopcar" elevation="0")
            v-card-text(class="text-center") 这里空空如也😢,点我去购物车🎁🎁🎁看看吧!
        v-card( elevation="0" 
            class="mb-3"
            v-for="(order,uuid) in GetterWaitForShouHuo" :key="order.key"
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
                    v-col(cols="4" align="end")
                        span(class="body-2 font-weight-black ") 收货地址
                    v-col(cols="8" align="start")
                        span(class="body-2 ml-n3 grey--text" v-text="category.location" )
                //- 确认收货按钮
                v-row
                    v-col(cols="12" align="end" class="py-6 px-6")
                        v-btn( 
                            outlined rounded 
                            color="yellow darken-4"
                            @click="showSubmitOrderDialog(uuid,category.cid)"
                        ) 确认收货
        //- 确认收货dialog
        v-dialog( v-model="showSubmitOrder" )
            v-card(  )
                v-card-title() 是否确认收货?
                v-card-actions()
                    v-spacer
                    v-btn(outlined rounded  
                        @click="showSubmitOrder=!showSubmitOrder"
                    ) 否
                    v-btn(outlined rounded 
                        color="yellow darken-4" 
                        @click="doSubmitOrder(showSubmitOrderUUID,showSubmitOrderCID)"
                    )  是
</template>

<script lang="ts">
import { Component, Vue,namespace } from "nuxt-property-decorator"
const CenterModule=namespace('center')
@Component({
    middleware: 'auth',
})
export default class WaitSh extends Vue {
    @CenterModule.Getter GetterWaitForShouHuo:any
    @CenterModule.Action getOrders:any
    @CenterModule.Action submitOrderSh:any

    private showSubmitOrder:boolean=false
    private showSubmitOrderUUID:string=''
    private showSubmitOrderCID:number=0
    /**
     * @name: 更新dialog的数据并显示dialog
     * @param {type} 
     * @return: 
     */
    showSubmitOrderDialog(uuid:string,cid:number){
        this.showSubmitOrderUUID=uuid
        this.showSubmitOrderCID=cid
        this.showSubmitOrder=true
    }
    /**
     * @name: 根据uuid 和 商品id 进行收货
     * @param {type} 
     * @return: 
     */
    async doSubmitOrder(uuid:string,cid:number){
        console.log(uuid,cid);
        //订单收货 vuex action
        await this.submitOrderSh({uuid,cid})
        //跳转到待评价页面
        this.$router.push('/assess/wait')
        //取消显示dialog
        this.showSubmitOrder=!this.showSubmitOrder
    }

    mounted(){
        this.getOrders()
    }
    layout(){
        return 'nothing'
    }
}
</script>

<style scoped lang="scss">
</style>
