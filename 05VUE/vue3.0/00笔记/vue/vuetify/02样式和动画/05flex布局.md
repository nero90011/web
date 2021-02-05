# flex

- [flex](#flex)
  - [基础](#基础)
  - [使用 display 工具](#使用-display-工具)
  - [您还可以基于各种断点自定义 flex 工具进行应用](#您还可以基于各种断点自定义-flex-工具进行应用)
  - [富裕空间管理(主轴)](#富裕空间管理主轴)
  - [富裕空间管理(侧轴)](#富裕空间管理侧轴)
  - [项目自己的富裕空间管理](#项目自己的富裕空间管理)
  - [自动边距 侧轴方向](#自动边距-侧轴方向)
  - [Flex order 可伸缩项目在布局时的顺序](#flex-order-可伸缩项目在布局时的顺序)
  - [Flex align content多行多列时富裕空间分布](#flex-align-content多行多列时富裕空间分布)
  - [Flex grow and shrink](#flex-grow-and-shrink)

## 基础

## 使用 display 工具

    你可以将任何元素转换为 flexbox 容器

## 您还可以基于各种断点自定义 flex 工具进行应用

    .d-flex
    .d-inline-flex
    .d-sm-flex
    .d-sm-inline-flex
    .d-md-flex
    .d-md-inline-flex
    .d-lg-flex
    .d-lg-inline-flex
    .d-xl-flex
    .d-xl-inline-flex
    Flex 方向
    默认情况下，d-flex 应用的 flex-direction: row 通常可以省略。但是，在某些情况下，您可能需要显式定义它。

    flex-column 和 flex-column-reverse 工具类可用于更改 flexbox 容器的方向。请记住，IE11 和 Safari 可能在列的方向存在问题。


    flex-direction 也有响应式变化。

    .flex-row
    .flex-row-reverse
    .flex-column
    .flex-column-reverse
    .flex-sm-row
    .flex-sm-row-reverse
    .flex-sm-column
    .flex-sm-column-reverse
    .flex-md-row
    .flex-md-row-reverse
    .flex-md-column
    .flex-md-column-reverse
    .flex-lg-row
    .flex-lg-row-reverse
    .flex-lg-column
    .flex-lg-column-reverse
    .flex-xl-row
    .flex-xl-row-reverse
    .flex-xl-column
    .flex-xl-column-reverse

## 富裕空间管理(主轴)

    可以使用 flex justify 类更改 justify-content 的 flex 设置。默认情况下，这将修改 x-axis 上的 flexbox items，但在使用 flex-direction: column 时将反转，从而修改 y-axis。在 start（浏览器默认）,end, center, between, 或者 around 中进行选择。

    基础:
    justify-content: flex-start;
    flex-start富裕空间在主轴的正方向flex-end 富裕空间在主轴的反方向
    center              主轴两边
    space-between  项目之间
    space-around(box 没有的)项目两边

    应用:
    justify-content 也有响应式变化。

    .justify-start 
    .jusify-end   
    .justify-center  
    .justify-space-between 
    .justify-space-around  
    .justify-sm-start
    .justify-sm-end
    .justify-sm-center
    .justify-sm-space-between
    .justify-sm-space-around
    .justify-md-start
    .justify-md-end
    .justify-md-center
    .justify-md-space-between
    .justify-md-space-around
    .justify-lg-start
    .justify-lg-end
    .justify-lg-center
    .justify-lg-space-between
    .justify-lg-space-around
    .justify-xl-start
    .justify-xl-end
    .justify-xl-center
    .justify-xl-space-between
    .justify-xl-space-around

## 富裕空间管理(侧轴)

    可以使用 flex align 类更改 align-items 的 flex 设置。默认情况下，这将修改 y-axis 上的 flexbox items，但在使用 flex-direction: column 时将反转，从而修改 x-axis。在 start, end, center, baseline, 或者 stretch（浏览器默认）中进行选择。

    当在 IE11 使用 flex align 时，你需要设置一个明确的 height，因为 min-height 的不足会导致不符合预期的结果。

    基础:align-items: stretch;单行单列
         flex-start    侧轴正方向
         flex-end    反方向
         center      两边
         baseline(box 没有的)按基线对齐
         stretch(box 没有的) 拉伸效果
        等高布局  必须有固定高度

    应用:
    align-items 也有响应式变化。

    .align-start
    .align-end
    .align-center
    .align-baseline
    .align-stretch
    .align-sm-start
    .align-sm-end
    .align-sm-center
    .align-sm-baseline
    .align-sm-stretch
    .align-md-start
    .align-md-end
    .align-md-center
    .align-md-baseline
    .align-md-stretch
    .align-lg-start
    .align-lg-end
    .align-lg-center
    .align-lg-baseline
    .align-lg-stretch
    .align-xl-start
    .align-xl-end
    .align-xl-center
    .align-xl-baseline
    .align-xl-stretch  

## 项目自己的富裕空间管理

    使用 flex 类和 align-self 类的时候，align-self 和 flex 的设置能够被改变。默认情况下，这将修改 x-axis 上的 flexbox 项，但是使用 flex-direction: column 的时候这将反过来修改 y-axis。从 start, end, center, baseline, auto, 或 stretch（浏览器默认） 之间来选择。


    基础:
    align-self
    align-self 会对齐当前 flex 行中的 flex 元素，并覆盖 align-items 的值. 如果任何 flex 元素的侧轴方向 margin 值设置为 auto，则会忽略 align-self。
    auto
    设置为父元素的 align-items 值，如果该元素没有父元素的话，就设置为 stretch。
    flex-start
    flex-end
    center:
        如果该元素的 cross-size 的尺寸大于 flex 容器，
        将在两个方向均等溢出。
    baseline  基线
    stretch

    应用:
    align-self-items 也同样有响应式变量。

    .align-self-start
    .align-self-end
    .align-self-center
    .align-self-baseline
    .align-self-auto
    .align-self-stretch
    .align-self-sm-start
    .align-self-sm-end
    .align-self-sm-center
    .align-self-sm-baseline
    .align-self-sm-auto
    .align-self-sm-stretch
    .align-self-md-start
    .align-self-md-end
    .align-self-md-center
    .align-self-md-baseline
    .align-self-md-auto
    .align-self-md-stretch
    .align-self-lg-start
    .align-self-lg-end
    .align-self-lg-center
    .align-self-lg-baseline
    .align-self-lg-auto
    .align-self-lg-stretch
    .align-self-xl-start
    .align-self-xl-end
    .align-self-xl-center
    .align-self-xl-baseline
    .align-self-xl-auto
    .align-self-xl-stretch

## 自动边距 侧轴方向

    基础:
    控制了容器为单行/列还是多行/列。并且定义了侧轴的方向，新行/列将沿侧轴方向堆砌。
    flex-wrap : 
    nowrap    默认压缩 
    wrap        不压缩,换行 侧轴正方向
    wrap-reverse 不压缩,换行,侧轴反方向

    在 flexbox 容器中使用 margin 助手类，当分别使用 flex-row 或者 flex-column 时，你可以在 x-axis 或者 y-axis 上控制 flex 项的位置。

    Flex 项与非默认的 justify-content 值一起使用时，IE11 不会正确适配自动边距。 浏览解决办法 See this StackOverflow answer。

    使用 align-items
    混合 flex-direction: column 和 align-items，你能够使用 .mt-auto 和 .mb-auto 助手类来挑战 flex 项的位置。


    默认的 .d-flex 没有提供任何包装元素（其行为类似于 flex-wrap: nowrap）。这可以通过使用 flex-{condition} 格式的 flex-wrap 助手类来修改。条件可以是 nowrap, wrap, 或者 wrap-reverse。

    .flex-nowrap
    .flex-wrap
    .flex-wrap-reverse
   
    这些助手类也同样可以使用 flex-{breakpoint}-{condition} 的格式来创建基于断点的响应式增强变量。以下组合可用：

    .flex-sm-nowrap
    .flex-sm-wrap
    .flex-sm-wrap-reverse
    .flex-md-nowrap
    .flex-md-wrap
    .flex-md-wrap-reverse
    .flex-lg-nowrap
    .flex-lg-wrap
    .flex-lg-wrap-reverse
    .flex-xl-nowrap
    .flex-xl-wrap
    .flex-xl-wrap-reverse

## Flex order 可伸缩项目在布局时的顺序

    基础:
    order越大越后
    默认值：0   不可继承

    您可以使用 order 工具更改 flex items 的可视顺序。

    First flex item
    Second flex item
    Third flex item
    order 也有响应式变化。

    .order-first
    .order-0
    .order-1
    .order-2
    .order-3
    .order-4
    .order-5
    .order-6
    .order-7
    .order-8
    .order-9
    .order-10
    .order-11
    .order-12
    .order-last
    .order-sm-first
    .order-sm-0
    .order-sm-1
    .order-sm-2
    .order-sm-3
    .order-sm-4
    .order-sm-5
    .order-sm-6
    .order-sm-7
    .order-sm-8
    .order-sm-9
    .order-sm-10
    .order-sm-11
    .order-sm-12
    .order-sm-last
    .order-md-first
    .order-md-0
    .order-md-1
    .order-md-2
    .order-md-3
    .order-md-4
    .order-md-5
    .order-md-6
    .order-md-7
    .order-md-8
    .order-md-9
    .order-md-10
    .order-md-11
    .order-md-12
    .order-md-last
    .order-lg-first
    .order-lg-0
    .order-lg-1
    .order-lg-2
    .order-lg-3
    .order-lg-4
    .order-lg-5
    .order-lg-6
    .order-lg-7
    .order-lg-8
    .order-lg-9
    .order-lg-10
    .order-lg-11
    .order-lg-12
    .order-lg-last
    .order-lg-first
    .order-xl-0
    .order-xl-1
    .order-xl-2
    .order-xl-3
    .order-xl-4
    .order-xl-5
    .order-xl-6
    .order-xl-7
    .order-xl-8
    .order-xl-9
    .order-xl-10
    .order-xl-11
    .order-xl-12
    .order-xl-last

## Flex align content多行多列时富裕空间分布

    基础:
    属性定义弹性容器的侧轴方向上有额外空间时，如何排布每一行/列。当弹性容器只有一行/列时无作用
    align-content多行多列有效
    flex-start
    flex-end
    center
    space-between
    space-around
    stretch


    可以使用 flex align-content 类更改 align-content 的 flex 设置。默认情况下，这将修改 x-axis 上的 flexbox items，但在使用 flex-direction: column 时将反转，从而修改 y-axis。在 start（浏览器默认）,end, center, between, around 或者 stretch 中进行选择。

  
    align-content 也有响应式变化。

    align-content-start
    align-content-end
    align-content-center
    align-content-space-between
    align-content-space-around
    align-content-stretch
    align-sm-content-start
    align-sm-content-end
    align-sm-content-center
    align-sm-content-space-between
    align-sm-content-space-around
    align-sm-content-stretch
    align-md-content-start
    align-md-content-end
    align-md-content-center
    align-md-content-space-between
    align-md-content-space-around
    align-md-content-stretch
    align-lg-content-start
    align-lg-content-end
    align-lg-content-center
    align-lg-content-space-between
    align-lg-content-space-around
    align-lg-content-stretch
    align-xl-content-start
    align-xl-content-end
    align-xl-content-center
    align-xl-content-space-between
    align-xl-content-spacearound
    align-xl-content-stretch

## Flex grow and shrink

    Vuetify 有一些辅助类，用于手动应用扩展和收缩。这些可以通过添加 flex-{condition}-{value} 帮助类来应用，其中条件可以是 grow 或 shrink，值可以是 0 或者 1 。条件 grow 将允许元素扩大以填充可用空间，而 shrink 将允许元素收缩到其内容所需的空间。但是，只有当元素必须收缩以适应其容器时才会发生这种情况，例如容器大小调整或受到 flex-grow-1 的影响。0 将阻止条件发生，而 1 将允许条件发生。有以下类可供选择：

    flex-grow-0
    flex-grow-1
    flex-shrink-0
    flex-shrink-1
    I'm 2 column wide
    I'm 1 column wide and I grow to take all the space
    I'm 5 column wide and I shrink if there's not enough space
    这些助手类还可以以 flex-{breakpoint}-{condition}-{state} 的格式应用，以创建基于断点的响应性更好的变量。下列组合可供选择：

    flex-sm-grow-0
    flex-md-grow-0
    flex-lg-grow-0
    flex-xl-grow-0
    flex-sm-grow-1
    flex-md-grow-1
    flex-lg-grow-1
    flex-xl-grow-1
    flex-sm-shrink-0
    flex-md-shrink-0
    flex-lg-shrink-0
    flex-xl-shrink-0
    flex-sm-shrink-1
    flex-md-shrink-1
    flex-lg-shrink-1
    flex-xl-shrink-1
