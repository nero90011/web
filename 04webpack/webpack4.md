## 安装
npm i -D webpack
npm i -D webpack-cli
npm i lodash -P
dependencies:开发依赖
devDependencies:生产依赖

## 构建目录
dist
src
    index.js
    style
    data
package.json
webpack.config.js

## webpack.config.js 配置
//默认的配置名字 webpack.config.js
const path=require('path');
module.exports={
entry:'./src/index.js',
mode:'development',
output:{
filename:'main.js',
path:path.resolve(\_\_dirname,'dist')
}
}
注意:.resolve:将相对路径转成绝对路径 
##命令
npx webpack
webpack
## css 到js
npm i -D style-loader css-loader

module:{//引入模块使用规则
    rules:[{
        test: /\.css$/,//css loader,
        use: ["style-loader","css-loader"]
    }]
}

##less 到js
1.
npm i -D less-loader node-less less
2.
rules:[{
            test: /\.(le|c)ss$/,//css loader, //条件可以是正则 函数 条件数组 对象
            /*include/exclude/and/or/not:[path.resolve(__dirname,'app/styles'),...]*/
            use: ["style-loader","css-loader","less-loader"]//先css-loader,后style-loader

}]
3.编写less文件并引入文件
import './style/test.less';
4.npx webpack
#PostCSS处理loader:
简介:postcss是一个css的预处理工具,帮助我们给css记住行添加前缀,校验格式,提前使用css新特性,实现css模块化,防止css样式冲突
1.
npm i -D postcss-loader
npm i autoprefixer -dev
npm i postcss-cssnext -dev//css4语法
npm i precss -dev 类似scss语法
npm i postcss-import -dev //import css文件让webpack监听并编译
2.
{
    loader: "postcss-loader",
    options: {
        ident: "postcss",
        sourceMap: true, //sourceMap:方便找到样式在源文件的位置,方便修改
        plugins: (loader) => [require('autoprefixer')({ //添加前缀
            browsers: ['> 0.15% in CN']//浏览器范围
        })]
    }
},
#样式表 单独文件 版本号
1.npm i -dev mini-css-extract-plugin
2.新建webpack.product.config.js,并设置,详见文件
3.npx webpack --config path//设置config文件位置
    或者:
    package.json中: "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "npx webpack",
    "dist":"npx webpack --config webpack.product.config.js"
  },

  然后直接输入 npm run dist 就ok
#样式表 压缩
1.npm i -D optimize-css-assets-webpack-plugin
2.配置webpack.product.config.js
   optimization:{//配置css压缩
        minimizer:[new OptimizeCssAssetsPlugin({})]
    }
3.npm run dist
#js 压缩  还未支持es6
0.前提: mode:'production'
1.npm i -D uglifyjs-webpack-plugin
2.
optimization:{   
        minimizer:[
            //css压缩插件
            new OptimizeCssAssetsPlugin({}),
            //js压缩插件
            new UglifyJsPlugin({
                cache:true,
                parallel:true,
                sourceMap:true
            })
        ],
}

#html注入jscss文件并压缩 解决cssjs文件名字哈希变化问题
1.npm install -dev html-webpack-plugin
2.配置文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
new HtmlWebpackPlugin({
      title: 'AICODER 全栈线下实习', // 默认值：Webpack App
      filename: 'main.html', // 默认值： 'index.html'
      template: path.resolve(__dirname, 'src/index.html'),
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeAttributeQuotes: true // 移除属性的引号
      }
    })
#每次构建前清理dist目录 防止上次生成的无用文件
1.npm install clean-webpack-plugin -dev
2.
/ const { CleanWebpackPlugin } = require('clean-webpack-plugin');
    plugins: [
/     new CleanWebpackPlugin()//默认清理output下的指定path
#图片压缩与优化
1.npm install --save-dev file-loader处理文件的导入  退出历史舞台
2.
 module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
/       {
/         test: /\.(png|svg|jpg|gif)$/,
/         use: [
/           'file-loader'
/         ]
/       }
      ]
    }
  };
3.npm install image-webpack-loader@4.3.1 -dev对图片进行压缩和优化
4.
{
          test: /\.(png|svg|jpg|gif|jpeg|ico)$/,
          use: [
            'file-loader',
/           {
/             loader: 'image-webpack-loader',
/             options: {
/               mozjpeg: {
/                 progressive: true,
/                 quality: 65
/               },
/               optipng: {
/                 enabled: false,
/               },
/               pngquant: {
/                 quality: '65-90',
/                 speed: 4
/               },
/               gifsicle: {
/                 interlaced: false,
/               },
/               webp: {
/                 quality: 75
/               }
/             }
/           },
5.npm install -dev url-loader   url-loader功能类似于 file-loader，可以把 url 地址对应的文件，打包成 base64 的 DataURL，提高访问的效率。
6.
 module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif|jpeg|ico|woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader', // 根据图片大小，把图片优化成base64
            options: {
              limit: 10000
            }
          },
          {
            loader: 'image-webpack-loader', // 先进行图片优化
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    ]
  }
