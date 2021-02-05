<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-10 13:44:41
 * @LastEditTime: 2020-04-11 18:35:55
 * @LastEditors: Do not edit
 -->
<template lang="pug">
    div
        child()
        button(@click="handleclick()") isshow
    //- 状态管理 非父子通信 数据快照(缓存) 方便管理调试 时光旅行
</template>
<script lang='ts'>
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import {mapState} from 'vuex'
import child from "../../components/vuex/Child.vue";

@Component({
    components: {
        child
    },
    computed: {
        // ...mapState(['state名字']),
    },
})
export default class VuexTest extends Vue {
    // 当参数名和括号内相同时,可以省略括号
    private isshow: boolean = false;
    @Mutation("SetisTabBarShow") SetisTabBarShow: any;

    handleclick(): void {
        this.SetisTabBarShow(this.isshow); //store.commit(state,data)
        this.isshow=!this.isshow
    }
}
</script>
<style scoped>
</style>