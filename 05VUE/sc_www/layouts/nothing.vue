<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-16 00:21:30
 * @LastEditTime: 2020-04-20 17:45:52
 * @LastEditors: Do not edit
 * @Description: 
 -->
<template lang="pug">
    v-app(height="100%")
        v-content(height="100%")
            //- 相当于router-view
            keep-alive
                nuxt(height="100%" )
</template>
<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Nothing extends Vue {
}
</script>
<style scoped lang="scss">
</style>