7.字体处理
/       {
/         test: /\.(woff|woff2|eot|ttf|otf)$/,
/         use: [
/           'file-loader'
/         ]
/       }
##开发辅助 合并webpack配置文件
1.npm install -dev webpack-merge
2.建立:
    webpack.common.js
    webpack.dev.js
    webpack.prod.js
3.梳理功能
4.相互import
5.更改package.json的命令
6.dev中设置:
    devtool:'inline-source-map', 开启源码追踪
##热部署 监控文件编码 自动编译使用观察模式
npx webpack --watch
"watch":"npx webpack --watch --config webpack.dev.js"
##热更新 无需刷新浏览器 代理配置
1.npm i -dev webpack-dev-server //快,提供服务器,部署到内存中
2.dev中配置:
const webpack=require('webpack');
devServer: {
  clientLogLevel: 'warning', // 可能的值有 none, error, warning 或者 info（默认值)
  hot: true,  // 启用 webpack 的模块热替换特性, 这个需要配合： webpack.HotModuleReplacementPlugin插件
  contentBase:  path.join(__dirname, "dist"), // 告诉服务器从哪里提供内容， 默认情况下，将使用当前工作目录作为提供内容的目录
  compress: true, // 一切服务都启用gzip 压缩
  host: '0.0.0.0', // 指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问 0.0.0.0
  port: 8080, // 端口
  open: true, // 是否打开浏览器
  overlay: {  // 出现错误或者警告的时候，是否覆盖页面线上错误消息。
    warnings: true,
    errors: true
  },
  publicPath: '/', // 此路径下的打包文件可在浏览器中访问。
  proxy: {  // 设置代理
    "/api": {  // 访问api开头的请求，会跳转到  下面的target配置
      target: "http://192.168.0.102:8080",
      pathRewrite: {"^/api" : "/mockjsdata/5/api"}
    }
  },
  quiet: true, // necessary for FriendlyErrorsPlugin. 启用 quiet 后，除了初始启动信息之外的任何内容都不会被打印到控制台。这也意味着来自 webpack 的错误或警告在控制台不可见。
  watchOptions: { // 监视文件相关的控制选项
    poll: true,   // webpack 使用文件系统(file system)获取文件改动的通知。在某些情况下，不会正常工作。例如，当使用 Network File System (NFS) 时。Vagrant 也有很多问题。在这些情况下，请使用轮询. poll: true。当然 poll也可以设置成毫秒数，比如：  poll: 1000
    ignored: /node_modules/, // 忽略监控的文件夹，正则
    aggregateTimeout: 300 // 默认值，当第一个文件更改，会在重新构建前增加延迟
  }
}
plugins: [
    new webpack.NamedModulesPlugin(),  // 更容易查看(patch)的依赖
    new webpack.HotModuleReplacementPlugin()  // 替换插件
]
3.npx webpack-dev-server --config webpack.dev.js
"start":"npx webpack-dev-server --config webpack.dev.js"
##js启用babel转码
1.回退低版本
npm install -D babel-loader@7 babel-core babel-preset-env
更新到最高版本:
npm install -D babel-loader @babel/core @babel/preset-env webpack
2.common配置:
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,  // 加快编译速度，不包含node_modules文件夹内
      use: {
        loader: 'babel-loader'
      }
    }
  ]
}
3..babelrc文件如下：
{
    "presets": ["@babel/preset-env",]
}
##babel优化 自动优化重复引入公共方法的问题。
1.npm install --save-dev @babel/plugin-transform-runtime
npm install --save @babel/runtime
2..babelrc
"plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "helpers": true,
        "corejs": false,
        "regenerator": true,
        "absoluteRuntime": "babel-runtime"
      }
    ]
  ]
##解析 resolve
1.创建 import 或 require 的别名，来确保模块引入变得更简单。例如，一些位于 src/ 文件夹下的常用模块：
2.common中:
resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/')
        },
        extensions:[".js",".vue",".json"],//默认js json
},
3.//使用 解析
import {a,b,c} from '@/b';
##外部扩展
externals 配置选项提供了「从输出的 bundle 中排除依赖」的方法。 文档
例如，从 CDN 引入 jQuery，而不是把它打包：
1.
<script
  src="https://code.jquery.com/jquery-3.1.0.js"
  integrity="sha256-slogkvB1K3VOkzAI8QITxV3VzpOnkeNVsKvtkYLMjfk="
  crossorigin="anonymous">
</script>
2.externals: {
 jquery: 'jQuery'
},
3.
//外部依赖
import $ from 'jquery';
##打包分析工具 开发环境使用
1.npm i -dev webpack-bundle-analyzer
2.dev 中
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
}
3.分析发现lodash太大,进行优化成外部依赖
externals: {//外部扩展包 不会编译到dist
        jquery: 'jQuery',
        loadsh:'_'
    },
import _ from '_'; // 'lodash'-->'_'
