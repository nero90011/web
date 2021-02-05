<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-10 19:05:18
 * @LastEditTime: 2020-05-01 14:18:09
 * @LastEditors: Do not edit
 * @Description: 
 -->
<template lang="pug">
    div(class="grey lighten-4" class="overflow-hidden")
        v-app-bar(dense elevation="0" app)
                v-btn(class="noborder"  icon @click="routerGoBack" ) 
                    v-icon(v-text="'mdi-arrow-left'" )
                v-autocomplete(
                    rounded 
                    label=""
                    hide-details dense outlined solo flat
                    class="mx-5 nero-input-search"
                    append-icon="mdi-magnify"
                    background-color="grey lighten-4" 
                    color="#F57F17"
                )
                v-btn(class="ml-1 noborder"  icon to="/shopcar"  color="#F57F17") 
                    v-icon(v-text="'mdi-shopping'")
                    v-badge(
                        color="yellow darken-4"
                        content="+1"
                        bordered
                        offset-x="5"
                        offset-y="5"
                        v-show="badgeshow"
                    )
        //- 轮播图
        v-carousel(
                show-arrows-on-hover
                :show-arrows="false"
                height="385" 
                progress
                hide-delimiters
                progress-color="black"
                v-touch="{left: () => swipe('Left')}" 
                v-model="carouselNum" 
            )
                v-carousel-item(
                    v-for="item in category.imgs" :key="item.id"
                    :src="item"
                    contain
                )
        //- 价格显示
        v-row(class="red accent-3 ")
            v-col(cols="7" class="pl-6")
                v-icon(small class="white--text") mdi-currency-cny
                span(class="white--text title" v-text="category.money" )
            v-col(cols="1")
                v-divider(vertical class="white")
            //- 商铺按钮
            v-col(cols="4" align="center" )
                v-icon(large class="white--text" ) mdi-store
                span(class="white--text body-1" v-text="category.username" )
        //- 销量
        v-row(class="white")
            v-col(align="start" class="mx-2" cols="12")
                v-icon(color="red") mdi-shopping
                span(class="font-weight-black mx-2" v-text="category.title" ) 
            v-col(cols="12" align="center" class="pt-0")
                span(class="grey--text" v-text="`销量:${category.sort}`" ) 
        //- 发货地
        v-row(class="mt-3 white body-2")
            v-col(cols="2" align="center" class="pl-5")
                span(class="grey--text") 发货 
            v-col(class="px-0")
                v-icon(small) mdi-map-marker
                span(v-text="category.from" ) 
        //- 评价部分
        v-row(class="mt-3 white body-2")
            v-col(cols="6" class="pl-6")
                span(class="subtitle-2") 宝贝评价
            v-col(cols="6" align="end" class="pr-6")
                span(class="red--text" @click="$router.push('/category/assess')") 查看全部 >
            //- 商品展示
            v-card( elevation="0" v-if="GetterOneAssess" class="px-4" )
                v-row
                    v-col(cols="3" class="pl-6")
                        //- 图片
                        v-img( 
                                :src="GetterOneAssess.img" 
                                width="50" height="50" class="nero-img-border"
                            )
                    v-col(class="pr-6")
                        //- 标题
                        div(
                            v-text="`${GetterOneAssess.title}/${GetterOneAssess.choose}`" 
                            class="body-2  ml-n5"
                        )
                //- 打分
                v-row(class="mt-n4")
                    v-col(cols="7" align="end" class="mt-n2")
                        v-rating(
                            v-model="GetterOneAssess.rating" 
                            length="3" background-color="grey lighten-1" color="red lighten-3"
                            readonly
                        )
                    v-col(cols="5" align="start" class="pr-6")
                        span(class="red--text text--lighten-3" v-text="composeAssessTest(GetterOneAssess)" ) 
                //- 评价内容
                v-card( elevation="0" class="mt-n6")
                    v-card-title(class="body-2") 评价内容:
                    v-card-text(v-text="GetterOneAssess.assesstext")
        v-row(class="mt-3 white body-2")
            v-col(cols="6" class="pl-6")
                span(class="subtitle-2") 店铺推荐
            v-col(cols="6" align="end" class="pr-6")
                span(class="red--text") 查看全部 >
            //- scroll 滚动定位
        v-row(class="mt-3 white body-2" id="scroll-with-options")
            v-col(cols="12" class="pl-6" align="center")
                span(class="subtitle-2" ) --- 宝贝详情 ---
        //- 宝贝详情图 懒加载 前1张不懒加载
        img( 
            :src="category.detsrcjson[0]" height="100%" width="100%" class="mb-n2"
        )
        v-responsive()
            v-lazy(
                v-for="(item, index) of category.detsrcjson" :key="index" 
                v-model="isActive"
                transition="fade-transition"
                min-height="1px" 
            )
                //- 第一张 index=0  不加载 index是string类型的
                v-img( 
                    v-show="index==0?false:true" 
                    :src="item" height="100%" width="100%" 
                )
        //- 底部按钮
        v-bottom-navigation(
            app max-height="48"
            grow
        )
                v-btn(height="56" )
                    span 店铺
                    v-icon(color="red") mdi-store
                v-btn(height="56" )
                    span 收藏
                    v-icon(color="red") mdi-star
                v-btn(
                        class="nero-left-btn-border my-1 yellow darken-2" 
                        rounded 
                        @click="addToShopCarButton"
                        height="56" 
                    ) 
                    span(class="white--text body-2 font-weight-bold mt-n2") 加入购物车
                v-btn(
                    class="nero-right-btn-border my-1 red darken-1" rounded 
                    @click="addToPayFor"
                    height="56" 
                ) 
                    span(class="white--text body-2 font-weight-bold mt-n2") 立即购买
        //- 弹出表单
        v-bottom-sheet(
            v-model="v_bottom_sheet"
        )
            v-sheet()
                v-row
                    v-col(cols="4" class="pr-0 py-4" align="center")
                        v-img( :src="category.imgs[0]" width="95" height="95" class="nero-img-border")
                    v-col(cols="8" class="pl-0 py-4" align="start")
                        v-row()
                            v-col(class="py-0" cols="12" )
                                v-icon(small color="red") mdi-currency-cny
                                span(v-text="category.money" class="red--text title")
                            v-col(class="py-0" cols="12" )
                                span(v-text="'库存:'+category.num" class="body-2 ")
                v-divider
                //- 收货地址
                v-row(class="px-4")
                    v-col()
                        span() 收货地址
                v-divider
                //- 选择分类
                v-row(class="px-4")
                    v-col(cols="12")
                        span() 选择分类
                    v-col()
                        v-chip-group(column active-class="primary--text"
                            mandatory
                        )
                            v-chip(
                                v-for="item in category.chooses" :key="item.key"
                                v-text="`[${category.name}] ${item.text}`" 
                                label
                                @click="addtoshopcar.choose=item.text"
                            )
                v-divider
                //- 购买数量
                v-row(class="px-4")
                    v-col()
                        span() 购买数量
                    v-col(align="end")
                        v-btn( icon @click="addtoshopcar.num--" :disabled="addtoshopcar.num===1")
                            v-icon mdi-minus
                        v-chip(lable v-text="addtoshopcar.num" ) 
                        v-btn( icon @click="addtoshopcar.num++" :disabled="addtoshopcar.num===category.num")
                            v-icon mdi-plus
                //- 底部确认按钮触发加入购物车
                v-row(class="px-4")
                    v-col
                        v-btn( 
                            rounded block color="red lighten-1" class="white--text" bottom 
                            @click="addToShopCar"
                        ) 确定
