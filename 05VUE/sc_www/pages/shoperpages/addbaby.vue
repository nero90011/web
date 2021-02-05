<!--
 * @Author: Nero
 * @Github: https://github.com/nero90011
 * @E-mail: 601412402@qq.com
 * @Company: myself
 * @Date: 2020-04-19 14:28:44
 * @LastEditTime: 2020-05-01 14:00:04
 * @LastEditors: Do not edit
 * @Description: 
 -->
<template lang="pug">
    v-container( class="grey lighten-4" height="100%" )
        //- 返回按钮 不直接返回 询问用户是否保存草稿 如果保存则将addbaby添加到indexDB 否则do nothing
        v-row
            v-btn(class="ml-1 noborder" outlined icon @click="routerGoBack") 
                v-icon(v-text="'mdi-arrow-left'" )
        v-form(@submit.prevent="doAddBaBy" v-model="valid")
            v-card( elevation="0"  )
                v-card-title(class="body-1") 主要信息:
                v-card-text 
                    v-row(justify="center" align="center")
                        v-col
                            
                                v-text-field(
                                    label="商品名称" 
                                    v-model="addbaby.bname"  
                                    outlined  dense prepend-inner-icon="mdi-shopping"  counter="20"
                                    :rules="[rules.required]"
                                    autocomplete="off"
                                )
                                v-text-field(
                                    label="商品标题" 
                                    v-model="addbaby.btitle"  
                                    outlined  dense prepend-inner-icon="mdi-format-title"  counter="20"
                                    :rules="[rules.required]"
                                    autocomplete="off"
                                )
                                v-text-field(
                                    label="商品发货地" 
                                    v-model="addbaby.bfrom"  
                                    outlined  dense prepend-inner-icon="mdi-airplane"  counter="20"
                                    :rules="[rules.required]"
                                    autocomplete="off"
                                )
                                v-text-field(
                                    label="发布数量" 
                                    v-model="addbaby.bnum"  
                                    outlined  dense prepend-inner-icon="mdi-counter" 
                                    :rules="[rules.required]"
                                    autocomplete="off"
                                    type="number" 
                                )
                                v-text-field(
                                    label="价格" 
                                    v-model="addbaby.bmoney"  
                                    outlined  dense prepend-inner-icon="mdi-currency-usd" 
                                    :rules="[rules.required]"
                                    autocomplete="off"
                                    type="number" 
                                )
                                v-combobox(
                                    v-model="addbaby.chooses" 
                                    :rules="[rules.required]"
                                    :filter="filter"
                                    :hide-no-data="!search"
                                    :items="items"
                                    :search-input.sync="search"
                                    hide-selected
                                    label="请填写商品可选规格"
                                    multiple
                                    small-chips
                                    outlined dense 
                                    prepend-inner-icon="mdi-card-bulleted" 
                                )
                                    template(v-slot:no-data)
                                        v-list-item
                                            span(class="subheading") 新建
                                            v-chip( :color="` ${colors[nonce -1 ]}  lighten-3`" label small ) {{search}}
                                    template(v-slot:selection="{attrs,item,parent,selected}")
                                        v-chip(
                                            v-if="item===Object(item)" 
                                            v-bind="attrs" 
                                            :color="` ${item.color}  lighten-3`" 
                                            :input-value="selected" 
                                            abel small 
                                        )
                                            span(class="pr-2") {{item.text}}
                                            v-icon(small @click="parent.selectItem(item)") mdi-close
                                    template(v-slot:item="{index,item}")
                                        v-text-field(
                                            v-if="editing===item" 
                                            v-model="editing.text" 
                                            flat background-color="transparent"  
                                            hide-details solo 
                                            @keyup.enter="edit(index,item)"
                                        )
                                        v-chip(v-else :color="`${item.color} lighten-3`" label small  ) {{item.text}}
                                        v-spacer
                                        v-list-item-action(@click.stop)
                                            v-btn( icon @click.stop.prevent="edit(index,item)" )
                                                v-icon() {{ editing !== item ? 'mdi-pencil' : 'mdi-check' }}
            //- 轮播图
            v-card(  elevation="0" class="mt-2")
                v-card-title(class="body-1") 轮播图:
                v-card-text()
                    //- 依次显示用户添加的图片  v-img有问题 只能用img
                    v-avatar(
                        tile
                        v-for="(item, index) of addbaby.imgs" :key="index"
                        width="100%" height="100%"
                    )
                        img( 
                            :src="item" height="100%" width="100%" 
                            class="my-2"
                        )
                    v-row()
                        v-col(align="center")
                            //- 点击触发input的click事件
                            v-btn( @click="$refs['ref-input'].click()" icon  )
                                v-icon() mdi-plus
                            //- 点击删除最后一个图片 addbaby.imgs中删除 服务器中删除
                            v-btn(icon class="ml-3" @click="deleteLastImage('imgs')")
                                v-icon() mdi-delete
                    //- onchange事件触发将当前图片上传至minio并回显 addbaby.imgs中添加
                    input(@change="uploadImgs('ref-input','imgs')" type="file"  accept="image/*" ref="ref-input" v-show="false")
            //- 商品详情图
            v-card(  elevation="0" class="mt-2")
                v-card-title(class="body-1") 商品详情图:
                v-card-text()
                    //- 依次显示用户添加的图片  v-img有问题 只能用img
                    v-avatar(
                        tile
                        v-for="(item, index) of addbaby.detsrcjson" :key="index"
                        width="100%" height="100%"
                    )
                        img( 
                            :src="item" height="100%" width="100%" 
                            class="my-2"
                        )
                    v-row()
                        v-col(align="center")
                            //- 点击触发input的click事件
                            v-btn( @click="$refs['ref-input2'].click()" icon  )
                                v-icon() mdi-plus
                            //- 点击删除最后一个图片 addbaby.imgs中删除 服务器中删除
                            v-btn(icon class="ml-3" @click="deleteLastImage('detsrcjson')")
                                v-icon() mdi-delete
                    //- onchange事件触发将当前图片上传至minio并回显 addbaby.imgs中添加
                    input(@change="uploadImgs('ref-input2','detsrcjson')" type="file"  accept="image/*" ref="ref-input2" v-show="false")
            //- 提交按钮
            v-card(  elevation="0" class="mt-2 py-4")
                v-row(justify="center" align="center")
                    //- :disabled="!valid"
                    v-btn( color="success" type="submit"  outlined shaped ) 新建商品
                            
                        
                
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import * as qs from 'qs'

