<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-06 17:29:50
 * @LastEditTime: 2020-04-10 16:30:36
 * @LastEditors: Do not edit
 * @Description: 子-父-子组件传值
 -->
<template lang="pug">
    div()
        nav-bar(@isshow="handleIsShow")
        br
        left-bar(:isshow="isshow")
</template>
<script lang='ts'>
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";
import LeftbarChild from "../../components/leftbar/LeftbarChild.vue";
import navbar from '../../components/leftbar/Navbar.vue';
@Component({
    components: {
        "leftBar": LeftbarChild,
        "navBar":navbar,
    }
})
export default class LeftBar extends Vue {
    private isshow:boolean=false
    private handleIsShow(e:boolean){
        this.isshow=e
    }
}
</script>
<style scoped lang="scss">

</style>