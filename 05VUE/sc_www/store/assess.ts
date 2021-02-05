/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-26 13:50:35
 * @LastEditTime: 2020-04-26 17:48:27
 * @LastEditors: Do not edit
 * @Description:
 */
import { RootState } from '~/store'
import { MutationTree, ActionTree, GetterTree } from 'vuex'

export interface AssessState {
    assess: Array<any>
    assessHaveChange: boolean
}

export const state = (): AssessState => ({
    assess: [],
    assessHaveChange: false,
})

export const mutations: MutationTree<AssessState> = {
    setAssess: (state, data: Array<any>) => {
        state.assess = data
    },
    setAssessHaveChange: (state, data: boolean) => {
        state.assessHaveChange = data
    },
}

export const actions: ActionTree<AssessState, RootState> = {
    // 获取评价
    async getAssess({ commit, state, dispatch }) {
        if (state.assess.length === 0 || state.assessHaveChange) {
            const { data } = await this.$axios.post('/api/assess/uall')
            if(data.code===200){
                commit('setAssess',data.data)
            }
            commit('setAssessHaveChange',false)
        } else {
        }
    },
    // 提交评价
    async submitAssess({ commit, state, dispatch }, assess) {
        const { data } = await this.$axios.post('/api/assess/createone', assess)
        if (data.code === 200) {
            commit('setAssessHaveChange',true)
            dispatch('getAssess')
        } else {
        }
    },
}
