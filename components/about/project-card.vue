<template>
  <v-card class="py-3">
    <v-card-title primary-title>
      <div class="project__title">
        {{ title }}
      </div>
    </v-card-title>
    <v-card-text class="text-xs-center">
      <v-chip
        v-for="(tag, i) in tags"
        :key="i"
        color="primary"
        outline
      >
        {{ tag }}
      </v-chip>
    </v-card-text>
    <v-card-text>
      <v-layout justify-center>
        <div class="project__description px-3">
          {{ description }}
        </div>
      </v-layout>
    </v-card-text>
    <v-card-actions>
      <v-layout
        row
        wrap
        justify-center
      >
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          color="primary"
          round
          outline
          @click="openInNewTab(link.url)"
        >
          {{ link.text }}
        </v-btn>
      </v-layout>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '專案名稱'
    },
    tags: {
      type: Array,
      default: () => ['tag 1', 'tag 2', 'tag 3']
    },
    description: {
      type: String,
      default:
        '專案說明：測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字測試文字'
    },
    links: {
      type: Array,
      default: () => [{ text: 'Github', url: 'https://github.com' }]
    }
  },
  methods: {
    openInNewTab(url) {
      const win = window.open(url, '_blank')
      win.focus()
    }
  }
}
</script>

<style lang="scss" scoped>
.project__title {
  text-align: center;
  font-size: 1.75rem;
}
.project__description {
  max-width: 400px;
  line-height: 2.5rem;
  font-size: 1.25rem;
}
</style>
