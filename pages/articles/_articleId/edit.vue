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
  async asyncData({ app, params, error }) {
    try {
      const { articleId } = params
      const article = await app.$api.articles.getArticleInfo({ articleId })
      article.articleId = articleId
      article.content = await app.$api.articles.getArticleContent({
        articleId
      })
      article.locked = false
      return { article }
    } catch ({ response }) {
      error({ statusCode: response.status, message: response.data.message })
    }
  },
  mounted() {
    this.$refs.editor.coverUrl = this.article.coverUrl
    this.$refs.editor.title = this.article.title
    this.$refs.editor.tagObjs = this.article.tags.map(tag => ({
      text: tag,
      focused: false
    }))
    this.$refs.editor.content = this.article.content
    this.$refs.editor.password = ''
  },
  methods: {
    async send() {
      await this.$api.articles.upateArticle({
        articleId: this.article.articleId,
        ...this.$refs.editor.article
      })
      this.$router.push(`/articles/${this.article.articleId}`)
    }
  }
}
</script>
