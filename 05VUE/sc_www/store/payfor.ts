/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-22 21:56:38
 * @LastEditTime: 2020-04-24 22:35:50
 * @LastEditors: Do not edit
 * @Description:
 */
import { RootState } from '~/store'
import { MutationTree, ActionTree, GetterTree } from 'vuex'
import { ShopCar } from '~/interface/findShopCar'
import qs from 'qs'

export interface PayForState {
    toBeOrder: ShopCar[] // payfor页面需要的数据
    msg: string //msg
    code: number
}

export const state = (): PayForState => ({
    toBeOrder: [],
    msg: '',
    code: 0,
})

export const mutations: MutationTree<PayForState> = {
    setToBeOrder: (state, data: ShopCar[]) => {
        // payfor页面需要的数据
        state.toBeOrder = data
    },
    setMsg: (state, data: string) => {
        state.msg = data
    },
    setCode:(state,data:number)=>{
        state.code=data
    }
}

export const actions: ActionTree<PayForState, RootState> = {
    async createOrder({ state, commit }, money: number) {
        try {
            const { data } = await this.$axios.post('/api/order/createone', {
                money,
                categorys: state.toBeOrder,
            })
            if (data.code === 200) {
                commit('setCode',data.code)
            } else {
                // 失败的原因
                commit('setMsg', data.msg)
            }
        } catch (error) {
            console.error(error)
        }
    },
}
