export default function getApi(axios) {
  return {
    async login({ idToken }) {
      const { token } = await axios.$post('/users/login', { idToken })
      return token
    },

    async logout() {
      await axios.$post('/users/logout')
    },

    async auth() {
      const user = await axios.$post('/users/auth')
      return user
    }
  }
}
