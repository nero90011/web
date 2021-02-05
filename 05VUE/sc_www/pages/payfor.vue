<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-22 21:55:02
 * @LastEditTime: 2020-04-30 22:38:01
 * @LastEditors: Do not edit
 * @Description: 
 -->
<template lang="pug">
    v-container(class="grey lighten-4 mb-10" class="overflow-hidden grey lighten-4")
        v-app-bar(dense elevation="0" app)
            v-btn( icon @click="routerGoBack") 
                v-icon(v-text="'mdi-arrow-left'" )
            span(class="font-weight-black ml-n1 title") 确认订单:
        //- 提醒收货地址
        v-card( 
            elevation="0" ripple 
            to="/auth/usersetting" 
            class="mb-3"
            @click="routeSetLocationShowDialog"
        )
            v-row
                v-col(cols="10")
                    v-card-title(class="body-1 font-weight-black") 您的收货地址:
                    v-card-text(
                        align="center" v-text="$auth.user.location" 
                        v-if="$auth.user.location!==''||$auth.user.location!==null" 
                    )
                    v-card-text(
                        align="center" 
                        v-else 
                    ) 请先设置收货地址
                v-col(cols="2" align-self="center" justify="center")  
                    v-btn( 
                        dense icon
                    )
                        v-icon(large ) mdi-menu-right

        //- payfor card
        v-card( 
            v-for="(shopcar,index) of toBeOrder" :key="shopcar.id" 
            class="mb-3 py-4" elevation="0"
        )   
            //- 商品展示
            v-row
                v-col(cols="4" class="pr-0 py-1" align="center")
                    //- 图片
                    v-img( 
                            :src="shopcar.cid.imgs[0]" 
                            width="95" height="95" class="nero-img-border" ripple
                        )
                v-col(cols="5" class="pl-0 py-0" align="start")
                    v-row()
                        //- 标题
                        v-col(class="py-1 pr-7" cols="12" )
                            div(
                                v-text="shopcar.cid.title" 
                                class="pt-1 body-2 font-weight-black"
                            )
                        //- 分类
                        v-col(class="py-0 pr-7" cols="12" )
                            v-chip(v-text="shopcar.choose" 
                                label dense class="mt-2 grey lighten-3"
                            )
                v-col(cols="3" align="end")
                    v-icon(x-small) mdi-currency-cny
                    span(v-text="shopcar.cid.money" class="body-2 mr-2") 
                    br
                    span(v-text="shopcar.num" class="body-2 grey--text mr-2")
            //- 配送方式  
            v-row
                v-col(cols="4" align="end")
                    span(class="body-2 font-weight-black ") 配送方式
                v-col(cols="6" align="start")
                    span(class="body-2 ml-n3 grey--text") 永久顺丰免邮费
            //- 运费险
            v-row
                v-col(cols="4" align="end")
                    span(class="body-2 font-weight-black ") 运费险
                v-col(cols="6" align="start")
                    span(class="body-2 ml-n3 grey--text") 退换货全赔付
            //- 总计
            v-row
                v-col(cols="12" align="end")
                    span(class="body-2 grey--text") 共{{shopcar.num}}件 
                    span(class="body-2 font-weight-black") 小计:
                    v-icon(color="red" x-small) mdi-currency-cny
                    span(class="red--text mr-2" v-text="shopcar.num*shopcar.cid.money" ) 
        //- 底部按钮
        v-bottom-navigation(
            app max-height="48"
            grow 
        )   
            v-btn(:ripple="false")     
            span(class="body-2 mt-4 font-weight-bold") 共:
            v-icon(x-small class="mb-n2 red--text") mdi-currency-cny
            span(class="body-1 mt-4 font-weight-bold red--text" v-text="getmoneySum" )  
            //- 提交订单按钮
            v-btn(
                class=" red ml-4" dense 
                :disabled="SubmitBtn"
                @click="handlebeOrder"
                height="56" 
            ) 
                
                span(
                    class="white--text body-1 font-weight-bold"
                ) 提交订单
 </template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator'
import { ShopCar } from "../interface/findShopCar"

const PayforModule = namespace('payfor')
const UserSettingModule=namespace('usersetting')
const ShopCarModule=namespace('shopcar')
const CenterModule=namespace('center')
@Component({
    layout: 'nothing',
    middleware: 'auth',
})
export default class PayforIndex extends Vue {
    @PayforModule.Mutation setToBeOrder:any
    @PayforModule.Action createOrder:any
    @PayforModule.State code!:number
    @ShopCarModule.Mutation setHaveChange:any
    @CenterModule.Mutation setOrderHaveChange:any
    @CenterModule.Action getOrders:any
    // 货品
    @PayforModule.State readonly toBeOrder!:ShopCar[]
    @UserSettingModule.Mutation readonly setshowLocationDialog:any
    // 按钮
    private SubmitBtn:boolean=false
    /* ________________________________________________________________计算属性 */
    /**
     * @name:获取总价格
     * @param {type}
     * @return:
     */
    get getmoneySum(): number {
        let sum = 0
        for (const index in this.toBeOrder) {
            sum += this.toBeOrder[index].num * this.toBeOrder[index].cid.money
        }
        return sum
    }
    /* _________________________________________________________________事件 */
    /**
     * @name: 提交订单按钮
     * @param {type} 
     * @return: 
     */
    async handlebeOrder(){
        // 提交订单
        await this.createOrder(this.getmoneySum)
        if(this.code===200){
            // 清空payfor 的TobeOrder[]
            await this.setToBeOrder([])
            // 提醒shopcar vuex 下次进行更新
            await this.setHaveChange(true)
            // 更新订单
            await this.setOrderHaveChange(true)
            await this.getOrders()
            //跳转到用户中心
            this.$router.push('/order/waitpay')
        }else{
            // 提醒失败原因
        }
    }
    /**
     * @name: 前往设置用户地址界面
     * @param {type} 
     * @return: 
     */
    routeSetLocationShowDialog(){
        this.setshowLocationDialog(true)
        // 前往
        this.$router.push('/auth/usersetting')
    }
    /**
     * @name: 返回上一级
     * @param {type}
     * @return:
     */
    routerGoBack() {
        const that = this as any
        that['$router'].back()
    }
    /* __________________________________________________________vue  生命周期 */
    mounted(){
        // 没有物品都无法提交订单 并 返回首页
        const that=this as any
        if(this.toBeOrder.length===0){
            this.SubmitBtn=true
            this.$router.push('/main')
        }
        //没有设置收货地址 无法提交订单
        if(that['$auth'].user.location===''&&that['$auth'].user.location===null){
            this.SubmitBtn=true
        }
    }
}
</script>

<style scoped lang="scss"></style>
