<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-10 18:23:20
 * @LastEditTime: 2020-04-11 20:23:22
 * @LastEditors: Do not edit
 * @Description: 
 -->
<template lang="pug">
    v-container( fluid class="mx-0 mt-n2 px-0"  )
        v-carousel(
            cycle 
            hide-delimiter-background
            show-arrows-on-hover
            height="200" 
            class="js-carousel"
        )
            v-carousel-item(
                v-for="item in nowplayingListGetter" :key="item.id"
                :src="changepath(item.img)"
            )
        v-btn-toggle(
            :value="activeBtn" 
            color="purple lighten-1" 
            elevation="0"  
            class="allwidth js-btn-toggle" 
            :class="isFixed?'fixed':''"
        )   
            v-btn(width="50%"  v-for="item in activeBtnitems" :key="item.title" @click="mycomponent=item.path")
                span(v-text="item.title")
        component(:is="mycomponent") 
</template>
<script lang='ts'>
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import nowplaying from "./film/Nowplaying.vue";
import willcoming from "./film/WillComing.vue";
import {Getter,State,Action} from 'vuex-class'


declare module "vue/types/vue" {
    interface Vue {
        offsetHeight: any;
    }
}

@Component({
    components: {
        nowplaying,
        willcoming
    }
})
export default class Film extends Vue {
    private mycomponent: string = "nowplaying";
    // 使用vuex 而不是datalist=axios.get
    // private datalist: Array<string> = [];
    @State private readonly nowplayingList!:Array<any>
    @Getter nowplayingListGetter:any
    @Action private readonly getnowplayingListAction:any
    private activeBtn: number = 0;
    private activeBtnitems: Array<Object> = [
        {
            title: "正在热映",
            path: "nowplaying",
            icon: "mdi-movie-roll"
        },
        {
            title: "即将上映",
            path: "willcoming",
            icon: "mdi-theater"
        }
    ];

    mounted() {
        // 通过vuex缓存和getter获取数据 而不是直接axios
         if(this.nowplayingList.length===0){
            // 没有缓存,使用action进行ajax异步请求 通过mutation记录并提交到state中
            this.getnowplayingListAction()
        }else{
            // 使用缓存数据
            console.log('使用缓存数据');
            
        }
        // 监听window.onscroll
        window.onscroll = this.handleScroll;
    }
    beforeDestroy() {
        // 解绑事件  因为这是全局的
        window.onscroll = null;
    }
    // 项目吸顶效果
    private isFixed: boolean = false;
    private handleScroll() {
        // 滚动距离>=轮播高度时 添加css 贴顶显示
        const carousel = (document as any).querySelector(".js-carousel")[
            "offsetHeight"
        ];
        //document.documentElement.scrollTop>=carousel
        if (document.documentElement.scrollTop >= carousel) {
            this.isFixed = true;
        } else {
            this.isFixed = false;
        }
    }

    private changepath(path: string): string | undefined {
        if (path) {
            return path.replace("w.h", "1000.762");
        }
    }
}
</script>
<style scoped lang="scss">
.allwidth {
    width: 100%;
}
.fixed {
    position: fixed;
    left: 0px;
    top: 0px;
}
</style>