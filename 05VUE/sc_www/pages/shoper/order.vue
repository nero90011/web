<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-19 12:07:45
 * @LastEditTime: 2020-04-30 21:09:46
 * @LastEditors: Do not edit
 * @Description: 
 -->
<template lang="pug">
    div
        v-tabs(color="yellow darken-4"   fixed-tabs show-arrows optional)
            v-tab(to="/shoper/order/waitpay") 待付款
            v-tab(to="/shoper/order/waitfh" ) 待发货
            v-tab(to="/shoper/order/waitsh") 待收货
        keep-alive
            nuxt
</template>

<script lang="ts">
import { Component, Vue, namespace } from "nuxt-property-decorator"

const ShoperModule=namespace('shoper')
@Component({
    layout: 'nothing',
    middleware: 'auth',
})
export default class ShoperOrder extends Vue {
    @ShoperModule.Action getOrderList:any

    mounted(){
        this.getOrderList()
    }
}
</script>

<style scoped lang="scss">
</style>