@Component({
    layout: 'nothing',
    middleware: 'auth',
})
export default class Addbaby extends Vue {
    // combobox
    private activator: any = null
    private attach: any = null
    private colors: Array<string> = ['green', 'purple', 'indigo', 'cyan', 'teal', 'orange']
    private editing: any = null
    private index: number = -1
    private items: any = [{ header: '选择或创建' }]
    private nonce: number = 1
    private menu: boolean = false
    private x: number = 0
    private search: any = null
    private y: number = 0

    // 提交按钮是否可用
    private valid: boolean = true
    // 添加宝贝信息
    private addbaby: any = {
        // bid:''
        bname: '', //商品名
        btitle: '', //商品标题
        bfrom: '', //商品发货地
        bnum: '', //产品数量
        bmoney: '', //产品价格
        imgs: [] as Array<string>, //商品轮播图
        detsrcjson: [], // 商品详情图
        chooses: [], // 选择商品时的规格
    }
    // 表单规则
    private rules: Object = {
        required: (v: any) => !!v || '不能为空',
        nameminmax: (v: any) => (v.length >= 4 && v.length <= 20) || '用户名长度为4-20',
        passminmax: (v: any) => (v.length >= 8 && v.length <= 25) || '密码长度为8-25',
        equalaspass: (v: any) => v === this.addbaby.rpwd || '两次密码不一致',
        isphone: (v: any) => (v.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(v)) || '请输入正确的手机号',
    }
    /* _______________________________watch */
    /**
     * @name:监听addbaby将addbaby添加到indexDB
     * @param {type}
     * @return:
     */
    /**
     * @name::combox
     * @param {type}
     * @return:
     */
    @Watch('addbaby.chooses', { deep: true })
    model(val: any, prev: any) {
        if (val.length === prev.length) return
        try {
            this.addbaby.chooses = val.map((v: any) => {
                if (typeof v === 'string') {
                    v = {
                        text: v,
                        color: this.colors[this.nonce - 1],
                    }

                    this.items.push(v)

                    this.nonce++
                }
                return v
            })
        } catch (error) {
            //do nothing
        }
    }
    /* ______________________________________普通方法______________________________________________ */
    /**
     * @name: 返回上一级
     * @param {type}
     * @return:
     */
    routerGoBack() {
        const that = this as any
        that['$router'].back()
    }
    /**
     * @name: combox
     * @param {type}
     * @return:
     */
    edit(index: any, item: any) {
        if (!this.editing) {
            this.editing = item
            this.index = index
        } else {
            this.editing = null
            this.index = -1
        }
    }
    filter(item: any, queryText: any, itemText: any) {
        if (item.header) return false
        const hasValue = (val: any) => (val != null ? val : '')
        const text = hasValue(itemText)
        const query = hasValue(queryText)
        return text.toString().indexOf(query.toString()) > -1
    }
    /**
     * @name: onchange事件触发将当前图片上传至minio并回显 addbaby.imgs中添加
     * @param {type}
     * @return:
     */
    async uploadImgs(ref: string, arrkey: string) {
        //上传图片
        const that = this as any
        const file = that.$refs[ref].files[0]
        if (!file) return console.log('文件不能为空')
        const formdata = new FormData()
        formdata.append('file', file, file.name)
        //axios
        const { data } = await that['$axios']({
            method: 'post',
            url: '/api/file/image',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            data: formdata,
        })
        if (data.code === 200) {
            //addbaby.imgs中添加src
            this.addbaby[arrkey].push(data.data)
        } else {
            // 提醒失败原因
            that['$toast'].show(data.msg, {
                theme: 'outline',
                position: 'top-center',
                duration: 1500,
                type: 'error',
            })
            // 然后什么也不干
        }
    }
    /**
     * @name: 删除最后一张图片
     * @param {type}
     * @return:
     */
    async deleteLastImage(arrkey: string) {
        const that = this as any
        // 获取最后一张图片的src
        const imgsarr = this.addbaby[arrkey]
        const src = imgsarr[imgsarr.length - 1]
        // 删除图片 出错就报 没错不提醒
        const result = that['$axios']({
            method: 'post',
            url: '/api/file/delete',
            data: { imgsrc: src },
        })
        // 数组pop
        imgsarr.pop()
    }
    /**
     * @name: 提交表单 添加商品
     * @param {type}
     * @return:
     */
    async doAddBaBy() {
        // 使用qs处理  chooses detsrcjson imgs
        this.addbaby.chooses =await qs.stringify(this.addbaby.chooses)
        this.addbaby.detsrcjson =await qs.stringify(this.addbaby.detsrcjson)
        this.addbaby.imgs =await qs.stringify(this.addbaby.imgs)
        // console.log(this.addbaby)
        const that = this as any
        const {data} =await that['$axios'].post('/api/category/addone', this.addbaby)
        if(data.code===200){
            // 提醒
            that['$toast'].show(data.msg, {
                theme: 'outline',
                position: 'top-center',
                duration: 1500,
                type: 'success',
            })
            // 路由到上一级
            that['$router'].back()
        }else{
            //提醒创建失败的原因
            that['$toast'].show(data.msg, {
                theme: 'outline',
                position: 'top-center',
                duration: 1500,
                type: 'error',
            })
        }
    }
    /* -________________________vue生命周期_______________________ */
    /**
     * @name:mounted 从indexedDB中获取 存储好的的addbaby表单数据
     * @param {type}
     * @return:
     */
    /**
     * @name:用户刷新时询问是否保存 不保存图片直接全部删除
     * @param {type}
     * @return:
     */
}
</script>

<style scoped lang="scss">
.noborder {
    border: none;
}
</style>
