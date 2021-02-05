<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-10 16:23:54
 * @LastEditTime: 2020-04-11 20:24:37
 * @LastEditors: Do not edit
 * @Description:
 -->
<template lang="pug">
    v-app
        v-app-bar(
            app class="purple lighten-1 white--text"
            dense
            hide-on-scroll
            absolute 
        )
            v-app-bar-nav-icon(
                @click="drawerright=true"
                class="white--text" 
            )
            v-toolbar-title movie
            v-spacer
            v-app-bar-nav-icon(
                @click="drawerleft=true"
                class="white--text" 
            )
        v-navigation-drawer(app v-model="drawerleft" temporary right)
            v-list( class="pt-0 dense"  )
                v-list-item(v-for="item in items" :key="item.title" :to="item.path")
                    v-list-item-content
                        v-list-item-title(v-text="item.title")
        v-navigation-drawer(app v-model="drawerright" temporary  )
        v-content
            router-view
        v-footer(app)
        v-bottom-navigation(
            :value="activeBtn" 
            color="purple lighten-1" 
            grow shift
            fixed
            v-show="vbottomnavigation"
        )
            v-btn(v-for="item in activeBtnitems" :key="item.title" :to="item.path")
                span(v-text="item.title")
                v-icon(v-text="item.icon")
</template>
<script lang='ts'>
/* eslint-disable */
import { Component, Vue } from 'vue-property-decorator'
import {State} from 'vuex-class'
import {SET_IS_TAB_BAR_SHOW,SET_VBOTTOM_NAVIGATION,SET_NOWPLAYING_LIST} from '../type/index'

@Component
export default class Index extends Vue {
    // 底部导航栏是否隐藏
    @State private readonly vbottomnavigation!:boolean
    // 左侧导航栏是否隐藏
    private drawerleft:boolean=false
    // 右侧导航栏
    private drawerright:boolean=false
    // 菜单配置
    private items:Array<Object>=[
        {title: 'test', path:'/study/test1'},
        {title: '购物车', path:'/study/gwc'},
        {title: 'fetch', path:'/study/fetch'},
        {title: 'Axios', path:'/study/Axios'},
        {title: '组件', path:'/study/component01'},
        {title: 'leftbar', path:'/study/leftbar'},
        {title: '事件总线', path:'/study/sjzx'},
        {title: '动态组件', path:'/study/dtzj'},
        {title: 'slot', path:'/study/slot'},
        {title: 'slotbar', path:'/study/slotbar'},
        {title: 'animate', path:'/study/animate'},
        {title: 'vuex', path:'/study/vuex'},
    ]
    // 动态底部按钮
    private activeBtn:number=0
    private activeBtnitems:Array<Object>=[
        {title: 'Film', path:'/movieapp/Film',icon:'mdi-movie-roll'},
        {title: 'cinema', path:'/movieapp/Cinema',icon:'mdi-theater'},
        {title: 'center', path:'/movieapp/Center',icon:'mdi-account-group-outline'},
    ]
}
</script>
<style >
*{
    margin:0;
    padding:0;
}
</style>