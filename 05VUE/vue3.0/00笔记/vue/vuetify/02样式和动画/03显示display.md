# 显示

## 终端对应大小

![1](../../images/Snipaste_2020-03-25_17-12-44.png)

    breakpoint:
    | Extrasmall手机              | xs  | small to large handset | < 600px             |
    | --------------------------- | --- | ---------------------- | ------------------- |
    | Small         平板          | sm  | small to medium tablet | 600px > < 960px     |
    | Medium            笔记本    | md  | large tablet to laptop | 960px > < 1264px*   |
    | Large             显示器    | lg  | desktop                | 1264px* > < 1904px* |
    | Extra large        大显示器 | xl  | 4k and ultra-wides     | > 1904px*           |

## display属性

    为显示帮助类设置一个特定的断点时，它会应用到对应宽度及其更宽的屏幕比如，d-lg-flex 会应用到 lg 和 xl 大小的屏幕上。

    使用举例:class="d-inline"

    .d-{value} for xs
    .d-{breakpoint}-{value} for sm, md, lg and xl

    value 属性可以为下列之一：

    none
    inline
    inline-block
    block
    table
    table-cell
    table-row
    flex
    inline-flex

## 设置在多大的显示器上才显示

    你使用 .d-none，它将适用于所有断点。然而 .d-md-none 只适用于 md 及以上。

    方法1:
    | Hidden on all      | .d-none                       |
    | ------------------ | ----------------------------- |
    | Hidden only on xs  | .d-none .d-sm-flex            |
    | Hidden only on sm  | .d-sm-none .d-md-flex         |
    | Hidden only on md  | .d-md-none .d-lg-flex         |
    | Hidden only on lg  | .d-lg-none .d-xl-flex         |
    | Hidden only on xl  | .d-xl-none                    |
    | Visible on all     | .d-flex                       |
    | Visible only on xs | .d-flex .d-sm-none            |
    | Visible only on sm | .d-none .d-sm-flex .d-md-none |
    | Visible only on md | .d-none .d-md-flex .d-lg-none |
    | Visible only on lg | .d-none .d-lg-flex .d-xl-none |
    | Visible only on xl | .d-none .d-xl-flex            |

    方法2:
    hidden-{breakpoint}-{condition}
    only - 仅通过 xl 断点将元素隐藏在 xs 上
    and-down - 在指定的断点处隐藏元素，并通过 lg 断点向下隐藏 sm 上的元素
    and-up - 在指定的断点处隐藏元素，并通过 lg 断点向上隐藏 sm 上的元素
    此外，media types 可以使用 only 条件作为目标。目前支持 hidden-screen-only 和 hidden-print-only

## 打印选项

    你还可以在打印时更改显示属性。

    .d-print-none
    .d-print-inline
    .d-print-inline-block
    .d-print-block
    .d-print-table
    .d-print-table-row
    .d-print-table-cell
    .d-print-flex
    .d-print-inline-flex
