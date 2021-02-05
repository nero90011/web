<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-06 18:31:29
 * @LastEditTime: 2020-04-06 19:01:57
 * @LastEditors: Do not edit
 * @Description:
 -->
<template lang="pug">
    div
        p() refchild
</template>
<script lang='ts'>
/* eslint-disable */
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class RefChild extends Vue {
    private childname:string="子组件状态"

    private add(data:string):void{
        console.log(data);
    }
}
</script>
<style scoped>
</style>