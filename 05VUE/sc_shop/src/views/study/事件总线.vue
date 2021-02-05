<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-06 19:39:29
 * @LastEditTime: 2020-04-07 13:13:05
 * @LastEditors: Do not edit
 * @Description:
 -->
<template lang="pug">
    //- 事件总线:
        用于复杂结构的两组件之间传值
        1.在global中
        2.在component->事件总线发布者中
        3.在component->事件总线接收者中
    div
        fbz
        jsz

</template>
<script lang='ts'>
/* eslint-disable */
import { Component, Vue } from 'vue-property-decorator'
import fbz from '../../components/事件总线/事件总线发布者.vue'
import jsz from '../../components/事件总线/事件总线接收者.vue'

@Component({
    components:{
        fbz,
        jsz
    }
})
export default class Sjzx extends Vue {

}
</script>
<style scoped>
</style>