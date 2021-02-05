# color

    开箱即用，您可以通过 sass 和 javascript 访问 Material Design spec 中的所有颜色。 这些值可通过 color class 系统在样式表，组件文件和实际组件中使用。

    使用: class="red"

## 色彩包

    引入色彩包
    // src/plugins/vuetify.js
    import Vue from 'vue'
    import Vuetify from 'vuetify/lib'

    import colors from 'vuetify/lib/util/colors'

    Vue.use(Vuetify)

    export default new Vuetify({
    theme: {
        themes: {
        light: {
            primary: colors.red.darken1, // #E53935
            secondary: colors.red.lighten4, // #FFCDD2
            accent: colors.indigo.base, // #3F51B5
        },
        },
    },
    })

## sass色彩包

    虽然方便，但是色彩包增加了约 ~30kb 的大小的输出文件。有些项目可能只需要 Vuetify 在运行时引导创建的那些默认提供的类。要禁用此功能，你将不得不 手动 导入并构建 sass 主文件。这将需要 Sass loader 和应该 .sass/.scss 文件条目。

    // src/sass/main.scss
    $color-pack: false;
    @import '~vuetify/src/styles/main.sass';

    你创建的 main.sass 文件将需要包含在您的项目中。
    // src/index.js
    import './src/sass/main.scss'
    // OR
    require('./src/sass/main.scss')

    这也可以在您的 App.vue 主文件中完成。请记住，根据您的项目设置，这 将 增加每次更新输入文件时的构建时间，因为 sass 文件将会被重新生成。
    <style lang="sass">
    $color-pack: false;
    @import '~vuetify/src/styles/main.sass';
    </style>

## 颜色类别 red or red-text

    不加text则为背景颜色

## 色彩与亮度暗度值

    通过查询material色彩表

    darken暗度  lighten亮度
    class="red--text text--lighten-1"
