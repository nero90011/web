<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-06 19:23:42
 * @LastEditTime: 2020-04-06 20:12:54
 * @LastEditors: Do not edit
 * @Description:
 -->
<template lang="pug">
    div( )
        | 我是一个发布者
        input(type="text"  v-model="mytext")
        button(@click="handleClick()") 发布
</template>
<script lang='ts'>
/* eslint-disable */
import { Component, Vue } from 'vue-property-decorator'
import {notGlobalBus} from '../../global/bus'

@Component
export default class Sjzxfbz extends Vue {
    private mytext:string=""

    private handleClick():void{
        notGlobalBus.$emit('message',this.mytext)
    }
}
</script>
<style scoped>
div{
    background-color: beige;
}
</style>