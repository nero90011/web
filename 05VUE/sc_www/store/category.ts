/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-20 18:36:08
 * @LastEditTime: 2020-04-26 19:07:57
 * @LastEditors: Do not edit
 * @Description: 获取商品详细信息
 */
import { RootState } from '~/store'
import { MutationTree, ActionTree, GetterTree } from 'vuex'
import { ShoperPageData } from '~/interface/shoperpage.dto'
import qs from 'qs'

export interface CategoryState {
    // 声明
    onecategory: ShoperPageData
    // 某个宝贝的所有评价
    assess: Array<any>
}

export const state = (): CategoryState => ({
    // 赋初值
    onecategory: {} as ShoperPageData,
    assess: [],
})

export const getters: GetterTree<CategoryState, RootState> = {
    GetterOneAssess:state=>{
        return state.assess[0]
    }
}

export const mutations: MutationTree<CategoryState> = {
    // 更改状态
    setOnecategory: (state, data: ShoperPageData) => {
        state.onecategory = data
    },
    setAssess:(state,data:any)=>{
        state.assess=data
    }
}

export const actions: ActionTree<CategoryState, RootState> = {
    // 根据cid获取某个category的所有评价
    async getAssess({commit,state,dispatch},cid:number){
        try {
            const {data} =await this.$axios.post('/api/assess/call',{cid})
            if(data.code===200){
                commit('setAssess',data.data)
            }
        } catch (error) {
            console.error(error);
        }
    },
    // 获取某个category
    async getOnecategory({ commit }, id: number) {
        const { data } = await this.$axios.post('/api/category/category', { id: id })
        const category: ShoperPageData = data.data
        category.chooses = qs.parse(category.chooses)
        category.imgs = qs.parse(category.imgs)
        category.detsrcjson = qs.parse(category.detsrcjson)
        // qs 处理
        commit('setOnecategory', category)
    },
}
