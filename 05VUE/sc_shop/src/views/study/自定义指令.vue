<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-10 12:26:18
 * @LastEditTime: 2020-04-10 12:34:37
 * @LastEditors: Do not edit
 * @Description
 -->
<template>
    <div>
        <div v-color="'red'">111</div>
    </div>
</template>
<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

// 自定义hello指令
Vue.directive('color', {
  inserted (el, bind) {
    // 创建阶段
    console.log('当前节点插入到父节点了', el)

    el.style.background = bind.value
  },
  update (el, bind) {
    // 更新阶段
    el.style.background = bind.value
  }
})

@Component
export default class 自定义指令 extends Vue {}
</script>
<style scoped>
</style>
