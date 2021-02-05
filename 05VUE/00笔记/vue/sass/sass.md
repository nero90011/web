# sass

- [sass](#sass)
  - [安装](#安装)
  - [使用](#使用)
  - [变量](#变量)
    - [声明变量](#声明变量)
    - [变量作用域](#变量作用域)
    - [变量引用变量](#变量引用变量)
    - [变量命名与引用规则](#变量命名与引用规则)
  - [嵌套规则](#嵌套规则)
    - [普通嵌套](#普通嵌套)
    - [父选择器嵌套](#父选择器嵌套)
    - [群组选择器嵌套](#群组选择器嵌套)
    - [> + ~ 嵌套](#blockquoteulli-嵌套liulblockquote)
    - [属性嵌套](#属性嵌套)
    - [嵌套导入](#嵌套导入)
  - [导入sass文件](#导入sass文件)
  - [注释](#注释)
  - [@mixin混合器:解决大段样式的重用](#mixin混合器解决大段样式的重用)
    - [何时使用混合器](#何时使用混合器)
    - [混合器传参](#混合器传参)
    - [引用混合器并设置参数,解决参数优先级](#引用混合器并设置参数解决参数优先级)
    - [混合器参数默认值](#混合器参数默认值)
  - [继承@选择器名](#继承选择器名)
  - [sass命令行工具](#sass命令行工具)
  - [运算](#运算)
  - [输出格式](#输出格式)

## 安装

    npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/

## 使用

## 变量

### 声明变量

    $highlight-color: #F90;
    $basic-border: 1px solid black;
    $plain-font: "Myriad Pro",Myriad,"Helvetica Neue"

### 变量作用域

    单文件中
    $width: 900px;
    nav {
    $width: 100px;//只能在此作用域中使用,优先级高于全局变量
    width: $width;
    color: $nav-color;
    }

    有@import引入的文件中:
    子sass文件中有一个$width,他的优先级高
    除非你在你的父sass文件中使用!default;
    $width:900px !default;

    将局部变量转换为全局变量可以添加 !global 声明：

### 变量引用变量

    $highlight-color: #F90;
    $highlight-border: 1px solid $highlight-color;

### 变量命名与引用规则

    中划线和下划线都可以
    建议使用中划线 -
    
    !用中划线声明的变量可以使用下划线的方式引用，反之亦然。
        但是在sass中纯css部分不互通，比如类名、ID或属性名

## 嵌套规则

### 普通嵌套

    #content {
        article {
            h1 { color: #333 }
            p { margin-bottom: 1.4em }
        }
        aside { background-color: #EEE }
    }

### 父选择器嵌套

    //普通嵌套
    article a {
        color: blue;
        :hover { color: red }//hover会被应用到所有的子元素 article a :hover
    }
    //父选择器嵌套
    article a{
        clorl:bule;
        &:hover{color:red} //article a:hover 只应用到article的a 子元素不会被影响
    }

### 群组选择器嵌套

    .button1, .button2 {
        margin: 0;
    }

    nav, aside {
        a {color: blue}
    }

    .container {
        h1, h2, h3 {margin-bottom: .8em}
    }

### > + ~ 嵌套

    article {
        ~ article { border-top: 1px dashed #ccc }
        > section { background: #eee }
        dl > {
            dt { color: #333 }
            dd { color: #555 }
        }
        nav + & { margin-top: 0 }
    }

### 属性嵌套

    border-style border-width可以写成
    nav {
        border: {
            style: solid;
            width: 1px;
            color: #ccc;
        }           
    }

    nav {
        border: 1px solid #ccc {
            left: 0px;
            right: 0px;
        }
    }

### 嵌套导入

    .blue-theme {@import "blue-theme"}

## 导入sass文件

    你有几个scss文件colors.scss mixins.scss 你想要引入他们

    全局sass文件引入:
    引入方式: @import "colors";
    使用sass的@import规则并不需要指明被导入文件的全名。你可以省略.sass或.scss文件后缀
    sass的@import规则是在生成css文件之前就把文件导入然后生成css文件

    局部sass文件引入:
    @import "themes/night-sky";

    导入css文件
    将css文件后缀改为.sass

## 注释

    body {
        color: #333; // 这种注释内容不会出现在生成的css文件中
        padding: 0; /* 这种注释内容会出现在生成的css文件中 */
    }

## @mixin混合器:解决大段样式的重用

    @mixin rounded-corners {
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        border-radius: 5px;
    }

    notice {
        background-color: green;
        border: 2px solid #00aa00;
        @include rounded-corners;
    }

### 何时使用混合器

    判断一组属性是否应该组合成一个混合器，一条经验法则就是你能否为这个混合器想出一个好的名字。

### 混合器传参

    @mixin link-colors($normal, $hover, $visited) {
        color: $normal;
        &:hover { color: $hover; }
        &:visited { color: $visited; }
    }

### 引用混合器并设置参数,解决参数优先级

    a {
        @include link-colors(
        $normal: blue,
        $visited: green,
        $hover: red
        );
    }

### 混合器参数默认值

    @mixin link-colors(
        $normal,
        $hover: $normal,
        $visited: $normal
    )
    {
    color: $normal;
    &:hover { color: $hover; }
    &:visited { color: $visited; }
    }

## 继承@选择器名

    //通过选择器继承继承样式
    .error {
        border: 1px solid red;
        background-color: #fdd;
    }
    .seriousError {
        @extend .error;
        border-width: 3px;
    }
    任何跟.error有关的组合选择器样式也会被.seriousError以组合选择器的形式继承
    //.seriousError从.error继承样式
    .error a{  //应用到.seriousError a
        color: red;
        font-weight: 100;
    }
        h1.error { //应用到hl.seriousError
        font-size: 1.2rem;
    }
    //假如一条样式规则继承了一个复杂的选择器，那么它只会继承这个复杂选择器命中的元素所应用的样式
    跟混合器相比，继承生成的css代码相对更少。因为继承仅仅是重复选择器，而不会重复属性，所以使用继承往往比混合器生成的css体积更小。如果你非常关心你站点的速度，请牢记这一点。
    继承遵从css层叠的规则。当两个不同的css规则应用到同一个html元素上时，并且这两个不同的css规则对同一属性的修饰存在不同的值，css层叠规则会决定应用哪个样式。相当直观：通常权重更高的选择器胜出，如果权重相同，定义在后边的规则胜出。

## sass命令行工具

    $ sass -i
    >> "Hello, Sassy World!"
    "Hello, Sassy World!"
    >> 1px + 1px + 1px
    3px
    >> #777 + #777
    #eeeeee
    >> #777 + #888
    white

## 运算

    SassScript 支持数字的加减乘除、取整等运算 (+, -, *, /, %)，如果必要会在不同单位间转换值。

    如果需要使用变量，同时又要确保 / 不做除法运算而是完整地编译到 CSS 文件中，只需要用 #{} 插值语句将变量包裹。
    p {
        $font-size: 12px;
        $line-height: 30px;
        font: #{$font-size}/#{$line-height};
    }

    @if
    @while
    @for
    @each
    @function

## 输出格式
