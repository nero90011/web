<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-25 13:11:00
 * @LastEditTime: 2020-04-30 21:08:24
 * @LastEditors: Do not edit
 * @Description: 
 -->
<template lang="pug">
    v-container(  )
        //- 如果为空,提醒用户
        v-card(v-if="Object.values(GetterWaitForPay).length===0" ripple to="/shopcar" elevation="0")
            v-card-text(class="text-center") 这里空空如也😢,点我去购物车🎁🎁🎁看看吧!
        v-card( elevation="0" 
            class="mb-3"
            v-for="(order,uuid) in GetterWaitForPay" :key="order.key"
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
                                @click="$router.push(`/category/${category.cid}`)"
                                width="95" height="95" class="nero-img-border" ripple
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
                    span(class="body-2 ml-n3 grey--text" v-text="order[0].location" )
            //- 配送方式  
            v-row
                v-col(cols="4" align="end")
                    span(class="body-2 font-weight-black ") 配送方式
                v-col(cols="8" align="start")
                    span(class="body-2 ml-n3 grey--text") 永久顺丰免邮费
            //- 运费险
            v-row
                v-col(cols="4" align="end")
                    span(class="body-2 font-weight-black ") 运费险
                v-col(cols="8" align="start")
                    span(class="body-2 ml-n3 grey--text") 退换货全赔付
            //- 总计
            v-row
                v-col(cols="12" align="end")
                    span(class="body-2 font-weight-black") 总计:
                    v-icon(color="red" x-small) mdi-currency-cny
                    span(class="red--text mr-2" v-text="order[0].money" ) 
            //- 付款 或 取消订单
            v-row
                v-col(cols="12" align="end" class="py-6 px-6")
                    v-btn( 
                        outlined rounded 
                        class="mr-4"
                        @click="showDeleteDialog=!showDeleteDialog"
                    ) 取消订单
                    v-btn( 
                        outlined rounded 
                        color="yellow darken-4"
                        @click="doPayforOrder(uuid)"
                    ) 付款
            //- 取消订单dialog
            v-dialog( v-model="showDeleteDialog" )
                v-card(  )
                    v-card-title() 是否取消订单?
                    v-card-actions()
                        v-spacer
                        v-btn(outlined rounded  color="yellow darken-4" 
                            @click="showDeleteDialog=!showDeleteDialog"
                        ) 否
                        v-btn(outlined rounded 
                            @click="doDeleteOrder(uuid)"
                        )  是
</template>

<script lang="ts">
import { Component, Vue,namespace } from "nuxt-property-decorator"
const CenterModule=namespace('center')
@Component({
    middleware: 'auth',
})
export default class WaitPay extends Vue {
    @CenterModule.Getter GetterWaitForPay:any
    @CenterModule.Action getOrders:any
    @CenterModule.Action deleteOrder:any
    @CenterModule.Action payforOrder:any

    private showDeleteDialog:boolean=false

    async doDeleteOrder(uuid:string){
        await this.deleteOrder(uuid)
        this.showDeleteDialog=!this.showDeleteDialog
    }

    async doPayforOrder(uuid:string){
        await this.payforOrder(uuid)
        this.$router.push('/order/waitfh')
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
