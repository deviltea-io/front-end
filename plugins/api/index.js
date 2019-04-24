import Vue from 'vue'
import users from './users'

function getApi(axios) {
  return {
    users: {
      ...users(axios)
    },
  }
}

export default function({ app }) {
  const api = getApi(app.$axios)

  Vue.prototype.$api = api
  app.$api = api
}
