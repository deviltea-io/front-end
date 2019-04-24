<template>
  <v-card class="pa-3 article-list-card">
    <v-layout
      align-center
      row
      wrap
    >
      <v-flex
        fill-height
        xs12
        sm4
      >
        <div
          :style="{
            'background-image': `url(${coverUrl})`,
            'position': 'relative'
          }"
          class="cover-image"
        >
          <v-icon
            v-if="locked"
            size="48"
            :style="{
              'position': 'absolute',
              'right': '8px',
              'bottom': '8px'
            }"
          >
            mdi-lock
          </v-icon>
        </div>
      </v-flex>
      <v-flex
        fill-height
        xs12
        sm8
      >
        <v-layout
          column
          class="article-info px-3"
        >
          <h1 class="article-info__title">
            {{ title }}
          </h1>
          <v-spacer />
          <div>
            <v-layout
              row
              wrap
              align-center
            >
              <div
                class="caption grey--text d-inline-flex"
                style="align-items: center"
              >
                <span>標籤</span>
                <v-icon
                  color="primary"
                  size="16"
                >
                  mdi-label
                </v-icon>
              </div>
              <v-chip
                v-for="(tag, i) in tags"
                :key="`tag-${i}`"
                class="info-tags__tag"
                small
                color="primary"
                outline
                @click.stop="$router.push(`/articles?tag=${tag}`)"
              >
                {{ tag }}
              </v-chip>
            </v-layout>
          </div>
          <div>
            <v-layout
              row
              wrap
              align-center
              class="caption grey--text"
            >
              <div
                class="d-inline-flex mr-3"
                style="align-items: center"
              >
                <v-icon
                  color="primary"
                  size="16"
                >
                  mdi-eye
                </v-icon>
                <span>：{{ viewCount }}</span>
              </div>
              <div
                class="d-inline-flex mr-3"
                style="align-items: center"
              >
                <v-icon
                  color="primary"
                  size="16"
                >
                  mdi-comment
                </v-icon>
                <span>：{{ commentCount }}</span>
              </div>
              <div>{{ timeString }}</div>
            </v-layout>
          </div>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: {
    coverUrl: {
      type: String,
      required: true,
      default: () => 'images/default-cover.png'
    },
    title: {
      type: String,
      required: true,
      default: () => 'Title'
    },
    viewCount: {
      type: Number,
      required: true,
      default: () => 0
    },
    commentCount: {
      type: Number,
      required: true,
      default: () => 0
    },
    tags: {
      type: Array,
      required: true,
      default: () => ['無']
    },
    createdTime: {
      type: String,
      required: true,
      default: () => new Date().toString()
    },
    updatedTime: {
      type: String,
      required: false,
      default: () => new Date().toString()
    },
    locked: {
      type: Boolean
    }
  },
  computed: {
    timeString() {
      return `${this.updatedTime ? '更新' : '發表'}於：${new Date(
        this.updatedTime || this.createdTime
      ).toLocaleString()}`
    }
  }
}
</script>

<style lang="scss" scoped>
.article-list-card {
  cursor: pointer;
  opacity: 0.9;
  margin: 8px;
  &:hover {
    transition: 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    transform: scale(1.02);
    z-index: 1;
    opacity: 1;
  }
  .cover-image {
    width: 100%;
    height: 160px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }

  .article-info {
    width: 100%;
    min-height: 160px;

    .info-tags__tag {
      margin: 4px 0 4px 8px;
    }
  }
}
</style>
