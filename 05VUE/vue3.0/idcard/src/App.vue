<template>
    <van-tabbar v-model="active" active-color="#3325DA" inactive-color="#73858C">
        <van-tabbar-item icon="edit" to="/">录入</van-tabbar-item>
        <van-tabbar-item icon="points" to="/about">数据</van-tabbar-item>
    </van-tabbar>
    <router-view />
</template>

<script>
import { Tabbar,TabbarItem } from 'vant'
import '@vant/touch-emulator'

import {ref} from 'vue';

export default {
    components: {
        vanTabbar:Tabbar,
        vanTabbarItem:TabbarItem
    },
    setup(){
        const active=ref(0)
        return {active}
    }

}
</script>
