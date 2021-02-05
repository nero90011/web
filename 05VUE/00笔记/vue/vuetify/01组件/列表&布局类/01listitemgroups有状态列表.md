# v-list-item-group

    v-list-item-group 提供创建一组可选择的 v-list-item 的能力。v-list-item-group 组件利用其核心的 v-item-group 来为交互式列表提供一个简洁的接口。

## 使用

    <v-list flat>
      <v-list-item-group v-model="model" color="indigo">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

## 多级菜单

    <v-list-group
    no-action
    sub-group
    value="true"
    >
        <template v-slot:activator>
            <v-list-item-content>
            <v-list-item-title>Admin</v-list-item-title>
            </v-list-item-content>
        </template>

        <v-list-item
            v-for="(admin, i) in admins"
            :key="i"
            link
        >
            <v-list-item-title v-text="admin[0]"></v-list-item-title>
            
            <v-list-item-icon>
            <v-icon v-text="admin[1]"></v-icon>
            </v-list-item-icon>
        </v-list-item>
    </v-list-group>

    <v-list-group
    sub-group
    no-action
    >
    <template v-slot:activator>
        <v-list-item-content>
        <v-list-item-title>Actions</v-list-item-title>
        </v-list-item-content>
    </template>
    <v-list-item
        v-for="(crud, i) in cruds"
        :key="i"
        @click=""
    >
        <v-list-item-title v-text="crud[0]"></v-list-item-title>
        <v-list-item-action>
        <v-icon v-text="crud[1]"></v-icon>
        </v-list-item-action>
    </v-list-item>
    </v-list-group>

## 属性

    Name
    active-class
    Type
    string
    Default
    'v-item--active'
    Description
    active-class 在子组件（children ）被激活时应用。

    Name
    mandatory
    Type
    boolean
    Default
    false
    Description
    强制始终选择一个值（如果可用）。

    Name
    max
    Type
    number | string
    Default
    undefined
    Description
    设置可以选择的最大数量。

    Name
    multiple
    Type
    boolean
    Default
    false
    Description
    允许多个选择。value 属性必须是 _array_。

    Name
    value
    Type
    any
    Default
    undefined
    Description
    组件的指定 model 值。

    Dense 
    紧凑型
