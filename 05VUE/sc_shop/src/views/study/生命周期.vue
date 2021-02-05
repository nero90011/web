<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-08 11:30:17
 * @LastEditTime: 2020-04-10 16:29:54
 * @LastEditors: Do not edit
 * @Description:
 -->
<template lang="pug">
    div
        //- 生命周期
        h1 生命周期
        child(v-if="isIf")
        button(@click="isIf=!isIf") isif
        //- 过滤器
        h1 过滤器
        ul
            li(v-for="item in datalist" :key="item.id")
                | {{item.nm}}
                br
                img(:src="changepath(item.img)")
</template>
<script lang='ts'>
/* eslint-disable */
import { Component, Vue } from "vue-property-decorator";
import child from "../../components/生命周期/Child.vue";
import { ComingList } from "../../components/fetch/Data1";
import axios from "axios";
@Component({
    components: {
        child
    }
})
export default class Smzq extends Vue {
    private isIf: boolean = true;
    private datalist: Array<ComingList> = [];

    mounted() {
        // vuecli默认静态文件在public中 并默认反向代理到了/
        axios.get("/data1.json").then(res => {
            console.log(res.data);
            this.datalist = res.data.data.comingList;
        });
    }

    private changepath(path: string): string {
        return path.replace("w.h", "128.180");
    }
}
</script>
<style scoped>
</style>