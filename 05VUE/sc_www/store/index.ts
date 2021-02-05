/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-10 13:35:37
 * @LastEditTime: 2020-04-20 18:40:10
 * @LastEditors: Do not edit
 * @Description:
 */
import { GetterTree, ActionTree, MutationTree } from 'vuex'
/**
 * @name: root vuex
 * @param {type} 
 * @return: 
 */
export type RootState = ReturnType<typeof state>

export const state = () => ({})

export const getters: GetterTree<RootState, RootState> = {
    // 按照需求获取state数据的接口 我要这个state[]的前10个 我要前100个
    // nowplayingListGetter: (state: any) => {
    //     return state.nowplayingList.filter((item: any, index: any) => index < 5)
    // },
}
export const mutations: MutationTree<RootState> = {
    // 唯一修改状态的位置  过程是同步的
    // [SET_USER]: (state: any, data: any) => (state.user = data),
}

export const actions: ActionTree<RootState, RootState> = {
    //async fetch 在渲染页面之前调用  与asyncData类似但不会设置组件的数据  组件中也需要使用async来获取
    async getnowplayingListAction({ commit }: any) {
        // const { data } = await (this as any)['$axios']({
        //     method: 'get',
        //     url: process.server
        //         ? 'http://www.h5yjy.com/api/movieComingList?cityId=10'
        //         : 'http://www.h5yjy.com/api/movieComingList?cityId=10',
        // })
        // commit(SET_NOWPLAYING_LIST, data.data.comingList)
        // Getter('nowplayingListGetter')
    },
}
