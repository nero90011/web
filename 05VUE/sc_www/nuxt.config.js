/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
const colors = require('vuetify/es5/util/colors').default;

// 配置服务器监听端口及域名
module.exports = {
    server: {
        port: 3002,
        host: '0.0.0.0' || process.env.HOST
    },
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate: '%s - ' + process.env.npm_package_name,
        title: process.env.npm_package_name || 'shop',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'shop',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     *  在 Nuxtjs 里配置全局的 CSS 文件、模块、库。 (每个页面都会被引入)
     */
    css: ['@/assets/wwwsctest.scss', '@/assets/variables.scss'],
    /*
     ** Plugins to load before mounting the App
     * 不支持ssr的系统，插件只在浏览器里使用，这种情况下下，你可以用 ssr: false ，使得插件只会在客户端运行。
     */
    plugins: [
        // 城市区域级级联查询
        { src: '~/plugins/vue-region', ssr: false }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        '@nuxt/typescript-build',
        '@nuxtjs/vuetify'
        // ['@nuxtjs/localforage', {
        //     /* module options  注释掉的都是默认值*/
        //     // driver:[localforage.INDEXEDDB, localforage.WEBSQL, localforage.LOCALSTORAGE],
        //     // 数据库名
        //     name:'wwwsctext',
        //     // size: 4980736,

        // }]
    ],
    /**
     * pwa
     */
    manifest: {
        name: 'shop',
        short_name: 'shop',
        description: '购物平台',
        background_color: '#2baf88',
        theme_color: '#2baf88',
        lang: 'zh',
        start_url: '/'
    },
    render: {
        http2: {
            push: true
        },
        static: {
            maxAge: '1y',
            setHeaders(res, path) {
                if (path.includes('sw.js')) {
                    res.setHeader('Cache-Control', `public, max-age=${15 * 60}`);
                }
            }
        },
        // resourceHints 提升页面加载性能与体验
        resourceHints: false
    },
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        '@nuxtjs/toast', // nuxt提醒插件
        '@nuxtjs/pwa'
    ],
    auth: {
        watchLoggedIn: true, // 默认true 用户将在登录/注销时重定向
        redirect: {
            login: '/auth/login', // 如果需要登录，用户将被重定向到此路径。
            logout: '/', // 如果注销后，当前路由受到保护，用户将被重定向到此路径。
            callback: '/auth/login', // 登录后，标识提供程序将用户重定向到此路径。（应将应用/客户端中配置的（或类似设置）与标识提供程序匹配）Allowed Callback URLs
            home: '/' // 登录后，用户将重定向到此路径。（将重写此路径）rewriteRedirects
        },
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url: '/api/auth/login',
                        method: 'post',
                        propertyName: 'token'
                    },
                    logout: { url: '/api/auth/logout', method: 'post' },
                    user: {
                        url: '/api/auth/user',
                        method: 'get',
                        propertyName: 'user'
                    }
                }
                // tokenRequired: true,
                // tokenType: 'bearer'
                // autoFetchUser: true
            }
        }
    },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        baseURL: 'http://api.sc.test'
        // baseURL: 'https://www.nero90011.xyz:3001'
        // proxy: true,
    },
    // proxy: {
    //     '/ajax': {
    //         target: 'http://m.maoyan.com',
    //         changeOrigin: true,
    //     },
    // },
    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        customVariables: ['~/assets/variables.scss', '~/assets/wwwsctest.scss'],
        theme: {
            dark: false,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },
    /*
     ** Build configuration
     * 如果插件位于node_modules并导出模块，需要将其添加到transpile构建选项：
     */
    build: {
        // 支持 nuxt-property-decorator
        babel: {
            plugins: [
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                ['@babel/plugin-proposal-class-properties', { loose: true }]
            ]
        },
        // extractCSS: { allChunks: true }, // 样式提取到单独的css样式文件中
        /*
         ** You can extend webpack config here
         */
        extend(config, { isClient }) {
            if (isClient) {
                // 不检查打包文件大小
                config.performance.hints = false;
            }
        },
        /* vue城市联动 */
        transpile: ['vue-region']
    },
    /**
     * @name: 路由重定向
     * @msg:
     * @Description:
     * @param {type}
     * @return:
     */
    router: {
        middleware: ['redirect'],
        extendRoutes(routers) {
            routers.push({
                path: '/',
                redirect: '/main'
            });
        }
    }
};
