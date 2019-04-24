<template>
  <v-layout
    column
    fill-height
  >
    <v-card
      flat
    >
      <v-toolbar
        color="primary"
        flat
      >
        <v-spacer />
        <v-toolbar-items>
          <v-btn
            v-if="$store.state.user && $store.state.user.permission === 0"
            icon
            dark
            @click="$router.push(`/articles/new`)"
          >
            <v-icon>
              mdi-pencil-plus
            </v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <article-list :articles="articles" />
    </v-card>
  </v-layout>
</template>

<script>
import ArticleList from '@/components/articles/ArticleList'
export default {
  watchQuery: ['tag'],
  components: {
    ArticleList
  },
  data() {
    return {}
  },
  async asyncData({ app, query, error }) {
    try {
      const articles = []
      const articlesId = await app.$api.articles.getArticlesList(query)
      for (const articleId of articlesId) {
        const info = {
          articleId,
          ...(await app.$api.articles.getArticleInfo({ articleId }))
        }
        articles.push(info)
      }
      return { articles }
    } catch ({ response }) {
      error({ statusCode: response.status, message: response.data.message })
    }
  }
}
</script>
