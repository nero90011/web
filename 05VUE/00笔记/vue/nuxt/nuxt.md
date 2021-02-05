# nuxt

## 使用原因

    解决首屏慢 seo问题 第一屏从后台拿取到后转换为前端主导

## 安装

    create nuxt-app <项目名>
    npm i node-sass sass-loader sass --save-dev
    npm i vuex-class vue-property-decorator vue-class-component -P
    npm i pug pug-plain-loader -D
    npm i @nuxt/typescript-runtime -P

    npm i ts-loader vue-loader -D  //防止类型监听乱报错

    // 登录检测
    npm i @nuxtjs/auth @types/nuxtjs__auth -P
    // pwa
    @nuxtjs/pwa -P

## 项目结构

    layouts : default.vue  相当于App.vue 是根结构
    pages  : 相当于view + router
    plugins
    server
    static
    store

## store

### fetch

## 作用域

    process.server:boolean // 当前执行的函数是否是在server端执行是 true 否false

## 生命周期函数

    如果将方法绑定到mounted中 会影响seo
    所以应该在asyncData中:
        在当前页面刷新,服务端执行此函数
        从其他页面跳转过来,客户端执行此函数
        必须有return promise对象

    asyncData({params,err}){
        // params : 路由信息 动态路由传过来的值
        return axios.get('...').then((res)=>{
            return ...
        })
    }

    asyncData(data){
        return axios({
            url:process.server?"http://m.maoyan.com":"/ajax/..."
        }).then(res=>{
            return{
                datalist:res.data.movielist
            }
        })
    }

## 视图

    默认视图是layouts : default.vue
    某个组件中想要使用其他根组件的方式:
        im ...
        export default{
            layout:'...'
        }
    或者使用函数:
        //设置视图
        layout(context){
            return 'NobottomNav'
        }

## 路由

    nuxt会根据pages的文件结构自动生成router  大小写!
    nuxt 相当于router-view
    nuxt-link 相当于 router-link

### 路由重定向

    在nuxt.config.js中设置
    router: {
        extendRoutes(routers) {
        routers.push({
            path: "/",
            redirect:'/Film'
        });
        }
    }

### 路由中间件

    在middleware中新建,然后在config的route中注册

### 路由动态

    传参数与原来相同
    接受参数需要建立同名文件夹并新建 _参数.vue
        删除原来的组件并将原来组件的内容复制到 _参数.vue文件中
        接收:console.log(this.$route.params.id)

## server

### 反向代理

    npm i --save @nuxtjs/proxy
    nuxt.config.js中注册此模块
    modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/proxy"
    ],
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {
        proxy:true
    },
    proxy:{
        '/ajax':{
            target:"http://m.maoyan.com",
            changeOrigin:true
        }
    },

    然后重启
