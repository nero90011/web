<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-07 15:18:10
 * @LastEditTime: 2020-04-07 15:32:48
 * @LastEditors: Do not edit
 * @Description:
 -->
<template lang="pug">
    div
        //- 使用
        h1 使用
        slot(name="sy")
        //- 用例
        h1 用例
        div
            slot(name="yl")
</template>
<script lang='ts'>
/* eslint-disable */
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SlotChiled01 extends Vue {

}
</script>
<style scoped>
</style>