<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-10 15:30:01
 * @LastEditTime: 2020-04-10 15:35:11
 * @LastEditors: Do not edit
 * @Description:
 -->
<template lang="pug">
    div
        input(type="text" v-show="isTabBarShow" )
</template>
<script lang='ts'>
/* eslint-disable */
import { Component, Vue } from 'vue-property-decorator'
import {State,Getter,Action,Mutation,namespace} from 'vuex-class'

@Component
export default class Child extends Vue {
    @State('isTabBarShow') readonly isTabBarShow!:boolean  // this.$store.state.isTabBarShow
}
</script>
<style scoped>
</style>