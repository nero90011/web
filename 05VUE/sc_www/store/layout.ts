/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-18 15:18:02
 * @LastEditTime: 2020-04-20 19:08:22
 * @LastEditors: Do not edit
 * @Description: 
 */
import { RootState } from '~/store'
import { MutationTree, ActionTree, GetterTree } from 'vuex'

export const SETVBNTB = 'setvBottomNavigationBtn'

// export type LayoutState = ReturnType<typeof state>
export interface LayoutState {
    vBottomNavigationBtn: number
    // things: [] as string[],
}

export const state = (): LayoutState => ({
    vBottomNavigationBtn: 0,
})
export const getters: GetterTree<LayoutState, RootState> = {}

export const mutations: MutationTree<LayoutState> = {
    [SETVBNTB]: (state, data: number) => {
        state.vBottomNavigationBtn = data
        // 顺便存储到sessionstorage中 防止用户刷新
        if(sessionStorage){
            sessionStorage.setItem('vBottomNavigationBtn',data.toString())
        }
    },
}

export const actions: ActionTree<LayoutState, RootState> = {}