</template>
<script lang="ts">
/* eslint-disable */
import { Component, Vue, Prop, namespace } from 'nuxt-property-decorator'
import { ShoperPageData } from '../../interface/shoperpage.dto'

const AuthModule = namespace('auth')
const ShopCarModule = namespace('shopcar')
const PayForModule = namespace('payfor')
const CategoryModule =namespace('category')
@Component({})
export default class ParamId extends Vue {
    // 商品评论相关
    @CategoryModule.Action getAssess:any
    @CategoryModule.Getter GetterOneAssess:any
    // 是否登录
    @AuthModule.State readonly loggedIn!: boolean
    // 手动更新购物车界面
    @ShopCarModule.Mutation readonly setHaveChange: any
    // payfor vuex数据
    @PayForModule.Mutation readonly toBeOrder: any
    // 轮播图当前第几页
    carouselNum: number = 0
    // 底部表单是否弹出
    v_bottom_sheet: boolean = false
    // 提醒+1
    badgeshow: boolean = false
    // lazy
    isActive: boolean = false
    // category
    category: ShoperPageData = {} as ShoperPageData
    // 加入购物车用到的数据
    addtoshopcar: any = {
        num: 1 as number,
        choose: '' as string,
        id: '',
        shoperid: '',
        susername: '' as string,
    }

