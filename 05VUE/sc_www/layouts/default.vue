<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-10 16:23:54
 * @LastEditTime: 2020-04-30 22:31:30
 * @LastEditors: Do not edit
 * @Description:
 -->
<template lang="pug">
    v-app
        v-navigation-drawer(app v-model="drawerleft" temporary  )
        v-content
            //- 相当于router-view
            keep-alive
                nuxt
        v-footer(app)
        v-bottom-navigation(
            :value="vBottomNavigationBtn" 
            grow 
            app
        )
            v-btn(
                    @click="vuexChangeActiveBtnNumber(index)"  
                    v-for="(item,index ) of activebtnitems" 
                    :key="item.title" :to="item.path"
                    height="56" 
                )
                span(v-text="item.title" class="yellow--text text--darken-4 ")
                v-icon(v-text="item.icon" color="yellow darken-4" )
</template>
<script lang='ts'>
/* eslint-disable */
import { Component, Vue, State, Mutation, namespace } from 'nuxt-property-decorator'
import { log } from 'util'

const LayoutModule = namespace('layout') // 填写文件名

@Component
export default class Index extends Vue {
    // vuex 动态底部按钮
    @LayoutModule.State vBottomNavigationBtn!: number
    @LayoutModule.Mutation setvBottomNavigationBtn: any
    // vuex  auth
    @State readonly auth: any
    // 右侧导航栏
    private drawerleft: boolean = false
    // 菜单配置
    private activebtn: Array<any> = [
        { title: '主页', path: '/main', icon: 'mdi-home' },
        { title: '购物车', path: '/shopcar', icon: 'mdi-shopping' },
        { title: '个人中心', path: '/center', icon: 'mdi-account' },
    ]
    /* __________________计算属性___________________ */
    /**
     * @name: 设置底部菜单属性
     * @param {type}
     * @return:
     */
    get activebtnitems() {
        if (!this.auth.user) {
            return this.activebtn
        } else {
            const role = this.auth.user.pid
            if (role === 2) return this.activebtn
            if (role === 3)
                return [
                    { title: '主页', path: '/main', icon: 'mdi-home' },
                    { title: '购物车', path: '/shopcar', icon: 'mdi-shopping' },
                    { title: '店铺', path: '/shoper/order/waitfh', icon: 'mdi-store' },
                    { title: '个人中心', path: '/center', icon: 'mdi-account' },
                ]
        }
    }
    /**
     * @name: 获取btn number
     * @param {type}
     * @return:
     */

    /* ____________________事件_________ */
    /**
     * @name: 将底部菜单的当前选定number 传到nvex 和 sessionstorage中
     * @param {type}
     * @return:
     */
    vuexChangeActiveBtnNumber(number: number) {
        // 将底部按钮状态进行更改
        this.setvBottomNavigationBtn(number)
    }
    /* ————————————————————————————vue生命周期———————————————— */
    /**
     * @name:从sessionstorage中获取 btn状态 并更改 vuex
     * @param {type}
     * @return:
     */
    beforeMount() {
        if (sessionStorage) {
            const btnString = sessionStorage.getItem('vBottomNavigationBtn')
            if (btnString) {
                this.setvBottomNavigationBtn(+btnString)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
</style>