# badge

## 属性

    Name
    dot
    Type
    boolean
    Default
    false
    Description
    减小徽章的大小并隐藏其内容

    Name
    icon
    Type
    string
    Default
    undefined
    Description
    指定徽章中使用的特定图标。

    Name
    inline
    Type
    boolean
    Default
    false
    Description
    将徽标移动到与包装元素内联。支持使用左道具。

    Name
    label
    Type
    string
    Default
    '$vuetify.badge'
    Description
    徽章使用的aria标签

    Name
    left
    Type
    boolean
    Default
    false
    Description
    将组件向左边对齐。

    Name
    light
    Type
    boolean
    Default
    false
    Description
    为组件设置浅色主题。

    Name
    mode
    Type
    string
    Default
    undefined
    Description
    设置转换模式（不应用于转换组）。你可以在 Vue 文档浏览更多 for transition modes。

    Name
    offset-x
    Type
    number | string
    Default
    undefined
    Description
    使徽章在X轴上偏移。

    Name
    offset-y
    Type
    number | string
    Default
    undefined
    Description
    使徽章在y轴上偏移。

    Name
    origin
    Type
    string
    Default
    undefined
    Description
    设置元素上的动画原点。您可以在 MDN 文档上浏览更多 for transition origin

    Name
    overlap
    Type
    boolean
    Default
    false
    Description
    与组件顶部的内容重叠。

    Name
    tile
    Type
    boolean
    Default
    false
    Description
    删除组件的 border-radius。

    Name
    transition
    Type
    string
    Default
    'scale-rotate-transition'
    Description
    设置组件转换。可以是一个 built in transitions 或者是自己自定义的。

    Name
    value
    Type
    any
    Default
    true
    Description
    控制组件可见还是隐藏。

## 举例

     <v-badge
          color="green"
          content="6"
        >
          Item Two
        </v-badge>