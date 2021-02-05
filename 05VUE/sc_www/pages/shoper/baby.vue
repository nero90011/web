<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-19 14:09:01
 * @LastEditTime: 2020-04-30 22:54:14
 * @LastEditors: Do not edit
 * @Description: 
 -->
<template lang="pug">
    div
        //- 发布按钮
        v-btn(
                to="/shoperpages/addbaby" 
                fab
                max-width="40" max-height="40" 
                color="#F57F17" 
                class="nero-fixed-btn mx-1 white--text"
            )
            v-icon(x-large) mdi-plus
        //- mescroll模块
        mescroll-vue( ref="mescroll" class="mescroll"  :down="mescrollDown" :up="mescrollUp" @init="mescrollInit")
            //- 内容
            v-list( class="mx-0 px-0" )
                v-list-item(v-for="item in dataList" :key="item.id" class="pa-0")
                    v-list-item-content(class="mx-0 px-0 py-1")
                        v-row
                            v-col(cols="4" class="pr-0 py-1" align="center")
                                v-img( :src="item.imgs[0]" width="95" height="95" class="nero-img-border")
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
import { Component, Vue, namespace } from 'nuxt-property-decorator'
import MescrollVue from 'mescroll.js/mescroll.vue'
import { log } from 'util'
import * as qs from 'qs'
import { ShoperPageData } from '../../interface/shoperpage.dto'
@Component({
    layout: 'nothing',
    middleware: 'auth',
    components: {
        MescrollVue,
    },
})
export default class ShoperBaby extends Vue {
    /* mescroll */
    mescroll: any = null
    //下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了
    dataList: any = [] //列表数据
    mescrollDown: any = {}
    mescrollUp: any = {
        callback: this.upCallback,
        // 上拉回调,此处简写; 相当于 callback: function(page, mescroll) { }
        //以下是一些常用的配置,当然不写也可以的.
        page: {
            num: 0, //当前页 默认0,回调之前会加1; 即callback(page)会从1开始
            size: 10, //每页数据条数,默认10
        },
        htmlNodata: '<p class="upwarp-nodata">-- END --</p>',
        noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于5才显示无更多数据;
        //避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
        //这就是为什么无更多数据有时候不显示的原因
        toTop: {
            //回到顶部按钮
            src: null, //'./static/mescroll/mescroll-totop.png', //图片路径,默认null,支持网络图
            offset: 1000, //列表滚动1000px才显示回到顶部按钮
        },
        empty: {
            //列表第一页无任何数据时,显示的空提示布局; 需配置warpId才显示
            warpId: 'js-nodata-p', //父布局的id (1.3.5版本支持传入dom元素)
            icon: null, //图标,默认null,支持网络图
            tip: '暂无相关数据~', //提示
        },
        lazyLoad: {
            use: true, // 是否开启懒加载,默认false
            attr: 'imgurl', // 标签中网络图的属性名 : <img imgurl='网络图  src='占位图''/>
        },
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
        console.log('上拉回调')
        const that = this as any
        const { data } = await that['$axios']
            .post('/api/category/shoperpage', {
                num: page.num, //页码
                size: page.size, //每页长度
            })
            .catch(() => {
                //联网失败,隐藏下拉刷新和上拉加载的状态
                mescroll.endErr()
            })
        // 获取请求的列表数据
        let arr: Array<ShoperPageData> = data.data
        // qs 处理
        for (const item of arr) {
            item.chooses = await qs.parse(item.chooses)
            item.detsrcjson = await qs.parse(item.detsrcjson)
            item.imgs = await qs.parse(item.imgs)
        }
        // 第一页的花 手动滞空列表
        if (page.num === 1) this.dataList = []
        // 数据添加到列表
        this.dataList = this.dataList.concat(arr)
        console.log(this.dataList)

        // 数据渲染成功后 隐藏下拉刷新的状态
        that['$nextTick'](() => {
            mescroll.endSuccess(arr.length)
        })
    }
    /* _______________vue router____________ */
    /* mescroll */
    /* beforeRouteEnter(to: any, from: any, next: any) {
        const that = this as any
        // 滚动到原来的列表位置
        next((vm:any) => {
            vm['$refs'].mescroll && vm['$refs'].mescroll.beforeRouteEnter()
        })
    }
    beforeRouteLeave(to: any, from: any, next: any) {
        // 记录列表滚动的位置,隐藏顶部按钮和isBounce的配置
        const that = this as any
        that['$refs'].mescroll && that['$refs'].mescroll.beforeRouteLeave()
    } */
}
</script>

<style scoped lang="scss">
.nero-fixed-btn {
    position: fixed;
    bottom: 5rem;
    right: 1rem;
    z-index: 2;
}
.mescroll {
    position: fixed;
    top: 8rem;
    bottom: 0;
    height: auto;
}
</style>
