# vuex

import { GetterTree, ActionTree, MutationTree } from 'vuex'
/**

* @name: root vuex
* @param {type}
* @return:
 */
export type RootState = ReturnType<typeof state>

export const state = () => ({
    nowplayingList:...
})

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
        // const { data } = await [this as any]('$axios')({
        //     method: 'get',
        //     url: process.server
        //         ? '<http://www.h5yjy.com/api/movieComingList?cityId=10'>
        //         : '<http://www.h5yjy.com/api/movieComingList?cityId=10',>
        // })
        // commit(SET_NOWPLAYING_LIST, data.data.comingList)
    },
}

## vue

<template lang="pug">
v-container( fluid class="mx-0 mt-n2 px-0" )
    v-list( class="mx-0 px-0" )
            v-list-item(v-for="item in datalist" :key="item.id" @click="handleChangePage(item.id)" class="mx-0 px-0")
                v-list-item-content(class="mx-0 px-0")
                    v-row
                        v-col(cols="3" class="mx-0 pt-1 pl-6 pr-1")
                            v-img( :src="changepath(item.img)" width="64" height="90" )
                        v-col(cols="9" class="mx-0 my-0 px-1")
                            div(v-text="item.nm")

</template>
<script lang='ts'>
/* eslint-disable */
import { Component, Vue ,State, Action, Mutation} from "nuxt-property-decorator";
@Component({
    async asyncData({ store }: any) {
        //如果是服务端则直接加载 store的数据
        if (process.server) {
            // server端处理
                await store.dispatch("getnowplayingListAction")
                .catch (error) {
                    console.log(error, +"error")
                };
                return { datalist: store.state.nowplayingList };
        } else {
            // client端处理
            if (store.state.nowplayingList.length === 0) {
                // 没有缓存,使用action进行ajax异步请求 通过mutation记录并提交到state中
                return { datalist: store.state.nowplayingList }
            } else {
                // 使用缓存数据
                console.log("使用缓存数据");
            }
        }
    }
})
export default class Nowplaying extends Vue {
    // 有了vuex做缓存 原来接受axios数据的datalist废弃
    private datalist: Array<string> = [];
    // vuex
    private handleChangePage(id: string): void {
    // 编程式导航 路径跳转
        this.$router.push(`/detail/${id}`);
        //名字跳转 nuxt中不好用
        // this.$router.push({ name: "Detail", params: { id: id } });
    }
    private changepath(path: string): string | undefined {
        // 也可以使用v-if
        if (path) {
            return path.replace("w.h", "64.90");
        }
    }
    mounted() {
        // 使用了和父组件film中相同的数据所以直接在
        // 父组件中 使用 vuex的actions获取
    }
}
</script>
<style scoped>

</style>
