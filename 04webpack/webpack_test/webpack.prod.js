/* jshint  esversion: 6*/
//默认的配置名字webpack.config.js
const path = require('path');
const MiniCssExtactPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const merge=require('webpack-merge');
const common=require('./webpack.common');


let prodConfig = {
    mode: 'production', //模式 production or development
    output: { //输出文件名
        filename: 'main.[hash].js', //文件名
        path: path.resolve(__dirname, './dist') //文件绝对路径
    },
    module: { //引入模块使用规则
        // noParse:/jquery|lodash/,//不进行处理 正则
        rules: [{
                test: /\.(le|c)ss$/, //css loader, //条件可以是正则 函数 条件数组 对象
                /*include/exclude/and/or/not:[path.resolve(__dirname,'app/styles'),...]*/
                use: [
                    MiniCssExtactPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    }, //sourceMap:方便找到样式在源文件的位置,方便修改
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: 'postcss',
                            plugins: loader => [
                                autoprefixer({ //添加前缀
                                    overrideBrowserslist: ['>0.15% in CN'] //浏览器范围
                                })
                            ]
                        }
                    },
                    {
                        loader: "less-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ] //先css-loader,后style-loader

            }
        ]
    },
    plugins: [
        new MiniCssExtactPlugin({
            filename: '[name][hash].css', //设置最终输出的文件名
            chunkFilename: '[id][hash].css'
        })
    ],
    optimization: {

        minimizer: [
            //css压缩插件
            new OptimizeCssAssetsPlugin({}),
            //js压缩插件
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            })
        ],
    }
};

module.exports=merge(common,prodConfig);