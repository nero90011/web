<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-10 18:23:20
 * @LastEditTime: 2020-04-20 18:53:13
 * @LastEditors: Do not edit
 * @Description: 
 -->
    <template lang="pug">
    v-container(  )
            | 主页
    </template>
    <script lang='ts'>
    /* eslint-disable */
    import { Component, Vue,Getter, State, Action } from "nuxt-property-decorator";
    @Component({
    })
    export default class Film extends Vue {
    // // 使用vuex 而不是datalist=axios.get
    // // private datalist: Array<string> = [];
    // private activeBtn: number = 0;
    // private activeBtnitems: Array<Object> = [
    //     {
    //         title: "正在热映",
    //         path: "/film/nowplaying",
    //         icon: "mdi-movie-roll"
    //     },
    //     {
    //         title: "即将上映",
    //         path: "/film/willcoming",
    //         icon: "mdi-theater"
    //     }
    // ];
    // mounted() {
    //     // 通过vuex缓存和getter获取数据 而不是直接axios
    //     if(this.nowplayingList.length===0){
    //         // 没有缓存,使用action进行ajax异步请求 通过mutation记录并提交到state中
    //         this.getnowplayingListAction()
    //     }else{
    //         // 使用缓存数据
    //         console.log('使用缓存数据');

    //     }

    //     // 监听window.onscroll
    //     window.onscroll = this.handleScroll;
    // }
    // beforeDestroy() {
    //     // 解绑事件  因为这是全局的
    //     window.onscroll = null;
    // }
    // // 项目吸顶效果
    // private isFixed: boolean = false;
    // private handleScroll() {
    //     // 滚动距离>=轮播高度时 添加css 贴顶显示
    //     const carousel = (document as any).querySelector(".js-carousel")[
    //         "offsetHeight"
    //     ];
    //     //document.documentElement.scrollTop>=carousel
    //     if (document.documentElement.scrollTop >= carousel) {
    //         this.isFixed = true;
    //     } else {
    //         this.isFixed = false;
    //     }
    // }

    // private changepath(path: string): string | undefined {
    //     if (path) {
    //         return path.replace("w.h", "1000.762");
    //     }
    // }
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
