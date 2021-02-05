# v-toolbar顶部工具栏

    类似v-bar-app
    工具栏组件与 v-navigation-drawer 和 v-card 配合使用效果非常好。
    v-toolbar-title 用于显示标题， v-toolbar-items 允许 v-btn 扩展整个高度。

## 扩展应用: 地图上的搜索定位组件

     <v-toolbar
      dense
      floating
    >
      <v-text-field
        hide-details
        prepend-icon="search"
        single-line
      ></v-text-field>

      <v-btn icon>
        <v-icon>my_location</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>

## 属性

    absolute  bottom  color dark elevation light max-height max-width min-height min-width
    collapse: 将工具栏置于折叠状态，以减小其最大宽度。
    dense :将工具栏内容的高度降低到 48px（使用 prominent 属性时为 96px）
    extended: 使用此道具可以增加工具栏的高度，而 不需要 使用 extension 插槽来添加内容。可以与 extension-height 属性，以及其他会影响工具栏高度的其他属性，例如 prominent, dense 等配合使用，height 除外。
    extension-height:为extension插槽指定明确高度
    flat:是否删除阴影
    floating: 将 display: inline-flex 应用于组件。
    height:指定工具栏的特定高度。覆盖其他 props 所施加的高度，例如 prominent, dense, extended。
    prominent:将工具栏内容的高度增加到 128px。拖动时减少 dense 或者short
    short:将工具栏内容的高度降低到 56px（使用 prominent 属性时为 112px）。
    src :指定 v-img 作为组件背景。
    tag: 指定在根元素上使用的自定义标签。
    tile:删除组件的 border-radius。
    width:设定组件的宽度。
