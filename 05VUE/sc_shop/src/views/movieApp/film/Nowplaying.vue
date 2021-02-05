<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-10 20:36:59
 * @LastEditTime: 2020-04-11 19:54:00
 * @LastEditors: Do not edit
 * @Description: 
 -->
<template lang="pug">
v-container( fluid class="mx-0 mt-n2 px-0" )
    v-list( class="mx-0 px-0" )
            v-list-item(v-for="item in nowplayingList" :key="item.id" @click="handleChangePage(item.id)" class="mx-0 px-0")
                v-list-item-content(class="mx-0 px-0")
                    v-row
                        v-col(cols="3" class="mx-0 pt-1 pl-6 pr-1")
                            v-img( :src="changepath(item.img)" width="64" height="90" )
                        v-col(cols="9" class="mx-0 my-0 px-1")
                            div(v-text="item.nm")
                    
                        
</template>
<script lang='ts'>
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";
import {State,Action,Mutation} from 'vuex-class'
import axios from "axios";

@Component
export default class Nowplaying extends Vue {
    // 有了vuex做缓存 原来接受axios数据的datalist废弃
    // private datalist: Array<string> = ["111", "222", "333"];
    // vuex
    @State private readonly nowplayingList!:Array<any>
    private handleChangePage(id: string): void {
        // 编程式导航 路径跳转
        // this.$router.push(`/movieapp/Detail/${item}`)
        //名字跳转
        this.$router.push({ name: "Detail", params: { id: id } });
    }
    private changepath(path: string):string|undefined {
        // 也可以使用v-if
        if(path){
            return path.replace("w.h", "64.90");
        }
    }
    mounted() {
        // 使用了和父组件film中相同的数据所以直接在 
        // 父组件中 使用 vuex的actions获取
       
    }
}
</script>
<style scoped>
</style>