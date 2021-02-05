<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-02 00:38:25
 * @LastEditTime: 2020-04-10 16:16:27
 * @LastEditors: Do not edit
 * @Description:
 -->
<template lang="pug">
    div
        ul
            li(v-for="item in datalist" :key="item.id")
                h3(v-text="item.nm")
                img(:src="item.img")
        button(@click="handleClick()") fetch
</template>
<script lang='ts'>
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";
import {Data1,Data,Cinema,Promotion,Tag,HallTypeVOList,VipTag,City,ComingList} from '../../components/fetch/Data1'

@Component
export default class Fetch extends Vue {
    private datalist: Array<ComingList>=[];

    private handleClick() {
        // vuecli默认静态文件在public中 并默认反向代理到了/ 
        fetch("/data1.json").then(res=>{
            return res.json()
        }).then(res=>{
            // console.log(res);
            this.datalist=res.data.comingList
        })
    }
}
</script>
<style scoped lang="scss">
</style>
