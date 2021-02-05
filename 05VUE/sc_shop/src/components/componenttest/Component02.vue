<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-02 21:42:11
 * @LastEditTime: 2020-04-06 17:19:47
 * @LastEditors: Do not edit
 * @Description:
 -->
<template lang="pug">
    div
        div(v-text="myname" v-show="myshow")
        button(@click="payMoney()") 子传父
</template>
<script lang='ts'>
/* eslint-disable */
import { Component, Vue ,Prop} from 'vue-property-decorator'

@Component
export default class Component02 extends Vue {
    // 接受父组件的 myname属性键值对
    @Prop(String) private readonly myname!:string //要不 |undefined 要不 !:
    @Prop(Boolean) private readonly myshow!:boolean
    // 子传父
    private childname:string="1000"
    private payMoney(){
        this.$emit("myevent",this.childname)
    }

}
</script>
<style scoped lang="scss">
</style>