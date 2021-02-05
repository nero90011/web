<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-12-24 21:41:45
 * @LastEditTime: 2020-12-24 22:11:40
 * @LastEditors: Do not edit
 * @Description: 
-->
<template>
    <van-nav-bar 
        title="应检尽检" 
        left-text="返回" 
        right-text="按钮" 
        left-arrow 
        @click-left="onClickLeft" 
        @click-right="onClickRight" 
    />
    <van-tabbar v-model="active">
        <van-tabbar-item name="拍照录入" icon="home-o" to="/">拍照录入</van-tabbar-item>
        <van-tabbar-item name="手动录入" icon="search" to="/about">手动录入</van-tabbar-item>
        <van-tabbar-item name="个人中心" icon="friends-o">个人中心</van-tabbar-item>
    </van-tabbar>
    <router-view />
</template>

<script lang="ts">
import Vue from 'vue'
import { Tabbar, TabbarItem ,NavBar } from 'vant'
export default {
    name: 'APP',
    components: {
        vanTabbar: Tabbar,
        vanTabbarItem: TabbarItem,
        vanNavBar: NavBar
    },
    data() {
        return {
            active: 0,
        }
    },
}
</script>
