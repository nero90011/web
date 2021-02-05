# 横幅

    v-banner 组件用于通过 1-2 个操作向用户发送中级中断消息。它有两个变量，single-line 和 multi-line。这些变量在和你的消息和动作一起使用时包含图标。

    <v-banner
      single-line
      :sticky="sticky"
    >
      We can't save your edits while you are in offline mode.

      <template v-slot:actions>
        <v-btn
          text
          color="deep-purple accent-4"
        >Get Online</v-btn>
      </template>
    </v-banner>

    双行（移动端）
    Two-line VBanner 能够存储大量数据，用于大量消息。
     <v-banner>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus nec sem id malesuada.
        Curabitur lacinia sem et turpis euismod, eget elementum ex pretium.
        <template v-slot:actions>
        <v-btn text color="primary">Dismiss</v-btn>
        <v-btn text color="primary">Retry</v-btn>
        </template>
    </v-banner>
