# nuxt

## 使用静态文件

    如果你需要引入 assets 或者 static 目录, 使用 ~/assets/your_image.png 和 ~/static/your_image.png方式。
    <!-- 引用 static 目录下的图片 -->
    <img src="/my-image.png"/>

    <!-- 引用 assets 目录下经过 webpack 构建处理后的图片 -->
    <img src="~/assets/my-image-2.png"/>

## 配置css

    module.exports = {
        css: [
            // 直接加载一个 Node.js 模块。（在这里它是一个 Sass 文件）
            'bulma',
            // 项目里要用的 CSS 文件
            '@/assets/css/main.css',
            // 项目里要使用的 SCSS 文件
            '@/assets/css/main.scss'
        ]
        }