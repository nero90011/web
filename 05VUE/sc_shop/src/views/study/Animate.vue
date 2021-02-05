<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-07 19:16:28
 * @LastEditTime: 2020-04-08 11:27:40
 * @LastEditors: Do not edit
 * @Description:
 -->
<template lang="pug">
    //- vue中css动画都保留了
        vue动画作用:在插入,更新或者移除dom时,提供多种不同方式的应用过渡效果
    div
        h1 单个标签的动画
        button(@click="isshow=!isshow") click
        //- vue内置标签
        transition(name="kerwinbounce")
            div(v-show="isshow" ) 111111
        h1 多个标签的动画
        button(@click="isshow=!isshow") 多标签click
        //- vue内置标签
            这个走,那个来
            因为diff算法同标签复用性会导致动画失效
            所以要两个标签不同 或者使用key值
            mode 先来再走还是先走再来
        transition(name="kerwinbounce" mode="out-in" )
            p(v-if="isshow" :key="1") 111111
            p(v-else :key="2") 222222

        h1 列表过渡
        input(type="text" v-model="mytext" )
        button(@click="handleAddClick(mytext)") add
        //- 一定要写在li上 不是ul上
            tag :将vue标签实例化成指定标签
        transition-group(tag="ul" name="kerwinbounce" mode="out-in" )
            li(v-for="(item,index ) in datalist" :key="item")
                | {{item}}---{{index}}
                button(@click="handleDelClick(index)") del
</template>
<script lang='ts'>
/* eslint-disable */
import { Component, Vue } from 'vue-property-decorator'
   
@Component
export default class AnimateTest extends Vue {
    private isshow:boolean=true
    private datalist:Array<string>=[]
    private mytext:string='111'

    handleAddClick(mytext:string):void{
        this.datalist.push(mytext)
    }
    handleDelClick(index:number):void{
        this.datalist.splice(index,1)
    }
}
</script>
<style scoped lang="scss">
/* kerwinfade vue自定义动画*/
.kerwinfade{
    &-enter-active,&-leave-active{/* 过渡生效时的状态  离开过渡生效时的状态 */
        transition: all 1.5s;
    }
    &-enter,&-leave-to{ /* 过渡开始的状态 过渡的结束状态 */
        opacity: 0;
        transform: translateX(100px);
    }
}
/* kerwinbounce 关键帧动画*/
.kerwinbounce{
    &-enter-active{
        animation: bounce-in .5s;
    }
    &-leave-active{
        animation: bounce-in .5s reverse;
    }
}
@keyframes bounce-in {
    0% {
        opacity: 0;
        transform: translateX(100px);
    }
    100%{
        opacity: 1;
        transform: translateX(0px);
    }
}
</style>