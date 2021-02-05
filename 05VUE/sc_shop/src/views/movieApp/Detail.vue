<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-10 19:05:18
 * @LastEditTime: 2020-04-11 20:24:17
 * @LastEditors: Do not edit
 * @Description: 
 -->
<template lang="pug">
    div
        | {{thisMovie}}
</template>
<script lang='ts'>
/* eslint-disable */
import { Component, Vue,Prop } from 'vue-property-decorator'
import {Mutation} from 'vuex-class'
import {Films,Coming} from './data/Films'
import axios from 'axios'
import {SET_IS_TAB_BAR_SHOW,SET_VBOTTOM_NAVIGATION,SET_NOWPLAYING_LIST} from '../../type/index'

@Component
export default class Detail extends Vue {
    private thisMovie:string=''
    @Mutation(SET_VBOTTOM_NAVIGATION) private Setvbottomnavigation:any 
    beforeMount() {
        console.log('隐藏底部导航栏');
        this.Setvbottomnavigation(false)
    }
    beforeDestroy() {
        console.log('显示底部导航栏');
        this.Setvbottomnavigation(true)
    }
    mounted() {
        console.log(this.$route.params.id)
        // 将类型断言成Coming as Coming
        this.thisMovie=this.$route.params.id as string
    }
}
</script>
<style scoped>
</style>