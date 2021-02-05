
<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-01 15:40:12
 * @LastEditTime: 2020-04-10 17:58:11
 * @LastEditors: Do not edit
 * @Description:
-->
<template lang="pug">
v-container(  )
    div(id="wrap")
        div(v-text="10>20?'a':'b'")
        div(v-html="h1")
        div(v-show="isShow") 动态显示和隐藏
        div(v-if="isCreated") 动态创建和删除
        br
        h2 动态更改class三种方式
        button(:class="isClass?'red':'yellow'" @click="testColor()")  class绑定
        button(:class="classObj" ) class状态对象绑定
        button(:class="classArr" ) class状态数组绑定
        br
        br
        h2 购物车
        button(@click="loading") 刷新
        div(v-if="dataList.length")
            li(v-for="item in dataList" :key="item" v-text="item")
        div(v-else) 购物车空了
        br
        br
        h2 v-for
        h3 key用来复用元素
        ul
            li(v-for="item in vforobj" :key="item.id" v-text="item")
            li(v-for="item in vforarray" :key="item.id" v-text="item")
            li(v-for="(item,index) of vforarray" :key="item.id" v-text="item")
        br
        //- concat只返回新数组不更改原数组,可以让 原数组=concat(原数组)
            数组:
                直接修改array的值 vforarray[0]='233'是不行的
                应该用:vforarray.splic(0,1,"233")
                或者 Vue.set(vforarray,0,'233')
            对象
                Vue.set(vforobj,0,'key','value')
        h2 列表查询过滤 模糊查询
        //-
        input(type="text"  v-model="mytext")
        ul
            li(v-for="item in getMyDataList" :key="item" v-text="item")
        br
        br
        h2 事件检测绑定
        //- 是否写()都行 此处不能加this
        button(@click="handleClick") click1
        button(@click="handleClick()") click2
        button(@click="isShow=!isShow") click3不推荐此种写法
        div(v-show="isShow") isShow
        h2 事件冒泡
        ul(@click="handleUlClick()")
            li(@click.stop="handleLiClick()") 111
            li 222
            li 333
        br
        br
        h2 表单model
        input(type="chebox" v-model="isChecked")
        br
        //- 多个vmodel绑定必须设置value
        h3 多选
        p 你喜欢运动么
            input(type="checkbox" v-model="checkgroup" value="游泳"  )
            | 游泳
            input(type="checkbox" v-model="checkgroup" value="篮球"  )
            | 篮球
            input(type="checkbox" v-model="checkgroup" value="长跑"  )
            | 长跑
        | {{checkgroup}}
        h3 单选
        p 你喜欢的开发语言?
            input(type="radio" v-model="radiogroup" value="java"  )
            | java
            input(type="radio" v-model="radiogroup" value="pyton"  )
            | python
            input(type="radio" v-model="radiogroup" value="ts"  )
            | ts
        | {{radiogroup}}
        br
        br
        h3 表单model
        //- lazy:当失去焦点后再响应
            直接使用type="number" 进行限制
        input(type="text" v-model.lazy="mytext" )
        | {{mytext}}
        br
        | 请输入年龄:
        input(type="number" v-model.number="mytext" )
        | {{mytext}}
        br
        | 请输入名字:
        input(type="text" v-model.trim="mytext" )
        | {{mytext}}
        br
        br
        h2 计算属性
        //- 依赖的属性改变了,计算属性会从新计算 调用时不能加() 性能更高 普通方法会一直刷新执行
            多次引用时普通方法每调用一次都会执行  计算属性只会执行一次
        div
            p(v-text="getMyName")
    </template>
<script lang='ts'>
/* eslint-disable */
import { Component, Prop, Vue, Watch, Emit } from 'vue-property-decorator';
// @Component({
    // name="" //父组件名
// })
@Component
export default class Test1 extends Vue {
    //普通data
    private h1 : string ="<b>111</b>"//所有“ h1”的声明必须具有相同的修饰符。
    private isShow : boolean = true
    private isCreated : boolean = true 
    private isClass : boolean =true
    private classObj : Object ={a:true,b:true}
    private classArr : Array<String> =['c','d']
    private dataList : Array<String> =[]
    private vforarray: Array<String> =['111','222','333']
    private vforobj  : Object ={name:'nero',age:100,local:'192.168.0.100'}

    // 模糊查询 改为计算属性
    private searchdata : Array<String> = ['aaa','bbb','ccc','abb']
    private mytext : string =''
    // 笨比方法:复制一份vforarray
    // private searchtext : Array<String> =['aaa','bbb','ccc','abb']
    
    //表单
    private isChecked : Array<Boolean> =[]
    private checkgroup: Array<String> =[]
    private radiogroup: string=''

    //计算属性
    private myname:string="xiaoming"

    //普通方法
    private testColor(){
        this.isClass=!this.isClass
    }

    private loading(){
        this.dataList=['1','2']
    }

    // 改成计算属性
    // private search(){
    //     // input 只要value改变,就会触发
    //     //利用输入框字符,过滤包含字符的元素
    //     // console.log(this.mytext);
    //     this.searchtext=this.searchdata.filter((item) => {
    //         return item.indexOf(this.mytext)>-1
    //     })
    // }
    /* 计算属性依赖的值mytext一改变就会重新计算 普通方法不行 */
    get getMyDataList():Array<String>{
        return this.searchdata.filter(item=>
            item.indexOf(this.mytext)>-1
        )
    }

    private handleClick(){
        this.isShow=!this.isShow
    }

    private handleUlClick(){
        console.log('ul click')
    }

    private handleLiClick(){
        console.log('li click');
        
    }

    //计算属性 将该计算属性名定义为一个函数,并在函数前加上get set关键字即可 不能加private
    get getMyName():string{
        return this.myname.substring(0,1).toUpperCase()+this.myname.substring(1)
    }
    
    //watch方法
    // @Watch('age', {immediate: true, deep: true})
    // ageChange(newVal, oldVal){
    //     // do something
    // }

    // @Emit()  // 如果不提供事件名 默认为函数名  驼峰命名会被转化为kebab-case
    // myClick(params: string) {
    //     return params
    // }
}
</script>

<style scoped lang="scss">
    $red-text : red;
    .red{
        color:$red-text;
    }
    .yellow{
        color:yellow;
    }
    .a{
        color:blue
    }
    .b{
        font-size: 20px;
    }
    .c , .d{
        color: green;
    }
    #wrap{
        height: 2000px;
    }
</style>
