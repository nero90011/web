/*
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-10 13:35:37
 * @LastEditTime: 2020-04-11 20:33:36
 * @LastEditors: Do not edit
 * @Description:
 */
/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
// @表示/src
import {SET_IS_TAB_BAR_SHOW,SET_VBOTTOM_NAVIGATION,SET_NOWPLAYING_LIST} from '@/type'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 自定义全局状态
    isTabBarShow: true,
    vbottomnavigation: true,
    // 自定义全局缓存数据
    nowplayingList: []
  },
  // 加工或抽取部分元数据  可以认为是store 的计算属性
  getters:{// 按照需求获取state数据的接口 我要这个state[]的前10个 我要前100个
    nowplayingListGetter(state){
        return  state.nowplayingList.filter((item,index) => index<5)
    }
  },
  mutations: {
    // 唯一修改状态的位置  过程是同步的
    [SET_IS_TAB_BAR_SHOW](state, data) {
      state.isTabBarShow = data
    },
    [SET_VBOTTOM_NAVIGATION](state, data) {
      state.vbottomnavigation = data
    },
    [SET_NOWPLAYING_LIST](state,data){
        state.nowplayingList=data
    },
  },
  actions: {
    // 异步处理
    getnowplayingListAction(store) {
      axios
          .get("/ajax/comingList?ci=1200&token=&limit=10&optimus_uuid=EAA2A1407AD911EA83860B234846F8AB217C957557474C68B3A6330303C10489&optimus_risk_level=71&optimus_code=10")
          .then(res => {
            // 通过mutations更改数据
            store.commit(SET_NOWPLAYING_LIST,res.data.coming)
          });
    },
  },
  modules: {}
});
