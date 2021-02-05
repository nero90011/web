module.exports = {
  // 所有 webpack-dev-server 的选项都支持。
  devServer: {
    host: "localhost",
    // port: 9001, // 端口号
    https: false,
    open: true, //配置自动启动浏览器
    disableHostCheck: true, //不禁止host检查 !!!!

    // 配置多个代理
    // proxy: {
    //   "/api": {
    //     target: "https://www.cnblogs.com", // 本地模拟数据服务器
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "^/api": "" // 去掉接口地址中的api字符串
    //     }
    //   },
    //   "/foo": {
    //     target: "http://localhost:8080", // 本地模拟数据服务器
    //     changeOrigin: true,
    //     pathRewrite: {
    //       "^/foo": "" // 去掉接口地址中的foo字符串
    //     }
    //   }
    // }
  }
};
