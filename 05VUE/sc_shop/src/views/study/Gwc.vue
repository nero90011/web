<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-01 20:00:59
 * @LastEditTime: 2020-04-22 17:41:18
 * @LastEditors: Do not edit
 * @Description:
 -->
<template lang="pug">
    div()
        //- 全选全部选 只需要改变checkgroup的数据 然后vue会让视图自动响应
        input(type="checkbox" @change="handleChange" v-model="isAllChecked")
        ul
            li(v-for="item in datalist" :key="item.id")
                input(type="checkbox" v-model="checkgroup" :value="item" @change="handlelichange")
                | {{item}}
                button(@click="handledel(item)") del
                | {{item.number}}
                button(@click="handleadd(item)") add
        p() 您勾选了: {{checkgroup}}
        p() 总金额计算:{{sum}}
</template>
<script lang='ts'>
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";
import data from "../../components/gwc/gwc";
import {Data} from '../../components/gwc/Data'

@Component
export default class Gwc extends Vue {
    private datalist: Array<Data> = data;
    private checkgroup: Array<Data> = [];
    private isAllChecked :boolean =false

    // 计算属性不能加private 且引用时不能加()
    get sum():number {
        let sum=0
        for (const i in this.checkgroup) {
            sum+=this.checkgroup[i].number*this.checkgroup[i].price
        }
        return sum
    }

    //全选按钮事件
    handleChange(){
        if (this.isAllChecked) {
            this.checkgroup=this.datalist
        } else {
            this.checkgroup=[]
        }
    }
    // 子checkbox按钮事件
    handlelichange(){
        if (this.checkgroup.length===this.datalist.length) {
            this.isAllChecked=true
        } else {
            this.isAllChecked=false
        }
    }
    //增加数量
    handleadd(data:Data){
        data.number++
    }
    //减少数量
    handledel(data:Data){
        if (data.number===1) {
            alert('不能在减少了')
            data.number=1
        } else {
            data.number--
        }
        
    }
}
</script>
<style scoped lang="scss">
</style>
