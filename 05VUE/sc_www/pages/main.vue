<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-19 14:09:01
 * @LastEditTime: 2020-04-30 22:52:32
 * @LastEditors: Do not edit
 * @Description: 
 -->
<template lang="pug">
    div
        //- 导航栏
        //- v-card( color="grey lighten-4" flat tile elevation="0" )
            v-toolbar( dense elevation="0" )
        v-app-bar(dense elevation="0")
                v-icon mdi-shopping-search
                v-autocomplete(
                    rounded
                    label="猫"
                    hide-details dense outlined solo flat
                    class="mx-5 nero-input-search"
                    append-icon="mdi-magnify"
                    background-color="grey lighten-4" 
                    color="#F57F17"
                )
                v-spacer
                v-app-bar-nav-icon
        v-container(  )
            //- 轮播图
            v-carousel(
                cycle 
                show-arrows-on-hover
                height="200" 
                class="js-carousel"
                progress
                hide-delimiters
                progress-color="black"
            )
                v-carousel-item(
                    v-for="item in carouseldataList" :key="item.id"
                    :src="item.imgs[1]"
                    :aspect-ratio="16/9" 
                    contain 
                )
            //- mescroll模块
            mescroll-vue( ref="mescroll" class="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit")
                //- 内容
                v-list( class="mx-0 px-0" )
                    v-list-item(
                            v-for="item in dataList" :key="item.id" class="pa-0" v-ripple
                            @click="handleChangePage(item.id)"
                        )
                        v-list-item-content(class="mx-0 px-0 py-1")
                            v-row
                                v-col(cols="4" class="pr-0 py-1" align="center")
                                    v-img( :src="item.imgs[0]" width="95" height="95"  border-radius="10")
                                v-col(cols="8" class="pl-0 py-0" align="start")
                                    v-row()
                                        v-col(class="py-1" cols="12")
                                            div(v-text="item.title" class="pt-1 body-1 font-weight-medium")
                                        v-col(class="py-0" cols="12" )
                                            v-icon(small color="#F57F17") mdi-currency-cny
                                            span(v-text="item.money" class="orange--text text--darken-2 ")
                                        v-col(class="py-0" cols="12" )
                                            br
                                            span(v-text="'销量:'+item.sort" class="body-2 ")
                                            | /
                                            span(v-text="'库存:'+item.num" class="body-2 ")
            //- 提醒没有数据
            p(id="js-nodata-p")
</template>

<script lang="ts">
import { Component, Vue, Action, namespace } from 'nuxt-property-decorator'
import MescrollVue from 'mescroll.js/mescroll.vue'
import * as qs from 'qs'
import { ShoperPageData, Result } from '../interface/shoperpage.dto'

const MainModule = namespace('main')
@Component({
    components: {
        MescrollVue,
    },
})
export default class MainIndex extends Vue {
    /* vuex */
    @MainModule.State readonly mainCategoryDate!: Result
    @MainModule.Action readonly getMainCategoryDate: any
    // 轮播图
    @MainModule.State readonly carouseldataList!: Array<ShoperPageData>
    @MainModule.Action readonly getCarouselDateList: any
    /* mescroll */
    mescroll: any = null
    dataList: any = [] //列表数据
    mescrollDown: any = {}
    mescrollUp: any = {
        callback: this.upCallback,
        page: {
            num: 0,
            size: 10,
        },
        htmlNodata: '<p class="upwarp-nodata">-- End --</p>',
        noMoreSize: 5,
        toTop: {
            src: null,
            offset: 1000,
        },
        empty: {
            warpId: 'js-nodata-p',
            icon: null,
            tip: '暂无相关数据~',
        },
        lazyLoad: {
            use: true,
            attr: 'imgurl',
        },
    }
    /* ___________________________________________________事件 */
    /**
     * @name: 跳转到categorys并出入数据
     * @param {type}
     * @return:
     */
    handleChangePage(id: number) {
        this.$router.push(`/category/${id}`)
    }
    /**
     * @name: mescroll
     * @param {type}
     * @return:
     */
    //初始化
    mescrollInit(mescroll: any) {
        this.mescroll = mescroll
    }
    // 上拉回调
    async upCallback(page: any, mescroll: any) {
        await this.getMainCategoryDate(page)
        const result = this.mainCategoryDate
        const that = this as any
        let arr: Array<ShoperPageData> = result.data
        if (result.code === 200) {
            // 返回数据成功
            // 第一页的话 手动滞空列表
            if (page.num === 1) this.dataList = []
            // 数据添加到列表
            this.dataList = this.dataList.concat(arr)
            // 数据渲染成功后 隐藏下拉刷新的状态
            that['$nextTick'](() => {
                mescroll.endSuccess(arr.length)
            })
        } else {
            // 返回数据失败
            mescroll.endErr()
        }
        // 轮播图
        // this.carouseldataList=
    }
    /* _____________________________________________________生命周期 */
    mounted() {
        /* 加载轮播图 */
        this.getCarouselDateList()
    }
    beforeMount() {}
}
</script>

<style scoped lang="scss">
// .nero-input-search{
//     border-radius: 50px/60px;
// }
.mescroll {
    position: fixed;
    top: 17rem;
    bottom: 0;
    height: auto;
}
</style>
