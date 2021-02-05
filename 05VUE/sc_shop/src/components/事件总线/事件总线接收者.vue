<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-06 19:24:47
 * @LastEditTime: 2020-04-06 20:16:57
 * @LastEditors: Do not edit
 * @Description:
 -->
<template lang="pug">
    div()
        | 我是一个用户
    //- 事件总线可以让  两个没什么联系的组件 进行通信
</template>
<script lang='ts'>
/* eslint-disable */ 
import { Component, Vue } from "vue-property-decorator";
import {notGlobalBus} from '../../global/bus'

@Component
export default class Sjzxjsz extends Vue {
    mounted() {
        notGlobalBus.$on("message",(data:string)=>{
            console.log('消息推送了'+data);
        })
    }
}
</script>
<style scoped>
div {
    background-color: aquamarine;
}
</style>