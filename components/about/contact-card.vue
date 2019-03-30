<template>
  <v-card>
    <v-card-title primary-title>
      聯絡
    </v-card-title>
    <v-divider />
    <v-card-actions>
      <v-layout
        row
        wrap
        justify-space-between
      >
        <v-flex
          v-for="(button, index) in contactButtons"
          :key="index"
          class="text-xs-center"
          xs4
        >
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn
                flat
                large
                icon
                color="primary"
                v-on="on"
                @click="openInNewTab(button.url)"
              >
                <v-icon>{{ button.icon }}</v-icon>
              </v-btn>
            </template>
            <span>{{ button.text }}</span>
          </v-tooltip>
        </v-flex>
      </v-layout>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      contactButtons: [
        {
          icon: 'mdi-facebook',
          text: 'Facebook',
          url: 'https://www.facebook.com/profile.php?id=100009354752945'
        },
        {
          icon: 'mdi-instagram',
          text: 'Instagram',
          url: 'https://www.instagram.com/we0826_'
        },
        {
          icon: 'mdi-telegram',
          text: 'Telegram',
          url: 'https://t.me/DevilTea'
        },
        {
          icon: 'mdi-github-face',
          text: 'Github',
          url: 'https://github.com/DevilTea'
        },
        {
          icon: 'mdi-email',
          text: 'Email',
          url: 'mailto:ch870814@gmail.com'
        },
        {
          icon: 'mdi-linkedin',
          text: 'LinkedIn',
          url:
            'https://www.linkedin.com/in/%E5%A8%81%E4%BB%BB-%E9%99%B3-64a384180/'
        }
      ]
    }
  },
  methods: {
    openInNewTab(url) {
      const win = window.open(url, '_blank')
      win.focus()
    }
  }
}
</script>
