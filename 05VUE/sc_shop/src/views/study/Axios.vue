<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-02 16:05:29
 * @LastEditTime: 2020-04-10 18:21:23
 * @LastEditors: Do not edit
 * @Description:
 -->
<template lang="pug">
    div
        button(@click="handleClick()") 正在热映
        ul
            li(v-for="item in datalist" :key="item.id")
                h3(v-text="item.nm")
                img(:src="item.img")

</template>
<script lang='ts'>
/* eslint-disable */
import { Component, Vue } from 'vue-property-decorator'
import {ComingList} from '../../components/fetch/Data1'
import axios from 'axios'

@Component
export default class Axios extends Vue {
    private datalist:Array<ComingList> =[]

    private handleClick(){
        axios.get('/data1.json').then(res=>{
            //axios自动包装data属性,需要res.data获取
            this.datalist=res.data.data.comingList
        }).catch(err=>{
            console.log(err);
            
        })
    }

    mounted() {
        axios.get('/ajax/mostExpected?ci=1200&limit=20&offset=0&token=').then(res=>{
            console.log(res.data);
        })   
    }
}
</script>
<style scoped lang="scss">
</style>