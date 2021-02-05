<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-25 13:30:16
 * @LastEditTime: 2020-04-30 21:10:22
 * @LastEditors: Do not edit
 * @Description: 
 -->
<template lang="pug">
    div(class="grey lighten-4" class="overflow-hidden")
        v-app-bar(dense elevation="0" app)
                v-btn(class="noborder"  icon @click="routerGoBack" ) 
                    v-icon(v-text="'mdi-arrow-left'" )
                v-autocomplete(
                    rounded 
                    label="搜索我的订单"
                    hide-details dense outlined solo flat
                    class="mx-5 nero-input-search"
                    append-icon="mdi-magnify"
                    background-color="grey lighten-4" 
                    color="#F57F17"
                )
                v-btn( icon)
                    v-icon mdi-dots-vertical
                template( v-slot:extension)
                    v-tabs(color="yellow darken-4"  fixed-tabs show-arrows optional)
                        v-tab(to="/assess/wait") 待评价
                        v-tab(to="/assess/have" ) 已评价
        keep-alive
            nuxt 
 </template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
    middleware: 'auth',
})
export default class AssessIndex extends Vue {
    /**
     * @name: 返回上一级
     * @param {type}
     * @return:
     */
    routerGoBack() {
        const that = this as any
        this.$router.push('/center')
    }

    layout() {
        return 'nothing'
    }
}
</script>

<style scoped lang="scss"></style>
