<template>
  <v-layout
    column
    fill-height
  >
    <v-card
      flat
    >
      <v-layout
        column
        fill-height
      >
        <v-toolbar
          color="primary"
          flat
        >
          <v-spacer />
          <v-toolbar-items v-if="$store.state.user && $store.state.user.permission === 0">
            <v-btn
              icon
              dark
              @click="$router.push(`/articles/${article.articleId}/edit`)"
            >
              <v-icon>
                mdi-pencil
              </v-icon>
            </v-btn>
            <v-btn
              icon
              dark
              @click="deleteArticle"
            >
              <v-icon>
                mdi-delete
              </v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <article-view
          ref="article"
          v-bind="article"
          @authed="authed"
        />
        <comment-list class="mt-3" />
      </v-layout>
    </v-card>
  </v-layout>
</template>

<script>
import ArticleView from '@/components/articles/ArticleView'
import CommentList from '@/components/articles/CommentList'
export default {
  components: {
    ArticleView,
    CommentList
  },
  data() {
    return {}
  },
  async asyncData({ app, error, params, store }) {
    try {
      const { articleId } = params
      const article = await app.$api.articles.getArticleInfo({ articleId })
      article.articleId = articleId
      if (
        !article.locked ||
        (store.state.user && store.state.user.permission === 0)
      ) {
        article.content = await app.$api.articles.getArticleContent({
          articleId
        })
        article.locked = false
      } else {
        article.content = ''
      }
      return { article }
    } catch ({ response }) {
      error({ statusCode: response.status, message: response.data.message })
    }
  },
  async mounted() {
    await this.$api.articles.increaseArticleViewCount({
      articleId: this.article.articleId
    })
    this.article.viewCount += 1
  },
  methods: {
    authed({ content }) {
      this.article.content = content
    },
    async deleteArticle() {
      try {
        await this.$api.articles.deleteArticle({
          articleId: this.article.articleId
        })
        this.$router.push('/articles')
      } catch (error) {
        alert('無法刪除')
      }
    }
  }
}
</script>
