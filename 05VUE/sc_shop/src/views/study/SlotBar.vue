<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-07 15:52:18
 * @LastEditTime: 2020-04-10 16:30:45
 * @LastEditors: Do not edit
 * @Description:
 -->
<template lang="pug">
    div
        navbar
            button(@click="isshow=!isshow")  ishow
        sidebar(v-show="isshow")
</template>
<script lang='ts'>
/* eslint-disable */
import { Component, Vue } from 'vue-property-decorator'
import navbar from '../../components/slotBar/NavBar.vue'
import sidebar from '../../components/slotBar/SideBar.vue'

@Component({
    components:{
        navbar,
        sidebar
    }
})
export default class SlotBar extends Vue {
    private isshow:boolean=false

}
</script>
<style scoped>
</style>