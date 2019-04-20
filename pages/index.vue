<template>
  <div>
    <div class="main__area">
      <div
        v-for="(c, i) in title"
        :key="`char${i}`"
        class="title-animation__slide-in-top"
        :style="{
          'animation-delay': `${i * 150}ms`
        }"
      >
        <span
          class="main__title title-animation__breathe"
          style="animation-delay: inherit;"
        >{{ c }}</span>
      </div>
    </div>
    <v-layout
      row
      wrap
      justify-space-between
      align-center
    >
      <v-flex
        v-for="(link, i) in links"
        :key="i"
        class="text-xs-center"
      >
        <nuxt-link
          class="link"
          :to="link.page"
        >
          {{ link.text }}
        </nuxt-link>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  layout: 'index',
  data() {
    return {
      title: 'DevilTea',
      links: [
        {
          text: '關於',
          page: 'about'
        },
        {
          text: '文章',
          page: 'articles'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.main__area {
  position: relative;
  > div {
    display: inline-block;
    position: relative;
  }
  .main__title {
    color: #00000000;
    text-align: center;
    font-size: 22vmin;
    font-weight: 900;
    cursor: default;
  }
}
.link {
  text-decoration: none;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  line-height: 48px;
  height: 48px;
  width: 180px;
  font-size: 2rem;
  margin: 8px;
  border: 2px solid;
  border-radius: 28px;
  &:hover {
    transition: 0.15s linear;
    background: rgba(255, 255, 255, 0.1);
  }
}

.title-animation__breathe {
  animation: title-animation__breathe;
  animation-duration: 5s;
  animation-iteration-count: infinite;
}

@keyframes title-animation__breathe {
  0% {
    color: rgba(255, 255, 255, 0.1);
  }
  50% {
    color: #ffffff;
  }
  100% {
    color: rgba(255, 255, 255, 0.1);
  }
}

.title-animation__slide-in-top {
  animation: title-animation__slide-in-top;
  animation-duration: 3s;
}

@keyframes title-animation__slide-in-top {
  0% {
    top: -10rem;
  }
  100% {
    top: 0;
  }
}
</style>
