<template>
  <div class="markdown">
    <div v-html="html" />
  </div>
</template>

<script>
import md from './markdown-it'
export default {
  props: {
    value: {
      type: String,
      default: '# Hello Markdown'
    }
  },
  computed: {
    markdown: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    },
    html() {
      return md.render(this.markdown)
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  color: #abb2bf;
  background: #282c34;

  &-comment,
  &-quote {
    color: #5c6370;
    font-style: italic;
  }

  &-doctag,
  &-keyword,
  &-formula {
    color: #c678dd;
  }

  &-section,
  &-name,
  &-selector-tag,
  &-deletion,
  &-subst {
    color: #e06c75;
  }

  &-literal {
    color: #56b6c2;
  }

  &-string,
  &-regexp,
  &-addition,
  &-attribute,
  &-meta-string {
    color: #98c379;
  }

  &-built_in,
  &-class &-title {
    color: #e6c07b;
  }

  &-attr,
  &-variable,
  &-template-variable,
  &-type,
  &-selector-class,
  &-selector-attr,
  &-selector-pseudo,
  &-number {
    color: #d19a66;
  }

  &-symbol,
  &-bullet,
  &-link,
  &-meta,
  &-selector-id,
  &-title {
    color: #61aeee;
  }

  &-emphasis {
    font-style: italic;
  }

  &-strong {
    font-weight: bold;
  }

  &-link {
    text-decoration: underline;
  }
}

/deep/code:after,
/deep/kbd:after,
/deep/code:before,
/deep/kbd:before {
  content: none;
}

/deep/code {
  background-color: unset;
  color: unset;
  box-shadow: none;
}

/deep/h1,
/deep/h2,
/deep/h3 {
  margin: 16px 0;
}

/deep/p,
/deep/h4,
/deep/h5,
/deep/h6 {
  margin: 8px 0;
}
</style>
