/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-21 17:20:19
 * @LastEditTime: 2020-04-21 19:23:38
 * @LastEditors: Do not edit
 * @Description:
 */
import { RootState } from '~/store'
import { MutationTree, ActionTree, GetterTree } from 'vuex'
import { Result, ShoperPageData, Page } from '../interface/shoperpage.dto'
import qs from 'qs'

export interface MainState {
    mainCategoryDate: Result
    page: Page
    carouseldataList:  Array<ShoperPageData>
}

export const state = (): MainState => ({
    mainCategoryDate: {} as Result,
    page: { num: 1, size: 10 } as Page,
    carouseldataList: [],
})

export const mutations: MutationTree<MainState> = {
    setmainCategoryDate: (state, data: Result) => {
        state.mainCategoryDate = data
    },
    setPage: (state, num: number) => {
        state.page.num = num
    },
    setCarouselDateList: (state, data) => {
        state.carouseldataList = data
    },
}

export const actions: ActionTree<MainState, RootState> = {
    // 获取轮播图
    async getCarouselDateList({ commit, state }) {
        // 数据为空 时才axios
        if (state.carouseldataList.length === 0) {
            const { data }: any = await this.$axios
                .post('/api/category/main', {
                    num: 1, //页码
                    size: 5, //每页长度
                })
                .catch((error:any) => {console.error(error)})
            // qs 处理
            let arr: Array<ShoperPageData> = data.data
            for (const item of arr) {
                item.chooses = qs.parse(item.chooses)
                item.detsrcjson = qs.parse(item.detsrcjson)
                item.imgs = qs.parse(item.imgs)
            }
            commit('setCarouselDateList', arr)
        }
    },
    // 分页获取商品
    async getMainCategoryDate({ commit, state }, page: Page) {
        // page num 不相等或者 数据为空 时才axios
        if (state.page.num !== page.num || state.mainCategoryDate.data === undefined) {
            // 更改page
            commit('setPage', page.num)
            // axios
            const { data }: any = await this.$axios
                .post('/api/category/main', {
                    num: page.num, //页码
                    size: page.size, //每页长度
                })
                .catch(() => {
                    commit('setmainCategoryDate', data)
                })
            // qs 处理
            let arr: Array<ShoperPageData> = data.data
            for (const item of arr) {
                item.chooses = await qs.parse(item.chooses)
                item.detsrcjson = await qs.parse(item.detsrcjson)
                item.imgs = await qs.parse(item.imgs)
            }
            // 更改数据
            commit('setmainCategoryDate', data)
        }
    },
}
