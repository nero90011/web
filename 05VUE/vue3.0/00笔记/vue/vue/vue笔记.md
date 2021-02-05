
# vue

    响应式:data属性发生变化,所有相关视图将重新渲染

- [vue](#vue)
  - [1注意](#1注意)
  - [2项目初始化安装](#2项目初始化安装)
  - [3项目目录结构](#3项目目录结构)
  - [4注意事项](#4注意事项)
  - [5vue组件组成](#5vue组件组成)
  - [6模板语法](#6模板语法)
    - [插值](#插值)
      - [插入到text中](#插入到text中)
        - [mustache语法](#mustache语法)
        - [v-html/v-text](#v-htmlv-text)
      - [bind:插入到attribute中](#bind插入到attribute中)
      - [插入js表达式(只能是单个表达式)](#插入js表达式只能是单个表达式)
    - [指令](#指令)
      - [bind为元素绑定attr class多重绑定](#bind为元素绑定attr-class多重绑定)
      - [if/show条件渲染  key同样元素是否复用](#ifshow条件渲染-key同样元素是否复用)
      - [for列表渲染 :key="index"提升性能](#for列表渲染-keyindex提升性能)
      - [on事件监听](#on事件监听)
      - [v-model表单输入绑定与watch computed](#v-model表单输入绑定与watch-computed)
        - [v-model](#v-model)
        - [watch属性: //监听vmodel的变化从而执行内部函数***](#watch属性-监听vmodel的变化从而执行内部函数)
        - [声明周期与钩子函数](#声明周期与钩子函数)
  - [7响应式](#7响应式)
    - [视图更新检测](#视图更新检测)
  - [8自身属性](#8自身属性)
    - [计算属性computed](#计算属性computed)
    - [监听属性watch](#监听属性watch)
    - [自身值data](#自身值data)
    - [方法属性](#方法属性)
    - [组件属性](#组件属性)
      - [组件的复用](#组件的复用)
      - [将原生事件指向子组件的子元素%listeners](#将原生事件指向子组件的子元素listeners)
      - [局部组件与全局组件 全局样式和局部样式](#局部组件与全局组件-全局样式和局部样式)
      - [组件传值](#组件传值)
        - [组件传递数据prop(父向子传递,自动更新)](#组件传递数据prop父向子传递自动更新)
        - [非Prop的Attribute传值(父向子根元素标签传key=val)](#非prop的attribute传值父向子根元素标签传keyval)
        - [$attrs+inheritAttrs:false HTML式传值](#attrsinheritattrsfalse-html式传值)
        - [自定义事件($emit子向父传值以及.sync父子之间)](#自定义事件emit子向父传值以及sync父子之间)
        - [插槽传值(父子之间相互) slot的attribute:插槽prop](#插槽传值父子之间相互-slot的attribute插槽prop)
      - [动态组件(保存之前的操作)与异步组件(需要被渲染时再加载模块)](#动态组件保存之前的操作与异步组件需要被渲染时再加载模块)
      - [插槽:向子组件引入任意模板语句(任意HTML)](#插槽向子组件引入任意模板语句任意html)
      - [处理边界情况](#处理边界情况)
  - [9过渡/动画](#9过渡动画)
    - [列表过度/进入离开](#列表过度进入离开)
    - [状态过度](#状态过度)
  - [10可复用性/组合](#10可复用性组合)
    - [混入](#混入)
    - [渲染函数&JSX](#渲染函数jsx)
    - [插件](#插件)
    - [过滤器](#过滤器)
  - [11规模化](#11规模化)
    - [路由](#路由)
      - [引入路由](#引入路由)
      - [动态路由匹配](#动态路由匹配)
        - [通过路由向组件中传递参数](#通过路由向组件中传递参数)
        - [匹配通配符 及高级匹配](#匹配通配符-及高级匹配)
        - [匹配优先级](#匹配优先级)
        - [响应路由参数变化](#响应路由参数变化)
      - [路由嵌套](#路由嵌套)
      - [route-link  及router.push router.replace router.go](#route-link-及routerpush-routerreplace-routergo)
      - [命名视图(同一页面展示多个组件)](#命名视图同一页面展示多个组件)
      - [重定向和别名](#重定向和别名)
      - [路由组件传参](#路由组件传参)
      - [history模式](#history模式)
      - [给路由加上过度效果](#给路由加上过度效果)
      - [数据获取](#数据获取)
      - [路由完成后的滚动条设置](#路由完成后的滚动条设置)
      - [路由懒加载](#路由懒加载)
    - [状态管理](#状态管理)
    - [服务端渲染](#服务端渲染)
    - [安全](#安全)
  - [12工具](#12工具)
    - [单文件组件](#单文件组件)
    - [单元测试](#单元测试)
    - [TS支持](#ts支持)
    - [生产环境部署](#生产环境部署)
  - [13响应式原理](#13响应式原理)

## 1注意

    稳定版本 2.5.9
    兼容性:不支持 ie8 及以下
    官网有迁移教程

## 2项目初始化安装

    1.
    npm install -g vue-cli  全局,下次不用了
    2.
    vue init webpack 工程名(大小写,不含中文)
    选项:不安装eslint 不安装unit tests 不安装setup e2e tests with nightwatch
    3.安装依赖
    cd项目中
    npm install
    4.运行
    npm run dev

    方式2: vue-cli

## 3项目目录结构

    传统:
    index.html项目根视图
    .postcssrc.js:postcss配置文件
    .editorconfig:配置文件
    .babelrc:babel配置文件
    static:静态文件目录
    config:服务器环境配置文件目录  包含是否自动打开浏览器
    build:服务器配置以及webpack位置文件
    src
        main.js主js文件
        app.vue主要vue组件
        assets:资源文件
        component子组件

    vue-cli:

## 4注意事项

    0.注意事项:
        在 DOM 中使用模板时你需要回避大写键名。html会把所有的大写转为小写,除了js的函数名

    1.缩写后必须带参数 @click=//对 @=//错

    2.模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如 Math 和 Date 。你不应该在模板表达式中试图访问用户定义的全局变量。

    3.只能有一个根容器
        data必须是函数

## 5vue组件组成

        template:视图部分
        script:逻辑部分
        style:样式部分

## 6模板语法

    将值插入到html的 text html attribute 中

### 插值

#### 插入到text中

##### mustache语法

    不友好的地方:如果网速较慢,网页会显示{{}}
    所以不建议使用{{}}

    {{msg}}
    {{1+1}}
    {{"哈哈"}}
    {{0>10?"对的":"错的"}}<br>
    <p>{{'注意:只能存在单行语句,不能存在块'}}</p>
    {{message.split('').reverse().join('')}}

    <!-- 这是语句，不是表达式,会报错 -->
    {{ var a = 1 }}

    <!-- 流控制也不会生效，请使用三元表达式 -->
    {{ if (ok) { return message } }}
    Mustache 语法不能作用在 HTML 特性上，遇到这种情况应该使用 v-bind 指令：
    模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如 Math 和 Date 。你不应该在模板表达式中试图访问用户定义的全局变量。

    {{export自定义函数(必须有返回值)}}

##### v-html/v-text

    v-html:渲染超文本  可能造成脚本入侵 绝不要对用户提供的内容使用插值。
    v-text:渲染文本   更安全,推荐
        <p v-html="'msg'"></p><br>
        <p v-text="msg"></p><br>
        <p v-html="msg"></p><br>

#### bind:插入到attribute中

    缩写: :key="val"
    使用:
        1.<div v-bind:disable="val"></div>// val为常量
        2.<div v-bind:disable="val"></div>// val为变量
    注意: 
        1.如果val的值为 null、undefined 或 false 则直接消失不显示在html中

#### 插入js表达式(只能是单个表达式)

    <!-- 这是语句，不是表达式 -->
    {{ var a = 1 }}

    <!-- 流控制也不会生效，请使用三元表达式 -->
    {{ if (ok) { return message } }}

### 指令

    指令 (Directives) 是带有 v- 前缀的特殊 attribute。指令 attribute 的值预期是单个 JavaScript 表达式 (v-for 是例外情况，稍后我们再讨论)。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。

    注意:只要设置v-任何  后面的值就认为是js语句 但是也可以不声明此变量作为string用

#### bind为元素绑定attr class多重绑定

    <a v-bind:key="一个js表达式/变量等">...</a> //val为动态
    当[key]中的key为null,则删除此attr
    [key]中的key不可以为:'foo' + bar类似的值,但可以使用计算属性computed先计算出来
    <a v-bind:[key]="url"> ... </a>  //key,val都为动态

    根据冒号后值的真假决定是否使用冒号前面的值

    <div v-bind:class="{ active: isActive }"></div>
    <div
        v-bind:class="{ active: isActive, 'text-danger': hasError ,static}"
        class="static2"
    >
    </div>

#### if/show条件渲染  key同样元素是否复用

    !!!可以加到template上切换元素

    !!!不推荐同时使用 v-if 和 v-for
        v-for执行比v-if快

    !!!频繁切换使用show,否则使用if

    !!!v-if v-else-if v-else的标签之间不能有任何其他标签


    !!!是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

    如果不添加唯一key则表明这是同一个元素,其内部相同的元素都会被复用
    Vue 为你提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”。只需添加一个具有唯一值的 key 属性即可：
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username"    key="username-input">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email-input">
    现在，每次切换时，输入框都将被重新渲染。
    注意，<label> 元素仍然会被高效地复用，因为它们没有添加 key 属性。

    v-show 没有else的if
        不管初始条件是什么，元素总是会被渲染,但是还是判断是否再显示
        v-show 只是简单地切换元素的 CSS 属性 display。
        v-if惰性,show不管条件是什么元素总会被渲染,并且只是简单地基于css进行切换

#### for列表渲染 :key="index"提升性能

        提供第二个的参数为 property 名称 (也就是键名)：
        用第三个参数作为索引

        v-for 根据数组进行列表渲染,需要使用for in进行处理
                或者 for of

        <!-- 循环渲染  : vbind的简写 尽量不对对象操作-->
        <div id="list">
        <ul>
            <li v-for="(name, index) in names" :key="index">{{ name }}-{{index}}</li>
        </ul>
        <br />
        <ul>
            <li v-for="(item, index) in user" :key="index">
            <span>{{item.name}}</span>
            <span>{{item.age}}</span>
            </li>
        </ul>
        </div>

        在v-for中使用值范围:
        <div>
          <span v-for="n in10">{{n}}</span>
        </div>

        由于 JavaScript 的限制，Vue 不能检测以下数组的变动：
        当你利用索引直接设置一个数组项时，例如：
        vm.items[indexOfItem] = newValue
        当你修改数组的长度时，例如：vm.items.length = newLength

        5.2列表循环排序
          <li v-for="n in evenNumbers">{{ n }}</li>
        
    ```

          ```javascript
          data: {
            numbers: [ 1, 2, 3, 4, 5 ]
          },
          computed: {
            evenNumbers: function () {
              return this.numbers.filter(function (number) {
                return number % 2 === 0
              })
            }
          }
          ```

          在计算属性不适用的情况下 (例如，在嵌套 v-for 循环中) 你可以使用一个方法：

          ```html
          <li v-for="n in even(numbers)">{{ n }}</li>
          ```
          ```javascript
          data: {
            numbers: [ 1, 2, 3, 4, 5 ]
          },
          methods: {
            even: function (numbers) {
              return numbers.filter(function (number) {
                return number % 2 === 0
              })
            }
          }
          ```

#### on事件监听

    6.1.
    v-on:事件名.事件修饰符="执行的函数名"
    v-on[]:
    @事件名="函数"  简写

    methods :复杂的事件触发函数统一写在methods对象里
    访问原始的 DOM 事件。可以用特殊变量 $event

    6.2.事件:
    推荐你始终使用 kebab-case 的事件名

    6.3.事件修饰符:
        .stop   阻止冒泡
        .prevent 阻止默认事件  写法:
                v-on:click.prevent
        .capture 事件委托(事件捕获模式)
        .once 只生效一次
        .target 是当前元素自身触发时处理函数
        .self 自身触发(冒泡捕获不执行)
        v-on:click.prevent.self 会阻止所有的点击，
        而 v-on:click.self.prevent 只会阻止对元素自身的点击。

        新增:
        <!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
        <!-- 而不会等待 `onScroll` 完成  -->
        <!-- 这其中包含 `event.preventDefault()` 的情况 -->
        <div v-on:scroll.passive="onScroll">...</div>
        这个 .passive 修饰符尤其能够提升移动端的性能。

        不要把 .passive 和 .prevent 一起使用，因为 .prevent 将会被忽略，同时浏览器可能会向你展示一个警告。请记住，.passive 会告诉浏览器你不想阻止事件的默认行为。
    6.3.按键修饰符:
        使用 keyCode 特性也是允许的：

        <input v-on:keyup.13="submit">
        为了在必要的情况下支持旧浏览器，Vue 提供了绝大多数常用的按键码的别名：

        代表: 只有这个键被触发
        .a  或者 .65
        .enter   .13
        .tab
        .delete (捕获“删除”和“退格”键)
        .esc
        .space
        .up
        .down
        .left
        .right
        有一些按键 (.esc 以及所有的方向键) 在 IE9 中有不同的 key 值, 如果你想支持 IE9，这些内置的别名应该是首选。

        你还可以通过全局 config.keyCodes 对象自定义按键修饰符别名：

        // 可以使用 `v-on:keyup.f1`
        Vue.config.keyCodes.f1 = 112

    6.3.2组合按键
        @keyup.alt.67
        @keyup.alt.ctrl.67.68.69...

    6.4.系统修饰键

        可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。

        .ctrl
        .alt
        .shift
        .meta
        注意：在 Mac 系统键盘上，meta 对应 command 键 (⌘)。在 Windows 系统键盘 meta 对应 Windows徽标键(⊞)。
        在 Sun 操作系统键盘上，meta 对应实心宝石键 (◆)。
        在其他特定键盘上，尤其在 MIT 和 Lisp 机器的键盘、以及其后继产品，
        比如 Knight 键盘、space-cadet 键盘，meta 被标记为“META”。在 Symbolics 键盘上，meta 被标记为“META”或者“Meta”。

        例如：

        <!-- Alt + C -->
        <input @keyup.alt.67="clear">

        <!-- Ctrl + Click -->
        <div @click.ctrl="doSomething">Do something</div>
        请注意修饰键与常规按键不同，在和 keyup 事件一起用时，事件触发时修饰键必须处于按下状态。换句话说，只有在按住 ctrl 的情况下释放其它按键，才能触发 keyup.ctrl。
        而单单释放 ctrl 也不会触发事件。如果你想要这样的行为，请为 ctrl 换用 keyCode：keyup.17。

    6.5.exact 修饰符
        2.5.0 新增

        .exact 修饰符允许你控制由精确的系统修饰符组合触发的事件。

        <!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
        <button @click.ctrl="onClick">A</button>

        <!-- 有且只有 Ctrl 被按下的时候才触发 -->
        <button @click.ctrl.exact="onCtrlClick">A</button>

        <!-- 没有任何系统修饰符被按下的时候才触发 -->
        <button @click.exact="onClick">A</button>


    6.6.鼠标修饰符:
        .left
        .right
        .middle

#### v-model表单输入绑定与watch computed

##### v-model

    !双向数据绑定:双向数据绑定，即当数据发生变化的时候，视图也就发生变化，当视图发生变化的时候，数据也会跟着同步变化

    !适用范围:input select textarea checkbox radio components

    !你可以用 v-model 指令在表单 <input>、<textarea> 及 <select> 元素上创建双向数据绑定
    会忽略所有表单元素的 value、checked、selected 特性的初始值
    你应该通过 JavaScript 在组件的 data 选项中声明初始值。

    !.text 和 textarea 元素使用 value 属性和 input 事件；
    checkbox 和 radio 使用 checked 属性和 change 事件；
    select 字段将 value 作为 prop 并将 change 作为事件。

    !.只有input 事件能监听输入法语言

    !.在文本区域插值 (<textarea>{{text}}</textarea>) 并不会生效，应用 v-model 来代替。

    !.使用v-model.number等 来限定数据类型

##### watch属性: //监听vmodel的变化从而执行内部函数***

    watch:{
        监听的方法名或者属性名((newval,oldval)=>{
            newval//现在的值
            oldval//之前的值
        })
    }

    !修饰符:
        .lazy  变更为change事件而不是事实监听(完全输入之后才发生)
        .number 自动将用户的输入值转为数值类型
            这通常很有用，因为即使在 type="number" 时，HTML 输入元素的值也总会返回字符串。如果这个值无法被 parseFloat()解析，
            则会返回原始的值。
        .trim 自动过滤用户输入的首尾空白字符

    !watch vs computed
        watch只在vmodel配合input等使用就好

##### 声明周期与钩子函数

![声明周期](https://cn.vuejs.org/images/lifecycle.png)

    beforeCreate->created(使用ajax发送请求到后台获取数据)->加载模板->
    beforeMounte->渲染->mounted->beforeUpdate
    ->update->beforeDestroy->destroyed

    优先级:data的优先级更高

    使用举例:
        export default {
            data:{
                return{}
            },
            钩子函数名(){
                //dosth
            }
        }

## 7响应式

### 视图更新检测

        7.1数组:
          变异方法 (mutation method)
          Vue 将被侦听的数组的变异方法进行了包裹，所以它们也将会触发视图更新。这些被包裹过的方法包括：

          push()
          pop()
          shift()
          unshift()
          splice()
          sort()
          reverse()

          不能引起视图变化
          filter()、concat() 和 slice() 。它们不会改变原始数组，而总是返回一个新数组。当使用非变异方法时，
          可以用新数组替换旧数组：
          Vue.set(vm.items, indexOfItem, newValue)
          vm.items.splice(indexOfItem, 1, newValue)
          你也可以使用 vm.$set 实例方法，该方法是全局方法 Vue.set 的一个别名：

            vm.$set(vm.items, indexOfItem, newValue)
            为了解决第二类问题，你可以使用 splice：

            vm.items.splice(newLength)
        7.2对象
          由于js的限制,vue不能检测对象属性的添加或删除
          data对象中的属性是响应式的
          但是类似于vm.b的根级别是不允许的,但是可以使用

          vue.set(object,propertyName,value)的方式向嵌套对象添加响应式属性

          ```javascript
          var vm = new Vue({
            data: {
              userProfile: {
                name: 'Anika'
              }
            }
          })
          Vue.set(vm.userProfile, 'age', 27)
          vm.$set(vm.userProfile, 'age', 27)//全局别名
          //添加多个响应式属性  应该这样做
          vm.userProfile = Object.assign({}, vm.userProfile, {
            age: 27,
            favoriteColor: 'Vue Green'
          })
          ```

## 8自身属性

    添加到script中使用export暴露出来

### 计算属性computed

    计算属性是基于它们的响应式依赖进行缓存的
    **_Date.now()等 不是响应式依赖_**
    **_watch 可以用 computed 代替,效果效率会更好_**

    !!!必须有返回值

    **_对于任何复杂逻辑你都应当使用计算属性_**
    methods不缓存 computed缓存

    computed:{
        name:function(){
            //大量计算
            return sth;
        }
    }

### 监听属性watch

### 自身值data

    data(){
        return{
            
        }
    }

### 方法属性

    method:{

    }

### 组件属性

    (00)规范及注意:
        我们强烈推荐遵循 W3C 规范中的自定义组件名 (字母全小写且必须包含一个连字符)。这会帮助你避免和当前以及未来的 HTML 元素相冲突。

        当使用 kebab-case (短横线分隔命名) 定义一个组件时，你也必须在引用这个自定义元素时使用 kebab-case，例如 <my-component-name>。

        当使用 PascalCase (首字母大写命名) 定义一个组件时，你在引用这个自定义元素时两种命名法都可以使用。也就是说 <my-component-name> 和 <MyComponentName> 都是可接受的。注意，尽管如此，直接在 DOM (即非字符串的模板) 中使用时只有 kebab-case 是有效的。

    (0)组件化思想
        任何应用最后都会被抽象成一颗组件树
        
    (1).创建及使用
        创建组件构造器
            import Handle from "./components/01指令语法";
        注册组件
            components:{
                组件别名[:组件名],
                组件名,
            }
        使用组件
            <template>
                <组件别名/>
            </template>       

#### 组件的复用

    <countername></countername>
    <countername></countername>
    <countername></countername>

    组件之间互不影响,因为data({return{}})
    因此每个实例都可以维护一份被返回对象的独立的拷贝

#### 将原生事件指向子组件的子元素%listeners

    Vue.component('base-input', {
    inheritAttrs: false,
    props: ['label', 'value'],
    computed: {
        inputListeners: function () {
        var vm = this
        // `Object.assign` 将所有的对象合并为一个新对象
        return Object.assign({},
            // 我们从父级添加所有的监听器
            this.$listeners,
            // 然后我们添加自定义监听器，
            // 或覆写一些监听器的行为
            {
            // 这里确保组件配合 `v-model` 的工作
            input: function (event) {
                vm.$emit('input', event.target.value)
            }
            }
        )
        }
    },
    template: `
        <label>
        {{ label }}
        <input
            v-bind="$attrs"
            v-bind:value="value"
            v-on="inputListeners"
        >
        </label>
    `
    })

#### 局部组件与全局组件 全局样式和局部样式

    有scoped时style才不是全局而是仅仅此组件

    全局组件即使不使用也会随着vue加载
    全局组件可在全局使用

    /* 全局组件 */
    Vue.component('quanju-com',{
        template:"<h1>quanju-com</h1>"
    })

    <!-- 全局组件es6 -->
    全局注册的行为必须在根 Vue 实例 (通过 new Vue) 创建之前发生
    也就是必须在main.js中的new Vue之前
    import Vue from 'vue'
    import upperFirst from 'lodash/upperFirst'
    import camelCase from 'lodash/camelCase'

    const requireComponent = require.context(
    // 其组件目录的相对路径
    './components',
    // 是否查询其子目录
    false,
    // 匹配基础组件文件名的正则表达式
    /Base[A-Z]\w+\.(vue|js)$/
    )

    requireComponent.keys().forEach(fileName => {
    // 获取组件配置
    const componentConfig = requireComponent(fileName)

    // 获取组件的 PascalCase 命名
    const componentName = upperFirst(
        camelCase(
        // 获取和目录深度无关的文件名
        fileName
            .split('/')
            .pop()
            .replace(/\.\w+$/, '')
        )
    )

    // 全局注册组件
    Vue.component(
        componentName,
        // 如果这个组件选项是通过 `export default` 导出的，
        // 那么就会优先使用 `.default`，
        // 否则回退到使用模块的根。
        componentConfig.default || componentConfig
    )
    })

#### 组件传值

##### 组件传递数据prop(父向子传递,自动更新)

    !!!向子组件中传递值是一个非String的其他类型必须用v-bind表明他是一个js表达式否则都会认为是字符串
    
    !!!props可以指定值的类型,如果验证失败,则会有报警

    !!!获取属性时可以自定义props的名字

    !!!camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短横线分隔命名) 命名每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。

    !!!所有的 prop 都使得其父子 prop 之间形成了一个单向下行绑定：父级 prop 的更新会向下流动到子组件中，但是反过来则不行


    1.使用步骤:

        父:
        child(key="val")
        子:
        props:["key",]

        
    1.3props选项:
        props: {
            // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
            值A: Number,
            // 多个可能的类型
            propB: [String, Number],
            // 必填的字符串
            值C: {
            type: String,
            required: true
            },
            // 带有默认值的数字
            propD: {
            type: Number,
            default: 100
            },
            // 带有默认值的对象
            propE: {
            type: Object,
            // 对象或数组默认值必须从一个工厂函数获取
            default: function () {
                return { message: 'hello' }
            }
        },
        // 自定义验证函数 验证函数返回true or false 表示验证是否成功
        propF: {
        validator: function (value) {
            // 这个值必须匹配下列字符串中的一个
            return ['success', 'warning', 'danger'].indexOf(value) !== -1
        }
        }
        type可以是:任何值
        或者是自定义构造函数,可以通过instanceof进行检查确认
        如:
        props:{
            author:Person
        }
    1.4传值的情况
        传入Boolean
        <blog-post is-published></blog-post>  //传入了一个值 key=is-published val: true(没有值默认为true)

##### 非Prop的Attribute传值(父向子根元素标签传key=val)

    解释: 父组件向子组件传了值key="val" 但是子组件中的props没有定义相应key来获取
            此key的val就叫做非Prop的Attribute传值

    使用:
    1.父组件中:
        子组件(key="value")
    2.子组件中:
    <template><div></div></template>  div作为此子组件的根元素会自动有此属性
    3.子组件获取值:
    mounted: function () {
        console.log(this.$el.getAttribute('key');
    }
    3.替换/合并已有的Attribute:
    外部传得值会替换掉子组件原有的值
    但是class 和 style attribute 会稍微智能一些，即两边的值会被合并起来，从而得到最终的值两者相加中间空格

    4.禁用Attribute继承:
    使用此属性后如果父组件使用非props传值 子组件的根元素不会再收到值
      inheritAttrs:false,
      但不会影响sytle和class的绑定

##### $attrs+inheritAttrs:false HTML式传值

    解释: 父组件向子组件使用<子组件 key="val2" key2="val2"/>传值
        子组件设置inheritAttrs:false,关闭根元素获取值(除了class 和style),
        但是子组件在某个内部元素例如<input v-bind="$attrs">设置了
        $attrs,$attrs就包含了"非props式"传递的所有制
        他的结构:{
                key="val2" ,
                key2="val2"
                }
        这样就不用担心到底非props式的谁是根元素问题

##### 自定义事件($emit子向父传值以及.sync父子之间)

    !!!可以对一个 prop 进行“双向绑定”
    !!!推荐你始终使用 kebab-case 的事件名
    !!!注意带有 .sync 修饰符的 v-bind 不能和表达式一起使用v-bind:title.sync="只能是属性名"
    !!!当我们用一个对象同时设置多个 prop 的时候，也可以将这个 .sync 修饰符和 v-bind 配合使用:
            <text-document v-bind.sync="doc"></text-document>

    $emit(自定义事件)
    步骤:
    1.父组件中:
        child(@key="handleEvent")
        private handleEvent(value:string){
            console.log("父组件收到钱了",value);
        }
    2.子组件中:
        input(:value=" " @input="$emit('key',$event.target.value)")
      
    此方式的缩写: .sync
    1. 父组件中:
        child(
            :key.sync="value"
        ) 
    2. 子组件中
        input(
            :value="val" @input="$emit('update:key',value)"
        )

##### 插槽传值(父子之间相互) slot的attribute:插槽prop

    !注意 v-slot 只能添加在 <template> 上 (只有一种例外情况)，这一点和已经废弃的 slot attribute 不同。

    父:
    Child
        template(
            v-slot:childs-slot-name="{ChildsKey:ChildsKeysNewName}"
            v-text="ChildsKey.val"
        ) ValueToChild
    子:
    div
        slot(
            name="childs-slot-name" 
            :ChildsKey="ChildsObject"
        ) oldvalue

#### 动态组件(保存之前的操作)与异步组件(需要被渲染时再加载模块)

    #####动态组件:
    步骤:
    1.父组件中:
        <!-- 动态组件与keep-alive -->
        <button type="button" name="button" @click="changeComponent">切换</button>

        <!-- 使用keep-alive 失活的组件将会被缓存
            保持组件状态,避免反会重新渲染导致的性能问题
        -->
        <!-- 动态组件:使用:is 在
                组件会在currentComponent改变时改变
                curentComponent可以是组件名或者组件的选项对象
        -->
        <keep-alive>
        <component :is="currentComponent"></component>
        </keep-alive>

        import A from "./components/06A组件";
        import B from "./components/06B组件";
        其他切换语句与methods

    2.子组件中:
        无,写点啥都行

    ##### 异步组件: with Promise 的函数

    局部:
    components: {
        'my-component': () => import('./my-async-component')
    }
    全局:
    'async-webpack-example',
    () => import('./my-async-component')
    其他设置:
    const AsyncComponent = () => ({
    // 需要加载的组件 (应该是一个 `Promise` 对象)
    component: import('./MyComponent.vue'),
    // 异步组件加载时使用的组件
    loading: LoadingComponent,
    // 加载失败时使用的组件
    error: ErrorComponent,
    // 展示加载时组件的延时时间。默认值是 200 (毫秒)
    delay: 200,
    // 如果提供了超时时间且组件加载也超时了，
    // 则使用加载失败时使用的组件。默认值是：`Infinity`
    timeout: 3000
    })

#### 插槽:向子组件引入任意模板语句(任意HTML)

    #####使用:
    1.父组件:
    <navigation-link url="/profile">
        1个或多个任意HTML语句 / 组件 / {{本身组件的实例属性,子组件的不行}}
    </navigation-link>
    2.子组件:
    <a v-bind:href="url">
        <slot>设置插槽默认值</slot>
    </a>
    #####结果解析:
    <slot></slot>会被替换成  "1个或多个任意HTML语句 "

    #####多插槽使用: 插槽的默认名为:default
    !!!v-slot 只能添加在 <template> 上 
    !!!注意默认插槽的缩写语法不能和具名插槽混用，因为它会导致作用域不明确即
             v-slot和v-slot:other不能在同一个作用域 至少该为:v-slot:default
    <base-layout>
        <template v-slot:header>
            <h1>Here might be a page title</h1>
        </template>

        <p>A paragraph for the main content.</p>
        <p>And another one.</p>

        <template v-slot:footer>
            <p>Here's some contact info</p>
        </template>
    </base-layout>

    <div class="container">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
    ##### 解构赋值可以用在 v-slot="{user:person}"
    { user = { firstName: 'Guest' } }
    ##### 动态插槽名:
    v-slot:[dynamicSlotName]
    ##### v-slot缩写: #名称 #default  缩写后必须带参数

#### 处理边界情况

    1.访问根实例:this.$root.方法/属性/函数()
    2.访问父组件实例: this.$parent.map || this.$parent.$parent.map 不推荐使用 推荐注入依赖
    3.访问子组件实例或子元素:<base-input ref="usernameInput"></base-input> this.$refs.usernameInput
    4.依赖注入:
        父组件:provide 选项允许我们指定我们想要提供给后代组件的数据/方法
        provide: function () {
            return {
                getMap: this.getMap
            }
        }
        子组件:inject: ['getMap']

## 9过渡/动画

### 列表过度/进入离开

### 状态过度

## 10可复用性/组合

### 混入

### 渲染函数&JSX

### 插件

### 过滤器

## 11规模化

### 路由

    使用vue-route和vue可以非常方便的实现复杂单页应用的动态路由功能
    动态加载组件，实现组件切换:
    虽然使用原生的Html5和JS也能实现，但是官方推荐我们使用vue-router模块。

#### 引入路由

    0.npm i -D vue-router

    1. main.js:  父文件引入router

    import Vue from 'vue';
    import App from './App'; // 加载根项目
    import router from './router'; //!!!!!!!!!!!!!!!!!!!!!!!!!!

    Vue.config.productionTip = false;

    new Vue({
        el: '#app', // 绑定html元素 通过id
        components: { App }, // 创建组件名字,要和根组件同名
        template: '<App/>', // 模板 指定根组件App.vue
        router   //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    });

    2. src/router/index.js:  创建router/index.js 引入要路由的组件

    import Vue from 'vue';
    import Router from 'vue-router';!!!!
    import login from '../components/user/login.vue'; !!!!!
    import register from '../components/user/register.vue';!!!!

    Vue.use(Router);

    export default new Router({
        routes: [
            {
                path: '/login',  !!!
                name: 'login',  
                component: login  !!!!
            },
            {
                path: '/register', !!!
                name: 'register',
                component: register !!!
            }
        ]
    });

    1. App.vue中或其他需要路由的组件中:
        <!-- router-link 本质是一个a标签 会跳转到在../router/index.js中设置好的路由 to相当于href -->
        <span>
            <router-link to="/login">
            登录
            </router-link></span>
        <span>
            <router-link to="/register">
            注册
            </router-link></span>
        <hr/>
        <div>
            <!-- vue-router的锚点  组件显示处 -->
            <router-view></router-view>
        </div>

    - 通过`<router-view>`来指定一个锚点，当路由的路径匹配时，vue-router会自动把对应组件放到锚点位置进行渲染
    - 通过`<router-link>`指定一个跳转链接，当点击时，会触发vue-router的路由功能，路径中的hash值会随之改变

#### 动态路由匹配

##### 通过路由向组件中传递参数

    1. routes:[path:'user/:id',component:user]
    2. template:    {{$route.params.id}}

    | 模式                          | 匹配路径            | $route.params                        |
    | ----------------------------- | ------------------- | ------------------------------------ |
    | /user/:username               | /user/evan          | { username: 'evan' }                 |
    | /user/:username/post/:post_id | /user/evan/post/123 | { username: 'evan', post_id: '123' } |

##### 匹配通配符 及高级匹配

    !!!! 通配符应该放在路由最后

    path: '*' //匹配所有路径  通常用于客户端404错误
    path:'/user-*' //匹配以/user-开头的任意路径

    api:
        path:'/user-*'  
        this.$route.push('user-admin');
        this.$route.params.pathMatch // 'admin'

##### 匹配优先级

    同一个路径可以匹配多个路由，此时，匹配的优先级就按照路由的定义顺序：谁先定义的，谁的优先级就最高。

##### 响应路由参数变化

    使用路由参数时,原来的组件实例会被复用,导致组件的生命周期钩子函数不会被调用,解决方法:
    使用watch:{'$route'(to,from){}}
    或者使用: beforeRouteUpdate(to,from,next){
        //dont forget to call next()
    }

#### 路由嵌套

    App.vue中: template: <router-view></router-view> 此为最顶层路由出口,渲染最高级路由匹配到的组件
    router.index中:  routes: [{ path: '/user/:id', component: User }]
    User.vue中(此为最顶层路由匹配到的组件):   routes: [{ path: '/user/:id', component: User }]
    router.index中: 
        routes: [
            { path: '/user/:id', component: User,
                children: [
                     //当/user/:id匹配成功 UserHome会被渲染在User的router-view中
                    { path: '', component: UserHome },
                    {
                        // 当 /user/:id/profile 匹配成功，  
                        // UserProfile 会被渲染在 User 的 <router-view> 中
                        path: 'profile',
                        component: UserProfile
                    }, 
                    {
                        // 当 /user/:id/posts 匹配成功
                        // UserPosts 会被渲染在 User 的 <router-view> 中
                        path: 'posts',
                        component: UserPosts
                    }
                ]    
           }
       ]

       你会发现，children 配置就是像 routes 配置一样的路由配置数组，所以呢，你可以嵌套多层路由。

#### route-link  及router.push router.replace router.go

    !!!  如果目的地和当前路由相同，只有参数发生了改变 (比如从一个用户资料到另一个 /users/1 -> /users/2)，你需要使用 beforeRouteUpdate 来响应这个变化 (比如抓取用户信息)。
    !!!  如果支持 Promise，router.push 或 router.replace 将返回一个 Promise
    !!!  router.replace与push的区别:它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录。

    route-link相当于 <a>  属性:to={}
        调用有命名的路由:
            <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
    router.push(location, onComplete?, onAbort?)  // 相当于route-link  且 提供history
            | 声明式                  | 编程式           |
            | ----------------------- | ---------------- |
            | <router-link :to="..."> | router.push(...) |
        举例:   router.push(location, onComplete?, onAbort?)
                router.push('home')
                router.push({ path: 'home' })
                //调用有命名的路由并传参数
                router.push({ name: 'user', params: { userId: '123' }})
                //相当于/register?plan=private
                router.push({ path: 'register', query: { plan: 'private' }})
        注意:   当path存在,params会被忽略,解决方法:
                router.push({ name: 'user', params: { userId }}) // -> /user/123  或:
                router.push({ path: `/user/${userId}` }) // -> /user/123
    router.replace(location, onComplete?, onAbort?)//相当于route-link  且 替换history
             | 声明式                          | 编程式              |
             | ------------------------------- | ------------------- |
             | <router-link :to="..." replace> | router.replace(...) |
    router.go(n)
        // 在浏览器记录中前进一步，等同于 history.forward()
        router.go(1)

        // 后退一步记录，等同于 history.back()
        router.go(-1)

        // 前进 3 步记录
        router.go(3)

        // 如果 history 记录不够用，那就默默地失败呗
        router.go(-100)
        router.go(100)

#### 命名视图(同一页面展示多个组件)

    class不存在则默认为default
    <router-view class="view one"></router-view>
    <router-view class="view two" name="a"></router-view>
    <router-view class="view three" name="b"></router-view>
    一个视图使用一个组件渲染，因此对于同个路由，多个视图就需要多个组件。确保正确使用 components 配置 (带上 s)：
     routes: [
    {
        path: '/',
            components: {
                default: Foo,
                a: Bar,
                b: Baz
            }
        }
    ]

#### 重定向和别名

    重定向:
    routes: [
    { path: '/a', redirect: '/b' }
    ]

    重定向的目标也可以是一个命名的路由：
    const router = new VueRouter({
    routes: [
        { path: '/a', redirect: { name: 'foo' }}
    ]
    })

    甚至是一个方法，动态返回重定向目标：
    const router = new VueRouter({
    routes: [
        { path: '/a', redirect: to => {
        // 方法接收 目标路由 作为参数
        // return 重定向的 字符串路径/路径对象
        }}
    ]
    })

    别名:
    “重定向”的意思是，当用户访问 /a时，URL 将会被替换成 /b，然后匹配路由为 /b，那么“别名”又是什么呢？

    /a 的别名是 /b，意味着，当用户访问 /b 时，URL 会保持为 /b，但是路由匹配则为 /a，就像用户访问 /a 一样。

    上面对应的路由配置为：

    const router = new VueRouter({
    routes: [
        { path: '/a', component: A, alias: '/b' }
    ]
    })
    “别名”的功能让你可以自由地将 UI 结构映射到任意的 URL，而不是受限于配置的嵌套路由结构。

#### 路由组件传参

    在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。

    使用 props 将组件和路由解耦：

    取代与 $route 的耦合

    const User = {
    template: '<div>User {{ $route.params.id }}</div>'
    }
    const router = new VueRouter({
    routes: [
        { path: '/user/:id', component: User }
    ]
    })
    通过 props 解耦

    const User = {
    props: ['id'],
    template: '<div>User {{ id }}</div>'
    }
    const router = new VueRouter({
    routes: [
        { path: '/user/:id', component: User, props: true },

        // 对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项：
        {
        path: '/user/:id',
        components: { default: User, sidebar: Sidebar },
        props: { default: true, sidebar: false }
        }
    ]
    })
    这样你便可以在任何地方使用该组件，使得该组件更易于重用和测试。

    #布尔模式
    如果 props 被设置为 true，route.params 将会被设置为组件属性。

    #对象模式
    如果 props 是一个对象，它会被按原样设置为组件属性。当 props 是静态的时候有用。

    const router = new VueRouter({
    routes: [
        { path: '/promotion/from-newsletter', component: Promotion, props: { newsletterPopup: false } }
    ]
    })
    #函数模式
    你可以创建一个函数返回 props。这样你便可以将参数转换成另一种类型，将静态值与基于路由的值结合等等。

    const router = new VueRouter({
    routes: [
        { path: '/search', component: SearchUser, props: (route) => ({ query: route.query.q }) }
    ]
    })
    URL /search?q=vue 会将 {query: 'vue'} 作为属性传递给 SearchUser 组件。

    请尽可能保持 props 函数为无状态的，因为它只会在路由发生变化时起作用。如果你需要状态来定义 props，请使用包装组件，这样 Vue 才可以对状态变化做出反应。

#### history模式

    vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。

    如果不想要很丑的 hash，我们可以用路由的 history 模式，这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。

    const router = new VueRouter({
    mode: 'history',
    routes: [...]
    })
    当你使用 history 模式时，URL 就像正常的 url，例如 http://yoursite.com/user/id，也好看！

    不过这种模式要玩好，还需要后台配置支持。因为我们的应用是个单页客户端应用，如果后台没有正确的配置，当用户在浏览器直接访问 http://oursite.com/user/id 就会返回 404，这就不好看了。

    所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。

    后台配置:
    location / {
        try_files $uri $uri/ /index.html;
    }
    #原生 Node.js
    const http = require('http')
    const fs = require('fs')
    const httpPort = 80

    http.createServer((req, res) => {
    fs.readFile('index.htm', 'utf-8', (err, content) => {
        if (err) {
        console.log('We cannot open "index.htm" file.')
        }

        res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
        })

        res.end(content)
    })
    }).listen(httpPort, () => {
    console.log('Server listening on: http://localhost:%s', httpPort)
    })


    警告:
    给个警告，因为这么做以后，你的服务器就不再返回 404 错误页面，因为对于所有路径都会返回 index.html 文件。为了避免这种情况，你应该在 Vue 应用里面覆盖所有的路由情况，然后在给出一个 404 页面。

    const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '*', component: NotFoundComponent }
    ]
    })
    或者，如果你使用 Node.js 服务器，你可以用服务端路由匹配到来的 URL，并在没有匹配到路由的时候返回 404，以实现回退。

#### 给路由加上过度效果

    <transition>
        <router-view></router-view>
    </transition>

    基于路由的动态过渡
    还可以基于当前路由与目标路由的变化关系，动态设置过渡效果：

    <!-- 使用动态的 transition name -->
    <transition :name="transitionName">
        <router-view></router-view>
    </transition>
    // 接着在父组件内
    // watch $route 决定使用哪种过渡
    watch: {
    '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
    }

#### 数据获取

    导航完成后获取数据
    当你使用这种方式时，我们会马上导航和渲染组件，然后在组件的 created 钩子中获取数据。这让我们有机会在数据获取期间展示一个 loading 状态，还可以在不同视图间展示不同的 loading 状态。

    假设我们有一个 Post 组件，需要基于 $route.params.id 获取文章数据：

    <template>
    <div class="post">
        <div v-if="loading" class="loading">
        Loading...
        </div>

        <div v-if="error" class="error">
        {{ error }}
        </div>

        <div v-if="post" class="content">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
        </div>
    </div>
    </template>
    export default {
    data () {
        return {
        loading: false,
        post: null,
        error: null
        }
    },
    created () {
        // 组件创建完后获取数据，
        // 此时 data 已经被 observed 了
        this.fetchData()
    },
    watch: {
        // 如果路由有变化，会再次执行该方法
        '$route': 'fetchData'
    },
    methods: {
        fetchData () {
        this.error = this.post = null
        this.loading = true
        // replace getPost with your data fetching util / API wrapper
        getPost(this.$route.params.id, (err, post) => {
            this.loading = false
            if (err) {
            this.error = err.toString()
            } else {
            this.post = post
            }
        })
        }
    }
    }
    #在导航完成前获取数据
    通过这种方式，我们在导航转入新的路由前获取数据。我们可以在接下来的组件的 beforeRouteEnter 守卫中获取数据，当数据获取成功后只调用 next 方法。

    export default {
    data () {
        return {
        post: null,
        error: null
        }
    },
    beforeRouteEnter (to, from, next) {
        getPost(to.params.id, (err, post) => {
        next(vm => vm.setData(err, post))
        })
    },
    // 路由改变前，组件就已经渲染完了
    // 逻辑稍稍不同
    beforeRouteUpdate (to, from, next) {
        this.post = null
        getPost(to.params.id, (err, post) => {
        this.setData(err, post)
        next()
        })
    },
    methods: {
        setData (err, post) {
        if (err) {
            this.error = err.toString()
        } else {
            this.post = post
        }
        }
    }
    }
    在为后面的视图获取数据时，用户会停留在当前的界面，因此建议在数据获取期间，显示一些进度条或者别的指示。如果数据获取失败，同样有必要展示一些全局的错误提醒。

#### 路由完成后的滚动条设置

    注意: 这个功能只在支持 history.pushState 的浏览器中可用。

    当创建一个 Router 实例，你可以提供一个 scrollBehavior 方法：

    const router = new VueRouter({
    routes: [...],
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
    }
    })
    scrollBehavior 方法接收 to 和 from 路由对象。第三个参数 savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。

    这个方法返回滚动位置的对象信息，长这样：

    { x: number, y: number }
    { selector: string, offset? : { x: number, y: number }} (offset 只在 2.6.0+ 支持)
    如果返回一个 falsy (译者注：falsy 不是 false，参考这里)的值，或者是一个空对象，那么不会发生滚动。

    举例：

    scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
    }
    对于所有路由导航，简单地让页面滚动到顶部。

    返回 savedPosition，在按下 后退/前进 按钮时，就会像浏览器的原生表现那样：

    scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
        return savedPosition
    } else {
        return { x: 0, y: 0 }
    }
    }
    如果你要模拟“滚动到锚点”的行为：

    scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
        return {
        selector: to.hash
        }
    }
    }
    我们还可以利用路由元信息更细颗粒度地控制滚动。查看完整例子请移步这里。

    #异步滚动
    2.8.0 新增

    你也可以返回一个 Promise 来得出预期的位置描述：

    scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve({ x: 0, y: 0 })
        }, 500)
    })
    }
    将其挂载到从页面级别的过渡组件的事件上，令其滚动行为和页面过渡一起良好运行是可能的。但是考虑到用例的多样性和复杂性，我们仅提供这个原始的接口，以支持不同用户场景的具体实现。

#### 路由懒加载

    当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。

    结合 Vue 的异步组件和 Webpack 的代码分割功能，轻松实现路由组件的懒加载。

    首先，可以将异步组件定义为返回一个 Promise 的工厂函数 (该函数返回的 Promise 应该 resolve 组件本身)：

    const Foo = () => Promise.resolve({ /* 组件定义对象 */ })
    第二，在 Webpack 2 中，我们可以使用动态 import语法来定义代码分块点 (split point)：

    import('./Foo.vue') // 返回 Promise
    注意

    如果您使用的是 Babel，你将需要添加 syntax-dynamic-import 插件，才能使 Babel 可以正确地解析语法。

    结合这两者，这就是如何定义一个能够被 Webpack 自动代码分割的异步组件。

    const Foo = () => import('./Foo.vue')
    在路由配置中什么都不需要改变，只需要像往常一样使用 Foo：

    const router = new VueRouter({
    routes: [
        { path: '/foo', component: Foo }
    ]
    })
    #把组件按组分块
    有时候我们想把某个路由下的所有组件都打包在同个异步块 (chunk) 中。只需要使用 命名 chunk，一个特殊的注释语法来提供 chunk name (需要 Webpack > 2.4)。

    const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
    const Bar = () => import(/* webpackChunkName: "group-foo" */ './Bar.vue')
    const Baz = () => import(/* webpackChunkName: "group-foo" */ './Baz.vue')
    Webpack 会将任何一个异步模块与相同的块名称组合到相同的异步块中。

### 状态管理

### 服务端渲染

### 安全

## 12工具

### 单文件组件

### 单元测试

### TS支持

### 生产环境部署

## 13响应式原理
