export default function getApi(axios) {
  return {
    async createArticle({ coverUrl, title, tags, content, password }) {
      const { articleId } = await axios.$post('/articles', {
        coverUrl,
        title,
        tags,
        content,
        password
      })
      return articleId
    },
    async getArticlesList({ index, amount, tag, sort, ascending }) {
      const { articlesId } = await axios.$get('/articles', {
        params: {
          index,
          amount,
          tag,
          sort: sort || 'publish',
          ascending
        }
      })
      return articlesId
    },
    async getArticleInfo({ articleId }) {
      const info = await axios.$get(`/articles/${articleId}/info`)
      return info
    },
    async getArticleContent({ articleId, password = '' }) {
      const { content } = await axios.$post(`/articles/${articleId}/content`, {
        password
      })
      return content
    },
    async increaseArticleViewCount({ articleId }) {
      await axios.$post(`/articles/${articleId}/views/count`)
    },
    async upateArticle({
      articleId,
      coverUrl,
      title,
      tags,
      content,
      password
    }) {
      await axios.$patch(`/articles/${articleId}`, {
        coverUrl,
        title,
        tags,
        content,
        password
      })
    },
    async deleteArticle({ articleId }) {
      await axios.$delete(`/articles/${articleId}`)
    }
  }
}
