/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-21 23:34:36
 * @LastEditTime: 2020-04-25 16:48:17
 * @LastEditors: Do not edit
 * @Description:
 */
import { RootState } from '~/store'
import { MutationTree, ActionTree, GetterTree } from 'vuex'
import { FindShopCarDTO, ShopCar, Category } from '~/interface/findShopCar'
import qs from 'qs'

export interface ShopCarState {
    shopCarResult: ShopCar[] //如果获取数据成功  放进这里
    haveChange: boolean
    msg: string //如果获取数据失败 放进msg中
}

export const state = (): ShopCarState => ({
    shopCarResult: [],
    haveChange: true,
    msg: '',
})

export const mutations: MutationTree<ShopCarState> = {
    setShopCarResult: (state, data: ShopCar[]) => {
        state.shopCarResult = data
    },
    setShopCarNum: (state, { num, index }: any) => {
        // 某一个购物车项  num 更改
        state.shopCarResult[index].num = num
    },
    setShopCarChooseChange: (state, { data, index }: any) => {
        // 某一个购物车项 的 choose 更改
        console.log(data, index)
        state.shopCarResult[index].choose = data
    },
    setHaveChange: (state, data: boolean) => {
        state.haveChange = data
    },
    setMsg: (state, data: string) => {
        state.msg = data
    },
    deleteOneById:(state,id:number)=>{
        // 删除数组中的某个元素
        state.shopCarResult.splice(state.shopCarResult.findIndex(item=>item.id===id),1)
    }
}

export const actions: ActionTree<ShopCarState, RootState> = {
    async deleteShopCar({commit},id:number){
        const {data}=await this.$axios.post('/api/shopcar/deleteone',{id})
        if(data.code===200){
            //更新 vuex
            commit('deleteOneById',id)
        }
    },
    async updateShopCarNum({ commit, state }, { index, addorsub, updatechoose }) {
        // 获取具体数量
        let newnum: number = state.shopCarResult[index].num
        if (addorsub === 'add') {
            newnum++
        } else {
            newnum--
        }
        // 到底更新什么让后台判断
        try {
            // const { data } = await this.$axios.post('/api.shopcar/change', { index, newnum, updatechoose })
            // 更新成功后 同步 vuex data.code === 200
            if (true) {
                if (addorsub) {
                    // 更新 数量
                    commit('setShopCarNum', { num: newnum, index })
                } else {
                    //如果updateChoose 不是空就更新 choose
                    commit('setShopCarChooseChange', { data: updatechoose, index })
                }
            } else {
                // console.error(data.msg)
            }
        } catch (error) {
            console.error(error)
        }
    },
    // 获取购物车所有项目
    async getShopCarResult({ commit, state }) {
        // 只有当shopCarResult为空或者 havechange 为 true时才更新
        if (!state.shopCarResult || state.haveChange || state.shopCarResult.length === 0) {
            try {
                const { data } = await this.$axios.post('/api/shopcar/all')
                if (data.code === 200) {
                    //获取成功放进setShopCarResult
                    const result: ShopCar[] = data.data
                    // qs 处理
                    for (const item of result) {
                        item.cid.imgs = qs.parse(item.cid.imgs)
                        item.cid.chooses = qs.parse(item.cid.chooses)
                    }
                    // 更新数据
                    commit('setShopCarResult', result)
                } else {
                    //获取失败
                    commit('setMsg', data.msg)
                }
            } catch (error) {
                console.error(error)
            }
            // 自动关闭havechange
            commit('setHaveChange', false)
        }
        // 否则donothing
    },
}
