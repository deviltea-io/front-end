<template>
  <v-app :dark="dark">
    <v-navigation-drawer
      v-model="showDrawer"
      app
      width="280"
      :permanent="$vuetify.breakpoint.mdAndUp"
    >
      <logo />
      <v-divider />
      <v-list>
        <v-list-tile>
          <v-text-field
            id="id"
            name="name"
            color="accent"
            prepend-inner-icon="search"
          />
        </v-list-tile>
        <v-divider />
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
        class="pa-3"
      >
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      app
      fixed
    >
      <v-spacer />
      <span>&copy; DevilTea {{ year }}</span>
      <v-spacer />
    </v-footer>
  </v-app>
</template>

<script>
import Logo from '@/components/common/logo'
export default {
  components: {
    Logo
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
        },
        {
          icon: 'label',
          name: '標籤',
          to: '/tags'
        }
      ]
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fadeInDown {
  animation-name: fadeInDown;
  animation-duration: 1s;
  animation-fill-mode: both;
}

@keyframes fadeOutUp {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
}

.fadeOutUp {
  animation-name: fadeOutUp;
  animation-duration: 1s;
  animation-fill-mode: both;
}
</style>
