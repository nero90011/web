# padding&marging  

    将 margin 或者 padding 应用于一个元素，范围在 0 到 12 之间。每个尺寸增量都设计成与常用 Material Design 间距对齐。这些类
    可以使用 
    {property}{direction}-{size} 这个格式来应用。

    class="m[nx]/[x]-10"

## 常用: 水平居中

    mx-auto

## 和媒体选择器一起使用

    辅助类在给定的断点处应用边距或填充。可以使用以下格式应用这些类: {property}{direction}-{breakpoint}-{size}. 这不适用于 xs 据推测; e.g. ma-xs-2 等于 ma-2

## 占位符 property 用来设置间距的类型

    m - 对应 margin
    p - 对应 padding
    占位符 direction 指定属性所应用到的方向：

## direction

    t - 应用 margin-top 和 padding-top 的间距。
    b - 应用 margin-bottom 和 padding-bottom 的间距。
    l - 适用 margin-left 和 padding-left 的间距。
    r - 应用 margin-right 和 padding-right 的间距。
    s - 应用 margin-left/padding-left (LTR mode) 和 margin-right/padding-right (RTL mode)
    e - 应用 margin-right/padding-right (LTR model) 和 margin-left/padding-left (RTL model)
    x - 同时对应*-left和*-right属性
    y - 同时对应*-top和*-bottom属性
    a - 在所有方向应用该属性的间距。
    size 控制在 4px 间隔中的属性增量：

## 组合:pt px mx

## size

    0 - 消除所有 margin 或者 padding 并设置为 0
    1 - 设置 margin 或者 padding 到 4px
    2 - 设置 margin 或者 padding 到 8px
    3 - 设置 margin 或者 padding 到 12px
    4 - 设置 margin 或者 padding 到 16px
    5 - 设置 margin 或者 padding 到 20px
    6 - 设置 margin 或者 padding 到 24px
    7 - 设置 margin 或者 padding 到 28px
    8 - 设置 margin 或者 padding 到 32px
    9 - 设置 margin 或者 padding 到 36px
    10 - 设置 margin 或者 padding 到 40px
    11 - 设置 margin 或者 padding 到 44px
    12 - 设置 margin 或者 padding 到 48px

## -size

    n1 - 将负的 margin 设置到 4px
    n2 - 将负的 margin 设置到 8px
    n3 - 将负的 margin 设置到 12px
    n4 - 将负的 margin 设置到 16px
    n5 - 将负的 margin 设置到 20px
    n6 - 将负的 margin 设置到 24px
    n7 - 将负的 margin 设置到 28px
    n8 - 将负的 margin 设置到 32px
    n9 - 将负的 margin 设置到 36px
    n10 - 将负的 margin 设置到 40px
    n11 - 将负的 margin 设置到 44px
    n12 - 将负的 margin 设置到 48px
    auto - 设置边距为 auto
