<template>
  <v-card class="editor px-4 pt-4 pb-2">
    <v-layout
      column
      fill-height
    >
      <v-card-title
        primary-title
        class="pa-0"
      >
        <input
          v-model="title"
          class="title__input"
          type="text"
          placeholder="輸入標題"
        >
      </v-card-title>
      <v-card-text class="px-0 py-2">
        <v-chip
          v-for="(tag, i) in tagObjs"
          :key="i"
          class="tag__chip"
          color="primary"
          round
          outline
          close
          @input="tagObjs.splice(i, 1)"
          @click="clickTag(i)"
        >
          <input
            v-if="tag.focused"
            :id="`tag-input-${i}`"
            v-model="tag.text"
            type="text"
            class="tag__input"
            placeholder="標籤"
            @input.stop
            @blur="blurTag(i)"
          >
          <span
            v-else
            v-text="tag.text"
          />
        </v-chip>
        <v-btn
          flat
          icon
          color="primary"
          small
          @click="addTag"
        >
          <v-icon>mdi-tag-plus</v-icon>
        </v-btn>
      </v-card-text>
      <v-divider />
      <textarea
        ref="textarea"
        v-model="content"
        rows="10"
        class="content my-3"
        @input="autogrow"
      />
      <v-divider />
      <v-card-actions class="px-0">
        <v-layout
          row
          wrap
          align-center
        >
          <v-text-field
            v-model="password"
            class="password__input"
            hide-details
            prepend-icon="mdi-lock"
          />
          <v-spacer />
          <v-layout
            class="my-3"
            row
            wrap
            align-center
            :justify-end="$vuetify.breakpoint.smAndUp"
            :justify-space-between="$vuetify.breakpoint.xsOnly"
          >
            <v-dialog
              v-model="dialog"
              max-width="720px"
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  round
                  outline
                  color="primary"
                  dark
                  small
                  v-on="on"
                >
                  預覽
                </v-btn>
              </template>
              <v-card>
                <article-view
                  v-bind="article"
                  preview
                />
              </v-card>
            </v-dialog>
            <v-btn
              class="ml-3"
              round
              color="primary"
              dark
              small
              @click="$emit('send')"
            >
              送出
            </v-btn>
          </v-layout>
        </v-layout>
      </v-card-actions>
    </v-layout>
  </v-card>
</template>

<script>
import ArticleView from './ArticleView'
export default {
  components: {
    ArticleView
  },
  data() {
    return {
      dialog: false,
      coverUrl: '',
      title: '',
      tagObjs: [],
      content: '',
      password: ''
    }
  },
  computed: {
    tags() {
      return this.tagObjs.map(t => t.text)
    },
    article() {
      return {
        coverUrl: this.coverUrl || 'images/default-cover.png',
        title: this.title,
        tags: this.tags.length === 0 ? ['未分類'] : this.tags,
        content: this.content,
        password: this.password.trim()
      }
    }
  },
  mounted() {
    this.addTag()
    this.$nextTick().then(() => {
      this.autogrow()
    })
  },
  methods: {
    addTag() {
      this.tagObjs.push({ text: '', focused: false })
      this.clickTag(this.tagObjs.length - 1)
    },
    blurTag(i) {
      this.tagObjs[i].focused = false
      if (this.tagObjs[i].text.trim().length === 0) {
        this.tagObjs.splice(i, 1)
      }
    },
    clickTag(i) {
      this.tagObjs[i].focused = true
      this.$nextTick().then(() => {
        const el = document.querySelector(`#tag-input-${i}`)
        if (el && el.focus) el.focus()
      })
    },
    autogrow() {
      const textarea = this.$refs.textarea
      textarea.style.height = 'auto'
      textarea.style.height = textarea.scrollHeight + 'px'
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

.editor {
  width: 100%;
  .title__input {
    display: inline-block;
    width: 100%;
    outline: 0;
  }
  /deep/.tag__chip {
    cursor: pointer;
    .tag__input {
      display: inline-block;
      outline: 0;
      width: 50px;
    }
  }
  .content {
    display: block;
    width: 100%;
    resize: none;
    outline: 0;
  }
  .password__input {
    padding: 0;
    margin: 0;
    max-width: 150px;
  }
}
</style>
