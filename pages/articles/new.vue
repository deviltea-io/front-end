<template>
  <v-layout
    column
    fill-height
  >
    <article-editor
      ref="editor"
      @send="send"
    />
  </v-layout>
</template>

<script>
import ArticleEditor from '@/components/articles/ArticleEditor'
export default {
  components: {
    ArticleEditor
  },
  data() {
    return {}
  },
  methods: {
    async send() {
      const articleId = await this.$api.articles.createArticle(
        this.$refs.editor.article
      )
      this.$router.push(`/articles/${articleId}`)
    }
  }
}
</script>
