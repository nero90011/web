module.exports = {
  devServer: {
    port: 3001,
    https: false,
    open: true,
    // 不检查host
    disableHostCheck: true,
    proxy:{
        '/ajax':{
            target:'http://m.maoyan.com',
            changeOrigin:true
        }
    }
  },
  transpileDependencies: ["vuetify"]
  // 修改prefetch：
  //   chainWebpack: config => {
  //     // 移除 prefetch 插件
  //     config.plugins.delete("prefetch");
  //     // 或者
  //     // 修改prefetch：
  //     // config.plugin('prefetch').tap(options => {
  //     //     options[0].fileBlacklist = options[0].fileBlacklist || []
  //     //     options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/)
  //     //     return options
  //     // })
  //   }
  //vuetify引入sass
  //   css: {
  //     loaderOptions: {
  //       sass: {
  //         data: `@import "~@/sass/main.scss"`,
  //       },
  //     },
  //   },
  //   chainWebpack: config => {
  //     ["vue-modules", "vue", "normal-modules", "normal"].forEach((match) => {
  //       config.module.rule('scss').oneOf(match).use('sass-loader')
  //         .tap(opt => Object.assign(opt, { data: `@import '~@/sass/main.scss';` }))
  //     })
  //   }
};
