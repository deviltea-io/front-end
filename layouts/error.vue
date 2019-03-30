<template>
  <v-app :dark="dark">
    <v-navigation-drawer
      v-model="visibility.drawer"
      fixed
    >
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
          @click="visibility.drawer = false"
        >
          <v-list-tile-avatar>
            <v-icon>{{ navButton.icon }}</v-icon>
          </v-list-tile-avatar>
          {{ navButton.name }}
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      dark
      color="primary"
      flat
      fixed
    >
      <v-toolbar-side-icon
        v-if="$vuetify.breakpoint.smAndDown"
        s@click="visibility.drawer = !visibility.drawer"
      />
    </v-toolbar>
    <v-toolbar
      color="primary"
      :style="`opacity: ${logoOpacity}`"
    >
      <v-layout
        slot="extension"
        class="logo"
        fill-height
        row
        wrap
      >
        <v-flex>
          <div class="zoomIn logo">
            <p class="main-title text-shadow">
              DevilTea
            </p>
            <p class="sub-title text-shadow">
              菜鳥也會有夢想
            </p>
          </div>
        </v-flex>
      </v-layout>
    </v-toolbar>
    <v-content>
      <v-container
        fluid
        fill-height
      >
        <nuxt v-scroll="onScroll" />
      </v-container>
    </v-content>
    <v-footer
      absolute
      app
    >
      <v-spacer />
      <span>&copy; DevilTea {{ year }}</span>
      <v-spacer />
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      dark: true,
      year: new Date().getUTCFullYear(),
      visibility: {
        drawer: false
      },
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
  computed: {
    logoOpacity() {
      const opacity = 1 - Math.min(this.scrollTop, 100) / 100
      return `${opacity}`
    }
  },
  methods: {
    onScroll(event) {
      this.scrollTop = event.target.scrollingElement.scrollTop
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/.v-toolbar {
  > div {
    max-width: 1170px;
    margin: 0 auto;
  }
  .v-toolbar__extension {
    height: auto !important;
  }
}
.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
.logo {
  padding: 0 0 8px 0;
  text-align: center;
  vertical-align: middle;
  .main-title {
    margin: 0;
    font-size: 10vh;
  }
  .sub-title {
    margin: 0;
    font-size: 2.5vh;
  }
}
/deep/.search-field {
  width: 24vw;
}
@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

.zoomIn {
  animation-name: zoomIn;
  animation-duration: 1s;
  animation-fill-mode: both;
}

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
