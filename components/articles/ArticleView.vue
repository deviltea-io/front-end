<template>
  <v-card
    class="article pa-4"
    flat
    color="transparent"
  >
    <v-layout
      column
      fill-height
    >
      <v-card-title
        primary-title
        class="pa-0"
      >
        {{ title }}
      </v-card-title>
      <v-card-text class="px-0 py-2">
        <v-chip
          v-for="(tag, i) in tags"
          :key="i"
          color="primary"
          round
          outline
          @click="preview && clickTag(tag)"
        >
          {{ tag }}
        </v-chip>
      </v-card-text>
      <v-card-actions class="article__info px-0">
        <v-layout
          row
          wrap
        >
          <v-flex class="article__info-line">
            觀看數：{{ viewCount }}
          </v-flex>
          <v-flex class="article__info-line">
            留言數：{{ commentCount }}
          </v-flex>
          <v-flex class="article__info-line">
            {{ timeString }}
          </v-flex>
        </v-layout>
      </v-card-actions>
      <v-divider />
      <v-card-text
        v-if="preview || !locked || passAuth"
        class="article__content px-0"
      >
        <markdown
          v-model="content"
        />
      </v-card-text>
      <v-layout
        v-else
        class="py-3"
        column
        fill-height
        justify-center
        align-center
      >
        <div>
          <v-icon size="150">
            mdi-lock
          </v-icon>
        </div>
        <div>
          <v-text-field
            v-model="password"
            label="文章密碼："
            type="password"
            :error="hasError"
          >
            <template v-slot:append>
              <v-btn
                flat
                icon
                color="primary"
                @click="auth"
                @keypress.enter="auth"
              >
                <v-icon>mdi-send</v-icon>
              </v-btn>
            </template>
          </v-text-field>
        </div>
      </v-layout>
    </v-layout>
  </v-card>
</template>

<script>
import Markdown from '@/components/articles/markdown'
export default {
  components: {
    Markdown
  },
  props: {
    articleId: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '文章標題'
    },
    viewCount: {
      type: Number,
      default: 0
    },
    commentCount: {
      type: Number,
      default: 0
    },
    tags: {
      type: Array,
      default: () => ['未分類']
    },
    content: {
      type: String,
      default: ''
    },
    createdTime: {
      type: String,
      required: false,
      default: () => new Date().toString()
    },
    updatedTime: {
      type: String,
      required: false,
      default: () => new Date().toString()
    },
    locked: {
      type: Boolean,
      default: false
    },
    preview: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      hasError: false,
      passAuth: false,
      password: ''
    }
  },
  computed: {
    timeString() {
      return `${this.updatedTime ? '更新' : '發表'}於：${new Date(
        this.updatedTime || this.createdTime
      ).toLocaleString()}`
    }
  },
  methods: {
    clickTag(tag) {
      this.$router.push(`/articles?tag=${tag}`)
    },
    async auth() {
      try {
        this.$emit('authed', {
          content: await this.$api.articles.getArticleContent({
            articleId: this.articleId,
            password: this.password
          })
        })
        this.hasError = false
        this.passAuth = true
      } catch {
        this.hasError = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/.v-card__title {
  padding: 8px;
  font-size: 2.5rem;
  font-weight: 900;
}

.article {
  width: 100%;
  height: 100%;

  &__info {
    &-line {
      padding: 0 16px;
      opacity: 0.5;
    }
  }
  &__content {
    min-height: 200px;
    .auth {
      height: 100%;
    }
  }
}
</style>
