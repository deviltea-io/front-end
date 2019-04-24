import Vue from 'vue'
import users from './users'
import articles from './articles'

function getApi(axios) {
  return {
    users: {
      ...users(axios)
    },
    articles: {
      ...articles(axios)
    }
  }
}

export default function({ app }) {
  const api = getApi(app.$axios)

  Vue.prototype.$api = api
  app.$api = api
}
