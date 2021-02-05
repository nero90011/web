# 头像

    组件通常用于显示用户个人资料的圆形图片。该组件将允许你动态调整大小并添加响应图像，图标和文本的边框半径。tile 变量可用来显示方形头像。

## 参数

    size
    Type
    number | string
    Default
    48
    Description
    设置组件的高度和宽度.

    Name
    tile
    Type
    boolean
    Default
    false
    Description
    删除组件的 border-radius。

    Name
    width
    Type
    number | string
    Default
    undefined
    Description
    设定组件的宽度。

## 插槽 组件配合

    v-avatar 的默认插槽将接受 v-icon 组件、图像或文本。混合并匹配这些元素来创建一个独一无二的东西。
    <v-avatar color="indigo">
      <v-icon dark>mdi-account-circle</v-icon>
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
      <span class="white--text headline">CJ</span>
    </v-avatar>
