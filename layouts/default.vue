<template>
  <v-app>
    <v-snackbar
      v-model="snackbar.visibility"
      :top="$vuetify.breakpoint.mdAndUp"
      :bottom="$vuetify.breakpoint.smAndDown"
    >
      {{ snackbar.text }}
    </v-snackbar>
    <v-navigation-drawer
      app
      dark
      :permanent="$vuetify.breakpoint.lgAndUp"
      width="280"
      right
    />
    <v-navigation-drawer
      v-model="showDrawer"
      app
      dark
      width="280"
      :permanent="$vuetify.breakpoint.mdAndUp"
    >
      <v-layout
        column
        fill-height
      >
        <v-list>
          <template v-if="!$store.state.user">
            <login-card @login="login" />
            <v-divider />
          </template>
          <!-- <v-list-tile>
            <v-text-field
              id="id"
              name="name"
              color="accent"
              prepend-inner-icon="search"
            />
          </v-list-tile>
          <v-divider /> -->
          <v-list-tile
            v-for="(navButton, index) in navButtons"
            :key="index"
            avatar
            nuxt
            :to="navButton.to"
            @click="showDrawer = false"
          >
            <v-list-tile-avatar>
              <v-icon>{{ navButton.icon }}</v-icon>
            </v-list-tile-avatar>
            {{ navButton.name }}
          </v-list-tile>
        </v-list>
        <template v-if="$store.state.user">
          <v-spacer />
          <div class="pa-2">
            <v-btn
              block
              color="primary"
              outline
              dark
              @click="logout"
            >
              登出
            </v-btn>
          </div>
        </template>
      </v-layout>
    </v-navigation-drawer>
    <no-ssr>
      <v-toolbar
        v-if="$vuetify.breakpoint.smAndDown"
        class="toolbar"
        app
        dark
        flat
        fixed
      >
        <v-toolbar-side-icon
          v-show="$vuetify.breakpoint.smAndDown"
          @click="showDrawer = !showDrawer"
        />
      </v-toolbar>
    </no-ssr>
    <v-content
      app
    >
      <v-container
        fluid
        fill-height
        class="pa-3 content"
      >
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      app
      dark
      fixed
    >
      <v-spacer />
      <span>&copy; DevilTea {{ year }}</span>
      <v-spacer />
    </v-footer>
  </v-app>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import config from '@/assets/firebaseConfig.json'
import LoginCard from '@/components/common/login-card'

export default {
  components: {
    LoginCard
  },
  data() {
    return {
      dark: true,
      year: new Date().getUTCFullYear(),
      showDrawer: false,
      scrollTop: 0,
      navButtons: [
        {
          icon: 'home',
          name: '首頁',
          to: '/'
        },
        {
          icon: 'mood',
          name: '關於',
          to: '/about'
        },
        {
          icon: 'format_list_bulleted',
          name: '文章',
          to: '/articles'
        }
      ],
      snackbar: {
        visibility: false,
        text: ''
      }
    }
  },
  computed: {},
  mounted() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    }
  },
  methods: {
    async login(providerName) {
      const provider = new firebase.auth[`${providerName}AuthProvider`]()
      if (providerName === 'Google') {
        provider.addScope('https://www.googleapis.com/auth/userinfo.email')
      } else if (providerName === 'Github') {
        provider.addScope('user')
      }
      await firebase.auth().signInWithPopup(provider)
      const idToken = await firebase.auth().currentUser.getIdToken(true)
      await this.$store.dispatch('login', idToken)
      await this.$store.dispatch('auth')
      this.displaySnackbar(`Hello ${this.$store.state.user.name} !`)
    },
    async logout() {
      this.displaySnackbar(`Goodbye ${this.$store.state.user.name} !`)
      await firebase.auth().signOut()
      await this.$store.dispatch('logout')
    },
    displaySnackbar(text) {
      const vm = this
      vm.snackbar.visibility = true
      vm.snackbar.text = text
      setTimeout(() => {
        vm.snackbar.visibility = false
        vm.snackbar.text = ''
      }, 3000)
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/.content {
  max-width: 720px;
}
</style>
