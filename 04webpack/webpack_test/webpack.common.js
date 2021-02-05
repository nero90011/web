/* jshint  esversion: 6*/
//公共配置
const path = require('path');
const MiniCssExtactPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js', //入口
    resolve: {//解析
        alias: {
            '@': path.resolve(__dirname, 'src/')
        },
        extensions: [".js", ".vue", ".json"], //默认js json
    },
    externals: {//外部扩展包 不会编译到dist
        jquery: 'jQuery',
        // loadsh:'_'
    },
    module: { //引入模块使用规则
        // noParse:/jquery|lodash/,//不进行处理 正则
        rules: [
            //启用babel转码
            // 'transform-runtime' 插件告诉 babel 要引用 runtime 来代替注入。
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/, // 加快编译速度，不包含node_modules文件夹内
                use: {
                    loader: 'babel-loader'
                    /*                     options: {
                                            cacheDirectory: true//加快编译
                                        } */
                }
            },
            { //图片字体处理
                test: /\.(png|svg|jpg|gif|jpeg|ico|woff|woff2|eot|ttf|otf)$/,
                include: [path.resolve(__dirname, 'src/')],
                use: [{ //替换file-loader,file-loader退出历史舞台
                        loader: 'url-loader', // 根据图片大小，把图片优化成base64
                        options: {
                            limit: 10000 //小于10kb,就转成base64,让浏览器少请求一次图片
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'html-webpack插件', // 默认值：Webpack App
            /**
             * npm run-s start时，会找不到文件，这是因为默认是index。html需要将mian.html改成index.html
             */
            filename: 'index.html', // 默认值： 'index.html'
            template: path.resolve(__dirname, 'src/index.html'),
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeAttributeQuotes: true // 移除属性的引号
            }
        }),
        new CleanWebpackPlugin()
    ]
};