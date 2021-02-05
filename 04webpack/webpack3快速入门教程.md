## webpack 快速入门教程

###1、了解 Webpack 相关
_ 什么是 webpack
_ Webpack 是一个模块打包器(bundler)。
_ 在 Webpack 看来, 前端的所有资源文件(js/json/css/img/less/...)都会作为模块处理
_ 它将根据模块的依赖关系进行静态分析，生成对应的静态资源
_ 理解 Loader
_ Webpack 本身只能加载 JS/JSON 模块，如果要加载其他类型的文件(模块)，就需要使用对应的 loader 进行转换/加载
_ Loader 本身也是运行在 node.js 环境中的 JavaScript 模块
_ 它本身是一个函数，接受源文件作为参数，返回转换的结果
_ loader 一般以 xxx-loader 的方式命名，xxx 代表了这个 loader 要做的转换功能，比如 json-loader。
_ 配置文件(默认)
_ webpack.config.js : 是一个 node 模块，返回一个 json 格式的配置信息对象
_ 插件
_ 插件件可以完成一些 loader 不能完成的功能。
_ 插件的使用一般是在 webpack 的配置信息 plugins 选项中指定。
_ CleanWebpackPlugin: 自动清除指定文件夹资源
_ HtmlWebpackPlugin: 自动生成 HTML 文件并 \* UglifyJSPlugin: 压缩 js 文件
###2、学习文档 :

- webpack 官网: http://webpack.github.io/
- webpack3 文档(英文): https://webpack.js.org/
- webpack3 文档(中文): https:doc.webpack-china.org/
  ###3、开启项目
- 初始化项目：
  - 生成 package.json 文件
  -
  ```
  {
    "name": "webpack_test",
    "version": "1.0.0"
  }
  ```
- 安装 webpack - npm install webpack -g //全局安装 - npm install webpack --save-dev //局部安装
  ###4、编译打包应用
- 创建入口 src/js/ : entry.js
  - document.write("entry.js is work");
- 创建主页面: dist/index.html
  - <script type="text/javascript" src="bundle.js"></script>
- 编译 js
  - webpack src/js/entry.js dist/bundle.js
- 查看页面效果
  ###5、添加 js/json 文件
  _ 创建第二个 js: src/js/math.js
  ```
  export function square(x) {
  return x _ x;
  }
    
   export function cube(x) {
  return x _ x _ x;
  }
  `* 创建json文件: src/json/data.json`
  {
  "name": "Tom",
  "age": 12
  }
  `* 更新入口js : entry.js`
  import {cube} from './math'
  import data from '../json/data.json'
  //注意 data 会自动被转换为原生的 js 对象或者数组
  document.write("entry.js is work <br/>");
  document.write(cube(2) + '<br/>');
  document.write(JSON.stringify(data) + '<br/>')
  `* 编译js:`
  webpack src/js/entry.js dist/bundle.js
  `* 查看页面效果 ###6、使用webpack配置文件 * 创建webpack.config.js`
  const path = require('path'); //path 内置的模块，用来设置路径。
    
   module.exports = {
  entry: './src/js/entry.js', // 入口文件
  output: { // 输出配置
  filename: 'bundle.js', // 输出文件名
  path: path.resolve(\_\_dirname, 'dist') //输出文件路径配置
  }
  };
  `* 配置npm命令: package.json`
  "scripts": {
  "build": "webpack"
  },
  `* 打包应用`
  npm run build
  ```
  ###7、打包 css 和图片文件
- 安装样式的 loader


    ```
    npm install css-loader style-loader --save-dev
    npm install file-loader url-loader --save-dev
    补充：url-loader是对象file-loader的上层封装，使用时需配合file-loader使用。
    ```

- 配置 loader
  ```
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  }
  ```
- 向应用中添加 2 张图片:

  - 小图: img/logo.png
  - 大图: img/big.jpg

- 创建样式文件: src/css/test.css
  ```
  body {
    background: url('../img/logo.jpg')
  }
  ```
- 更新入口 js : entry.js
  - import '../css/test.css'
- 添加 css 样式

       #box1{
        width: 300px;
        height: 300px;
        background-image: url("../image/logo.jpg");
      }
      #box2{
        width: 300px;
        height: 300px;
        background-image: url("../image/big.jpg");
      }

- index.html 添加元素

      <div id="box1"></div>
      <div id="box2"></div>

- 执行打包命令：
  ```
  npm run build
  ```
- 发现问题：
  _ 大图无法打包到 entry.js 文件中，index.html 不在生成资源目录下。
  _ 页面加载图片会在所在目录位置查找，导致页面加载图片时候大图路径无法找到
  _ 解决办法：
  _ 使用 publicPath : 'dist/js/' //设置为 index.html 提供资源的路径,设置完后找所有的资源都会去当前目录下找。
  _ 将 index.html 放在 dist/js/也可以解决。
  ###8、自动编译打包
  _ 利用 webpack 开发服务器工具: webpack-dev-server
  _ 下载 - npm install --save-dev webpack-dev-server
  _ webpack 配置
  devServer: {
  contentBase: './dist'
  },
  _ package 配置 - "start": "webpack-dev-server --open"
  _ 编译打包应用并运行 - npm start
  ###9、使用 webpack 插件
- 常用的插件

  - 使用 html-webpack-plugin 根据模板 html 生成引入 script 的页面
  - 使用 clean-webpack-plugin 清除 dist 文件夹

- 下载
  ```
  npm install --save-dev  html-webpack-plugin clean-webpack-plugin
  ```
- webpack 配置

      const HtmlWebpackPlugin = require('html-webpack-plugin'); //自动生成html文件的插件

  const CleanWebpackPlugin = require('clean-webpack-plugin'); //清除之前打包的文件  
   plugins: [
  new HtmlWebpackPlugin({template: './index.html'}),
  new CleanWebpackPlugin(['dist']),
  ]

- 创建页面: index.html

      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>webpack test</title>
      </head>
      <body>
      <div id="app"></div>
      <!--打包文件将自动通过script标签注入到此处-->
      </body>
      </html>

- 打包运行项目
  ```
  npm run build
  npm start
  ```
