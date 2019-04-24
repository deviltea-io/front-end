export const state = () => ({
  duringTransaction: false,
  user: null
})
export const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  SET_DURING_TRANSACTION(state, duringTransaction) {
    state.duringTransaction = duringTransaction
  }
}
export const actions = {
  async nuxtServerInit({ dispatch }, { app }) {
    try {
      const token = app.$cookies.get('token')
      if (token) {
        await dispatch('auth')
      }
    } catch (err) {}
  },
  async login({ commit }, idToken) {
    commit('SET_DURING_TRANSACTION', true)
    await this.app.$api.users.login({ idToken })
    commit('SET_DURING_TRANSACTION', false)
  },
  async auth({ commit }) {
    commit('SET_DURING_TRANSACTION', true)
    const user = await this.app.$api.users.auth()
    commit('SET_USER', user)
    commit('SET_DURING_TRANSACTION', false)
  },
  async logout({ commit }) {
    commit('SET_DURING_TRANSACTION', true)
    await this.app.$api.users.logout()
    commit('SET_USER', null)
    commit('SET_DURING_TRANSACTION', false)
  }
}
