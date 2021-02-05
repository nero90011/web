# 高度及阴影 Z轴
  
    海拔辅助器允许您控制沿着 z-axis 的两个曲面之间的相对深度或距离。共有25个海拔层级，您可以使用类 elevation-{n} 去设置一个元素的海拔，其中的 n 是一个对应海拔层级所用到的介于 0-24 的整数。

    elevation="1-24"
    或者
    class="elevation-1"

     :class="`elevation-${hover ? 24 : 6}`"