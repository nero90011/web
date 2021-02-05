<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-06 17:50:23
 * @LastEditTime: 2020-04-06 18:15:42
 * @LastEditors: Do not edit
 * @Description:
 -->
<template lang="pug">
    div(class="nav" )
            button(@click="handleClick()") leftbar
</template>
<script lang='ts'>
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {
    private isshow: boolean = false;

    private handleClick() {
        this.isshow = !this.isshow;
        console.log(this.isshow);
        this.$emit("isshow",this.isshow) //键值对
    }
}
</script>
<style scoped lang="scss">
.nav {
    position: fixed;
    width: 100%;
    height: 30px;
    background-color: aquamarine;
    margin-bottom: 30px;
}
</style>