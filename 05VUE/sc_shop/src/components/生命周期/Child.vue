<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-08 11:43:52
 * @LastEditTime: 2020-04-08 11:57:18
 * @LastEditors: Do not edit
 * @Description:
 -->
<template lang="pug">
    div(id="aaa")
        | child --{{title}}
        button(@click="title='111'") change
</template>
<script lang='ts'>
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Child extends Vue {
    private title:string='000'
    private datalist:Array<string>=[]
    private count:number=0


    beforeCreate() {
        console.log("创建之前");
    }
    created() {
        console.log("创建了");
    }
    beforeMount() {
        console.log("节点挂载之前");
    }
    mounted() {
        console.log(
            "节点挂载完毕",
            "访问dom,setInterval,window.onscroll,监听事件,ajax"
        );
    }
    // 不常用
    beforeUpdate() {
        console.log('beforeupdate');
    }
    updated() {
        console.log("更新之后可以访问dom");
    }
    beforeDestroy() {
        console.log('beforeDestroy clearInterval,window.onscroll=null,$off');
    }
    destroyed() {
        console.log('destroyed--clearInterval, window.onscroll=null,$off');
    }
}
</script>
<style scoped lang="scss">
</style>