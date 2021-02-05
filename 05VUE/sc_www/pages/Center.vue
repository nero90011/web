<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-10 18:23:39
 * @LastEditTime: 2020-05-01 13:54:22
 * @LastEditors: Do not edit
 * @Description:
 -->
<template lang="pug">
    v-container( class="grey lighten-4" height="100%")  
        v-card( v-if="auth.user" elevation="0"   shaped)
            v-row
                v-col(cols="10")         
                    v-avatar(  class="mx-2")
                        v-img( :src="avatarImgSrc" )
                    span(v-text="auth.user.username" class="mx-2  title")
                v-col(right class="pl-2" )
                    v-btn(to="/auth/usersetting"  icon ) 
                        v-icon(v-text="'mdi-cog'" )
        v-card( elevation="0" border shaped class="mt-3")
            v-row()
                v-col()
                    span(class="font-weight-bold body-1 ml-2") 我的订单
                v-col(align="end")
                    span(class="font-regular body-2 ") 查看全部订单
                        v-icon mdi-menu-right
            v-divider
            v-row(class="yellow--text text--darken-4")
                v-col(align="center" class="body-2" 
                    @click="handleRoute('/order/waitpay')"
                )
                    v-badge(
                        color="yellow darken-4"
                        :content="`+${Object.keys(GetterWaitForPay).length}`"
                        v-show="Object.keys(GetterWaitForPay).length!==0"
                        bordered
                        offset-x="-20"
                        offset-y="0"
                    )
                    v-icon(
                        color="yellow darken-4"
                    ) mdi-wallet
                    br
                    span 待付款
                v-col(align="center" class="body-2" 
                    @click="handleRoute('/order/waitfh')"
                )
                    v-badge(
                        color="yellow darken-4"
                        :content="`+${Object.keys(GetterWaitForFaHuo).length}`"
                        v-show="Object.keys(GetterWaitForFaHuo).length!==0"
                        bordered
                        offset-x="-20"
                        offset-y="0"
                    )
                    v-icon(color="yellow darken-4") mdi-wallet-giftcard
                    br
                    span 待发货
                v-col(align="center" class="body-2"
                    @click="handleRoute('/order/waitsh')"                
                )
                    v-badge(
                        color="yellow darken-4"
                        :content="`+${Object.keys(GetterWaitForShouHuo).length}`"
                        v-show="Object.keys(GetterWaitForShouHuo).length!==0"
                        bordered
                        offset-x="-20"
                        offset-y="0"
                    )
                    v-icon(color="yellow darken-4") mdi-truck-fast
                    br
                    span 待收货
                v-col(align="center" class="body-2"
                    @click="handleRoute('/assess/wait')"
                )
                    v-badge(
                        color="yellow darken-4"
                        :content="`+${Object.keys(GetterWaitForPingJ).length}`"
                        v-show="Object.keys(GetterWaitForPingJ).length!==0"
                        bordered
                        offset-x="-20"
                        offset-y="0"
                    )
                    v-icon(color="yellow darken-4") mdi-message-draw
                    br
                    span 待评价
                v-col(align="center" class="body-2"
                    @click="handleRoute('/assess/have')"
                )
                    v-icon(color="yellow darken-4") mdi-message-bulleted
                    br
                    span 评价
</template>
<script lang='ts'>
/* eslint-disable */
import { Component, Vue,State, Getter, Action, Mutation, namespace } from 'nuxt-property-decorator'

const CenterModule=namespace('center')
@Component({
    middleware: 'auth',
})
export default class CenterIndex extends Vue {
    // order
    @CenterModule.Action getOrders:any
    @CenterModule.Getter GetterWaitForPay:any
    @CenterModule.Getter GetterWaitForFaHuo:any
    @CenterModule.Getter GetterWaitForShouHuo:any
    @CenterModule.Getter GetterWaitForPingJ:any


    /* vuex  */ // 登录成功后信息被存储到了 vuex 的 auth中
    @State readonly auth: any
    /* from相关 */
    private isShowLoginFrom: boolean = false
    private loginModel: Object = { lusername: '', lpassword: '' }
    /**
     * @name: 计算属性
     * @param {type}
     * @return:
     */
    /* img */
    get avatarImgSrc() {
        if (this.auth.user.img) {
            //设置为auth.user.img
            return this.auth.user.img
        } else {
            //设置为默认图片
            return '/user.jpg'
        }
    }
    /* ________________________________________________________vue */
    mounted(){
        // 获取所有订单信息
        this.getOrders()
    }
    /* _______________________________________________________route */
    handleRoute(path:string){
        this.$router.push(path)
    }
}
</script>
<style scoped lang="scss">
</style>