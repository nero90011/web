<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-06 17:36:05
 * @LastEditTime: 2020-04-06 18:12:47
 * @LastEditors: Do not edit
 * @Description:
 -->
<template lang="pug">
    div(v-show="isshow")
        ul()
            li() 111
            li() 222
            li() 333
</template>
<script lang='ts'>
/* eslint-disable */
import { Component, Vue,Prop } from 'vue-property-decorator'

@Component
export default class LeftbarChild extends Vue {
    @Prop(Boolean) private readonly isshow!:boolean
}
</script>
<style scoped>
    div{
        background: yellowgreen;
        width: 300px;
    }
</style>