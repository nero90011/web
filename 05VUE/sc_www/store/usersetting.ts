/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-23 16:46:25
 * @LastEditTime: 2020-04-23 18:15:19
 * @LastEditors: Do not edit
 * @Description:
 */
import { RootState } from '~/store'
import { MutationTree, ActionTree, GetterTree } from 'vuex'

export interface UserSettingState {
    location: string
    msg: string
    showLocationDialog:boolean
}

export const state = (): UserSettingState => ({
    location: '',
    msg: '',
    showLocationDialog:false
})

export const mutations: MutationTree<UserSettingState> = {
    setUserLocation: (state, data: string) => {
        state.location = data
    },
    setMsg: (state, data: string) => {
        state.msg = data
    },
    setshowLocationDialog:(state,data:boolean)=>{
        state.showLocationDialog=data
    }
}

export const actions: ActionTree<UserSettingState, RootState> = {
    // 设置用户收货地址
    async setUserLocation({ state, commit }, location: string) {
        const { data } = await this.$axios.post('/api/user/location', { location })
        if (data.code === 200) {
            commit('setUserLocation', data.data)
        } else {
            commit('setMsg', data.msg)
        }
    },
}
