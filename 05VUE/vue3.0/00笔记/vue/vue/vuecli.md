# vuecli

    - [vuecli](#vuecli)

- [vuecli](#vuecli)
  - [提前须知](#提前须知)
  - [安装](#安装)
  - [创建项目](#创建项目)
    - [创建单页项目](#创建单页项目)
    - [创建多页项目](#创建多页项目)
    - [preset.json 从本地/远程配置文件 直接生成vue项目](#presetjson-从本地远程配置文件-直接生成vue项目)
  - [运行构建及查看webpack配置 vue-cli-service](#运行构建及查看webpack配置-vue-cli-service)
  - [安装插件](#安装插件)
    - [现有项目中安装插件](#现有项目中安装插件)
    - [现有项目中使用本地插件](#现有项目中使用本地插件)
  - [快速原型开发 vue serve/build](#快速原型开发-vue-servebuild)
  - [html和静态资源](#html和静态资源)
  - [vue.config.js 具体配置](#vueconfigjs-具体配置)

## 提前须知

    vue-cli 3.0以上的版本内置了webpack无需知道webpack的配置
    如果需要更改,在vue.config.js中更改


    提示
        vue add 的设计意图是为了安装和调用 Vue CLI 插件。这不意味着替换掉普通的 npm 包。对于这些普通的 npm 包，你仍然需要选用包管理器。

    警告
        我们推荐在运行 vue add 之前将项目的最新状态提交，因为该命令可能调用插件的文件生成器并很有可能更改你现有的文件。

## 安装

    npm install -g @vue/cli
    npm install -g @vue/cli-service-global
    npm install -g @vue/cli-init

## 创建项目

### 创建单页项目

    cd  文件夹
    vue create 项目根目录名成 或者 vue init webpack my-project
            -p, --preset <presetName>       忽略提示符并使用已保存的或远程的预设选项
            -d, --default                   忽略提示符并使用默认预设选项
            -i, --inlinePreset <json>       忽略提示符并使用内联的 JSON 字符串预设选项
            -m, --packageManager <command>  在安装依赖时使用指定的 npm 客户端
            -r, --registry <url>            在安装依赖时使用指定的 npm registry
            -g, --git [message]             强制 / 跳过 git 初始化，并可选的指定初始化提交信息
            -n, --no-git                    跳过 git 初始化
            -f, --force                     覆写目标目录可能存在的配置
            -c, --clone                     使用 git clone 获取远程预设选项
            -x, --proxy                     使用指定的代理创建项目
            -b, --bare                      创建项目时省略默认组件中的新手指导信息
            -h, --help                      输出使用帮助信息

### 创建多页项目

### preset.json 从本地/远程配置文件 直接生成vue项目

    一个 Vue CLI preset 是一个包含创建新项目所需预定义选项和插件的 JSON 对象，让用户无需在命令提示中选择它们。
    {
        "useConfigFiles": true,
        "cssPreprocessor": "sass",
        "plugins": {
            "@vue/cli-plugin-babel": {
                "version": "^3.0.0",
                // ... 该插件的其它选项
            },
            "@vue/cli-plugin-eslint": {
            "config": "airbnb",
            "lintOn": ["save", "commit"]
            },
            "@vue/cli-plugin-router": {},
            "@vue/cli-plugin-vuex": {}
        },
        "configs": {
            "vue": {...},
            "postcss": {...},
            "eslintConfig": {...},
            "jest": {...}
        },
    }
    远程:
    # 从 GitHub repo 使用 preset
    vue create --preset username/repo my-project
    本地:
    # ./my-preset 应当是一个包含 preset.json 的文件夹
    vue create --preset ./my-preset my-project
    # 或者，直接使用当前工作目录下的 json 文件：
    vue create --preset my-preset.json my-project

## 运行构建及查看webpack配置 vue-cli-service

    1. start
    用法：vue-cli-service serve [options] [entry]
    目的:vue-cli-service serve 命令会启动一个开发服务器 (基于 webpack-dev-server) 并附带开箱即用的模块热重  
            载 (Hot-Module-Replacement)。除了通过命令行参数，你也可以使用 vue.config.js 里的 devServer 字段配置开发服务器。
    选项：

    --open    在服务器启动时打开浏览器
    --copy    在服务器启动时将 URL 复制到剪切版
    --mode    指定环境模式 (默认值：development)
    --host    指定 host (默认值：0.0.0.0)
    --port    指定 port (默认值：8080)
    --https   使用 https (默认值：false)

    2. build
    用法：vue-cli-service build [options] [entry|pattern]
    目的:会在 dist/ 目录产生一个可用于生产环境的包，带有 JS/CSS/HTML 的压缩，和为更好的缓存而做的自动的 
            vendor chunk splitting。它的 chunk manifest 会内联在 HTML 里。
    选项：

    --mode        指定环境模式 (默认值：production)
    --dest        指定输出目录 (默认值：dist)
    --modern      为现代浏览器交付原生支持的 ES2015 代码，并生成一个兼容老浏览器的包用来自动回退。
    --target      app | lib | wc | wc-async (默认值：app)
    --name        库或 Web Components 模式下的名字 (默认值：package.json 中的 "name" 字段或入口文件名)
    --no-clean    在构建项目之前不清除目标目录
    --report      生成 report.html 以帮助分析包内容
    --report-json 生成 report.json 以帮助分析包内容
    --watch       监听文件变化

    3.inspect 查看webpack配置相关
    用法：vue-cli-service inspect [options] [...paths]
    选项：
        --mode    指定环境模式 (默认值：development)

## 安装插件

### 现有项目中安装插件

    进入项目根目录,然后:
    使用vue ui  或者 vue add 插件名称(都是以@vue/cli-plugin- 开头)

### 现有项目中使用本地插件

    在 package.json 文件中使用 vuePlugins.service 选项：
    {
    "vuePlugins": {
        "ui": ["my-ui.js"]
    }
    }

## 快速原型开发 vue serve/build

    你可以使用 vue serve 和 vue build 命令对单个 *.vue 文件进行快速原型开发，不过这需要先额外安装一个全局的扩展：如果需要，你还可以提供一个 index.html、package.json、安装并使用本地依赖、甚至通过相应的配置文件配置 Babel、PostCSS 和 ESLint

    1.在开发环境模式下零配置为 .js 或 .vue 文件启动一个服务器
    Options:
    -o, --open  打开浏览器
    -c, --copy  将本地 URL 复制到剪切板
    -h, --help  输出用法信息

    2.在生产环境模式下零配置构建一个 .js 或 .vue 文件
    Options:
    -t, --target <target>  构建目标 (app | lib | wc | wc-async, 默认值：app)
    -n, --name <name>      库的名字或 Web Components 组件的名字 (默认值：入口文件名)
    -d, --dest <dir>       输出目录 (默认值：dist)
    -h, --help             输出用法信息

## html和静态资源

    <link rel="preload">用来指定页面加载后很快会被用到的资源，所以在页面加载的过程中，我们希望在浏览器开始主体渲染之前尽早 preload。

    <link rel="prefetch"> 是一种 resource hint，用来告诉浏览器在页面加载完成后，利用空闲时间提前获取用户未来可能会访问的内容。

## vue.config.js 具体配置

    vue.config.js 是一个可选的配置文件，如果项目的 (和 package.json 同级的) 根目录中存在这个文件，那么它会被 @vue/cli-service 自动加载。你也可以使用 package.json 中的 vue 字段，但是注意这种写法需要你严格遵照 JSON 的格式来写。

    // vue.config.js
    module.exports = {
        // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 https://www.my-app.com/。
        // 如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/。
        publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
        // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。
        // 注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
        // 默认值'dist'
        outputDir: "dist",
        // 放置生成的静态资源 (js、css、img、fonts) 的目录(相对于outputDir目录)。
        // 默认值''
        assetsDir: "assets",
        //指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
        // 默认值'index.html'
        indexPath: "index.html",
        // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。
        filenameHashing: false,
        // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
        lintOnSave: process.env.NODE_ENV !== "production",

        //是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
        runtimeCompiler: false,

        // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
        productionSourceMap: false,

        // 所有 webpack-dev-server 的选项都支持。
        devServer: {
        host: "localhost",
        port: 9001, // 端口号
        https: false,
        open: true, //配置自动启动浏览器
        disableHostCheck: true, //不禁止host检查 !!!!


        // 配置多个代理
        proxy: {
            "/api": {
                target: "https://www.cnblogs.com", // 本地模拟数据服务器
                changeOrigin: true,
                pathRewrite: {
                "^/api": "" // 去掉接口地址中的api字符串
                }
            },
            "/foo": {
                target: "http://localhost:8080", // 本地模拟数据服务器
                changeOrigin: true,
                pathRewrite: {
                "^/foo": "" // 去掉接口地址中的foo字符串
                }
            }
        }

    }
