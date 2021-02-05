<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-07 13:10:20
 * @LastEditTime: 2020-04-10 18:03:17
 * @LastEditors: Do not edit
 * @Description:
 -->
<template lang="pug">
    //-动态组件 component元素 :动态的绑定多个组件到它的is属性
                keep-alive元素  : 保留状态,避免重新渲染
    div(id="box")
        keep-alive
            transition(name="kerwinfade" mode="out-in" )
                component(:is="who")
        footer()
            ul()
                li(@click="who='home'") 首页
                li(@click="who='list'") 列表
                li(@click="who='shop-car'") 购物车
</template>
<script lang='ts'>
/* eslint-disable */
import { Component, Vue } from 'vue-property-decorator'
import Home from '../../components/动态组件/Home.vue'
import List from '../../components/动态组件/List.vue'
import ShopCar from '../../components/动态组件/Shopcar.vue'

@Component({
    components:{
        'home':Home,
        'list':List,
        'shop-car':ShopCar
    }
})
export default class Dtzj extends Vue {
    private who:string='home'

}
</script>
<style scoped  lang="scss">
html ,body{
    width: 100%;
    margin: 0;
    padding:0;
    overflow: hidden;
}
#box{
    width: 100%;
    footer{
        width: 100%;
        position: fixed;    
        bottom: 0;
        ul{
            width: 100%;
            list-style: none;
            padding:0;
            margin: 0;

            display: grid;
            grid-template-columns:repeat(3,1fr);
            column-gap: 1px;
            
            text-align: center;
            li{
                background-color: rgba(80, 73, 73, 0.315);
                height: 35px;
                line-height: 35px;
                &:hover{
                    cursor: pointer;
                    background-color: aliceblue;
                }
                &:active{
                    background-color: beige;
                }

            }
        }
    }

}
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