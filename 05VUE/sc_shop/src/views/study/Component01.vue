<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-02 21:27:31
 * @LastEditTime: 2020-04-10 16:29:24
 * @LastEditors: Do not edit
 * @Description:
 -->
<template lang="pug">
    div
        h1() 父组件重用
        child
        child
        child
        h1() 父组件传值到子组件
        button 返回
        child(myname="home" :myshow="false")
        child(myname="list" :myshow="true")
        child(:myname="parentname" :myshow="true")
        child()
        button 主页
        h1() 子组件传值到父组件
        //-  不写括号 则默认类似于 ($event)
        child(@myevent="handleEvent")
        h1() ref通信
        //- ref放在标签上获得的是原生dom节点
        //- ref放在组件上拿到的是组件对象
        //- 不推荐使用ref 耦合度太高
        input(type="text" ref="mytext" value="" )
        button(@click="handleAdd") 打印input的value
        ref-child(ref="refchild")
        button(@click="handleAdd") 打印refchild的值
</template>
<script lang='ts'>
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";
import Component02 from "../../components/componenttest/Component02.vue";
import refChild from '../../components/componenttest/RefChild.vue'
import RefChild from '../../components/componenttest/RefChild.vue';
//必须加上.vue @代表了/src

@Component({
    components: {
        "child":Component02, //重命的名在前
        "ref-child":refChild
    }
})
// @Component  component声明不能重复,否则报错
export default class Component01 extends Vue {
    private parentname:string="父组件的状态"

    private handleEvent(e:string){
        console.log("父组件收到钱了",e);
    }

    // ref传值
    private handleAdd():void{
        let refs:any=this.$refs  // ts中使用vue属性需要使用此种方式
        // console.log("1111",this.$refs.mytext.value);

        //子传父
        console.log(refs.refchild['childname']); // ts中需要这样调用 ['$data'].childname

        //父传子
        let add:()=>string
        refs.refchild.add('孩子听话')
    }
}
</script>
<style scoped lang="scss">
</style>