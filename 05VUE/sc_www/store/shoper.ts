/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-25 17:14:23
 * @LastEditTime: 2020-04-26 18:34:17
 * @LastEditors: Do not edit
 * @Description:
 */
import { RootState } from '~/store'
import { MutationTree, ActionTree, GetterTree } from 'vuex'
import { ShoperPageData } from '~/interface/shoperpage.dto'
import qs from 'qs'
import { Order } from '~/interface/order'
import _ from 'lodash'

export interface ShoperState {
    categoryList: any
    orderList: Order[]
    orderHaveChange: boolean
    assess: Array<any>
    assessHaveChange:boolean
}

export const state = (): ShoperState => ({
    categoryList: [],
    orderList: [],
    orderHaveChange: false,
    assess: [],
    assessHaveChange:false,
})

export const mutations: MutationTree<ShoperState> = {
    setCategoryList: (state, data) => {
        state.categoryList = data
    },
    setOrderList: (state, data) => {
        state.orderList = data
    },
    setOrderHaveChange: (state, data: boolean) => {
        state.orderHaveChange = data
    },
    setAssess:(state,data:any)=>{
        state.assess=data
    },
    setassessHaveChange:(state,data:boolean)=>{
        state.assessHaveChange=data
    }
}

export const getters: GetterTree<ShoperState, RootState> = {
    // 1、未付款 2、已付款,未发货 3、已发货,未确认 4、交易成功未评价 5、评价完成交易关闭
    // 1、未付款
    GetterWaitForPay: state => {
        // 根据uuid进行分组 并过滤 status===1的
        return _(state.orderList)
            .filter(item => item.status === 1)
            .groupBy(item => item.uuid)
            .value()
    },
    // 2、已付款,未发货
    GetterWaitForFaHuo: state => {
        // 根据uuid进行分组 并过滤 status===1的
        return _(state.orderList)
            .filter(item => item.status === 2)
            .groupBy(item => item.uuid)
            .value()
    },
    // 3、已发货,未确认
    GetterWaitForShouHuo: state => {
        // 根据uuid进行分组 并过滤 status===1的
        return _(state.orderList)
            .filter(item => item.status === 3)
            .groupBy(item => item.uuid)
            .value()
    },
    // 4、交易成功未评价
    // 5、评价完成交易关闭
}

export const actions: ActionTree<ShoperState, RootState> = {
    // 获取评论
    async getAssess({commit,dispatch,state}){
        if(state.assess.length===0||state.assessHaveChange){
            const {data}=await this.$axios.post('/api/assess/sall')
            if(data.code===200){
                commit('setAssess',data.data)
            }
            commit('setassessHaveChange',false)
        }
    },
    // 更改订单状态为 已发货未收货 并更新订单
    async updateOrderFaHuo({ commit, dispatch }, uuid: string) {
        try {
            await this.$axios.post('/api/order/shoperfahuo', { uuid })
            // 重新查询订单
            commit('setOrderHaveChange', true)
            dispatch('getOrderList')
        } catch (error) {}
    },
    // 根据sid获取订单
    async getOrderList({ commit, state }, page: any) {
        // 如果orders 为空 或者 orderHaveChange为true才更新
        if (state.orderHaveChange || state.orderList.length === 0) {
            try {
                const { data } = await this.$axios.post('api/order/shoperorder')
                if ((data.code = 200)) {
                    commit('setOrderList', data.data)
                }
                commit('setOrderHaveChange', false)
            } catch (error) {}
        }
    },
    // 获取宝贝
    async getCategoryList({ commit }, page: any) {
        try {
            const { data } = await this.$axios.post('/api/category/shoperpage', {
                num: page.num, //页码
                size: page.size, //每页长度
            })
            if (data.code === 200) {
                // 获取请求的列表数据
                let arr: Array<ShoperPageData> = data.data
                // qs 处理
                for (const item of arr) {
                    item.chooses = await qs.parse(item.chooses)
                    item.detsrcjson = await qs.parse(item.detsrcjson)
                    item.imgs = await qs.parse(item.imgs)
                }
                commit('setCategoryList', arr)
            }
        } catch (error) {}
    },
}