    // 计算评价文字
    composeAssessTest(item:any) {
        if (item.rating === 3) {
            return '好评😊'
        } else if (item.rating === 2) {
            return '中评🙂'
        } else {
            return '差评😒'
        }
    }
    /* _______________________________事件 */
    /**
     * @name: 触摸事件
     * @param {type}
     * @return:
     */
    swipe(directon: string) {
        const that = this as any
        // 需要将前两张图片进行不懒加载处理
        // 需要使用es6 的方法获取对象的可枚举长度
        if (Object.keys(this.category.imgs).length - 1 === this.carouselNum) {
            console.log(this.category.detsrcjson)

            that['$vuetify'].goTo('#scroll-with-options', {
                duration: 0,
                offset: 0,
                easing: 'easeOutQuad',
            })
        }
    }
    /**
     * @name: 返回上一级
     * @param {type}
     * @return:
     */
    routerGoBack() {
        const that = this as any
        that['$router'].back()
    }
    /**
     * @name: 加入购物车按钮事件
     */
    addToShopCarButton() {
        if (this.loggedIn) {
            //登陆了 // 登陆了则显示 加入购物车详细表单
            this.v_bottom_sheet = !this.v_bottom_sheet
        } else {
            // 如果没有登录则去登录页面
            this.$router.push('/auth/login')
        }
    }
    /**
     * @name: 加入购物车 确定按钮
     * @param {type}
     * @return:
     */
    async addToShopCar() {
        const that = this as any
        this.addtoshopcar.id = this.category.id
        this.addtoshopcar.shoperid = this.category.userid
        this.addtoshopcar.susername = this.category.username
        // 默认选择第一项类别
        if (this.addtoshopcar.choose === '') {
            this.addtoshopcar.choose = (this.category.chooses[0] as any).text
        }
        console.log(this.addtoshopcar)
        //axios
        const { data } = await that['$axios'].post('/api/shopcar/addone', this.addtoshopcar).catch((error: string) => {
            console.error(error)
        })
        if ((data.code = 200)) {
        } else {
            console.log(data.msg)
        }
        // 关闭底部表单
        this.v_bottom_sheet = false
        this.badgeshow = true
        // 手动设置更新购物车界面
        this.setHaveChange(true)
    }
    /**
     * @name: 加入payfor页 未完成
     * @param {type}
     * @return:
     */
    addToPayFor() {
        // 构建单数组
        // 加入payfor vuex 数组
        // 跳转页面
        const payforArr = [
            {
                choose: '',
                cid: {
                    chooses: '',
                    id: '',
                    imgs: '',
                    ishot: '',
                    money: '',
                    num: '',
                    title: '',
                },
                id: '',
                num: '',
                sid: '',
                susername: '',
                uid: '',
            },
        ]
    }
    /* ________________________________vue */
    mounted(){
        this.getAssess(this.$route.params.id)
    }
    /* ________________________________nuxt生命周期 */
    // 布局
    layout() {
        return 'nothing'
    }
    async asyncData({ params, store }: any) {
        // params.id 获取 url中的params
        await store.dispatch('category/getOnecategory', params.id).catch((error: string) => {
            console.error(error)
        }) // 文件名/actions名
        return { category: store.state.category.onecategory }
    }
    // head
    head(){
        return {
            title:`shop ${this.category.title}`,
            meta:[
                {hid:`${this.category.id}`,name:`${this.category.name}`,content:`${this.category.title}`} // name:关键词 content:
            ]
        }
    }
}
</script>
<style scoped lang="scss">
.noborder {
    border: none;
}
/* .nero-left-btn-border{
    border-radius: 50px/60px;
}
.nero-right-btn-border{
    border-radius: 50px/60px;
} */
</style>
