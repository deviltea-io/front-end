<template>
  <div v-if="articles.length > 0">
    <article-list-item
      v-for="(article, i) in articles"
      :key="`article-${i}`"
      v-bind="article"
      @click.native="enterArticle(article.articleId)"
    />
  </div>
  <v-card-text
    v-else
    class="display-1 pa-3 text-xs-center grey--text"
  >
    目前沒有文章！
  </v-card-text>
</template>

<script>
import ArticleListItem from '@/components/articles/ArticleListItem'

export default {
  components: {
    ArticleListItem
  },
  props: {
    articles: {
      type: Array,
      required: true
    }
  },
  methods: {
    enterArticle(id) {
      this.$router.push(`/articles/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/.v-card__title {
  justify-content: center;
}

// .article-list {
//   height: 100%;
// }
</style>
