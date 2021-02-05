/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-24 22:39:03
 * @LastEditTime: 2020-04-25 20:20:09
 * @LastEditors: Do not edit
 * @Description:
 */
import { RootState } from '~/store'
import { MutationTree, ActionTree, GetterTree } from 'vuex'
import _ from 'lodash'
import { Order } from '~/interface/order'

export interface CenterState {
    orders: Order[]
    orderHaveChange: boolean
}

export const state = (): CenterState => ({
    orders: [],
    orderHaveChange: false,
})

export const getters: GetterTree<CenterState, RootState> = {
    // 1、未付款 2、已付款,未发货 3、已发货,未确认 4、交易成功未评价 5、评价完成交易关闭
    // 1、未付款
    GetterWaitForPay: state => {
        // 根据uuid进行分组 并过滤 status===1的
        return _(state.orders)
            .filter(item => item.status === 1)
            .groupBy(item => item.uuid)
            .value()
    },
    // 2、已付款,未发货
    GetterWaitForFaHuo: state => {
        // 根据uuid进行分组 并过滤 status===1的
        return _(state.orders)
            .filter(item => item.status === 2)
            .groupBy(item => item.uuid)
            .value()
    },
    // 3、已发货,未确认
    GetterWaitForShouHuo: state => {
        // 根据uuid进行分组 并过滤 status===1的
        return _(state.orders)
            .filter(item => item.status === 3)
            .groupBy(item => item.uuid)
            .value()
    },
    // 4、交易成功未评价
    GetterWaitForPingJ: state => {
        // 根据uuid进行分组 并过滤 status===1的
        return _(state.orders)
            .filter(item => item.status === 4)
            .groupBy(item => item.uuid)
            .value()
    },
    // 5、评价完成交易关闭
}

export const mutations: MutationTree<CenterState> = {
    setShowBadge: (state, data: boolean) => {},
    setOrders: (state, data: any) => {
        state.orders = data
    },
    setOrderHaveChange: (state, data: boolean) => {
        state.orderHaveChange = data
    },
}

export const actions: ActionTree<CenterState, RootState> = {
    // 确认收货
    async submitOrderSh({ commit, state, dispatch },{uuid,cid}) {
        try {
            await this.$axios.post('/api/order/buyersubmitorder', { uuid ,cid})
            // 重新查询订单
            commit('setOrderHaveChange', true)
            dispatch('getOrders')
        } catch (error) {}
    },
    // 查询用户的所有订单
    async getOrders({ commit, state }) {
        // 如果orders 为空 或者 orderHaveChange为true才更新
        if (state.orderHaveChange || state.orders.length === 0) {
            try {
                const { data } = await this.$axios.post('/api/order/buyerfindall')
                if (data.code === 200) {
                    commit('setOrders', data.data)
                }
                commit('setOrderHaveChange', false)
            } catch (error) {}
        }
    },
    // 取消订单(删除订单) 并告知订单更新
    async deleteOrder({ commit, state, dispatch }, uuid) {
        try {
            await this.$axios.post('/api/order/buyerdeleteorder', { uuid })
            // 重新查询订单
            commit('setOrderHaveChange', true)
            dispatch('getOrders')
        } catch (error) {}
    },
    // 订单付款 并告知订单更新
    async payforOrder({ commit, state, dispatch }, uuid) {
        try {
            await this.$axios.post('/api/order/buyerpayfororder', { uuid })
            // 重新查询订单
            commit('setOrderHaveChange', true)
            dispatch('getOrders')
        } catch (error) {}
    },
}
