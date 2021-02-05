<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-12-24 12:09:27
 * @LastEditTime: 2020-12-24 16:24:08
 * @LastEditors: Do not edit
 * @Description: 
-->
<template>
    <div class="home">
        <vatbutton round color="blue" @click="idcardReader()">阅读身份证</vatbutton>
        <h2 v-text="idcard ? idcard.base : 'idcard'"></h2>
    </div>
</template>

<script>
// @ is an alias to /src
// import { ipcRenderer } from 'electron'
import { readIdCard } from '../tools/idcard'
import {Button} from 'vant';
import '@vant/touch-emulator';

export default {
    name: 'Home',
    components: {
        vatbutton:Button
    },
    data() {
        return {
            idcard: null,
        }
    },
    methods: {
        async idcardReader() {
            /* ipcRenderer.send('fasong', 'doread')
            ipcRenderer.once('huifu',(event,arg)=>{
                console.log(arg);
            }) */

            try {
                this.idcard = await readIdCard()
            } catch (error) {
                console.log(error);
            }
            
        },
    },
}
</script>
