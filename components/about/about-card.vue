<template>
  <v-card class="pa-3">
    <v-card-title primary-title>
      關於
    </v-card-title>
    <v-divider />
    <v-card-text>
      <v-layout
        justify-center
      >
        <div class="about__content px-3">
          嗨！我是陳威任，目前是臺北科技大學資訊工程系三年級生。平常喜歡在 GitHub 上探索，四處看看有趣的 repo ，對於學新東西覺得很有趣！原本從稍微會使用一點點 Vue 前端框架，因為好奇逐漸涉獵到後端，現在也為了架站開始接觸 DevOps ，自己都覺得很不可思議！
        </div>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped>
.about__content {
  max-width: 400px;
  line-height: 2.5rem;
  font-size: 1.25rem;
}
</style>
