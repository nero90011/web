<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-07 15:54:19
 * @LastEditTime: 2020-04-07 16:03:58
 * @LastEditors: Do not edit
 * @Description:
 -->
<template lang="pug">
    div
        div(class="wrap" )
            slot
</template>
<script lang='ts'>
/* eslint-disable */
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class NavBar extends Vue {

}
</script>
<style scoped lang="scss">
.wrap{
    background-color: aquamarine;
    height: 30px;
}
</style>