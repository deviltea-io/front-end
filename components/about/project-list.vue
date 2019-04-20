<template>
  <v-layout
    row
    wrap
  >
    <v-flex
      v-for="n in 2"
      :key="n"
      xs12
      sm6
    >
      <v-layout column>
        <v-flex
          v-for="(project, i) in column(n - 1)"
          :key="i"
          xs12
        >
          <project-card
            :title="project.title"
            :tags="project.tags"
            :description="project.description"
            :links="project.links"
          />
        </v-flex>
      </v-layout>
    </v-flex>
    <!-- <v-flex
      v-for="(project, i) in projects"
      :key="i"
      xs12
      sm6
      md4
    >

    </v-flex> -->
  </v-layout>
</template>

<script>
import ProjectCard from './project-card'
export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: [
        {
          title: 'Node TypeScript 腳手架',
          tags: ['NodeJS', 'TypeScript'],
          description: '方便使用 TypeScript 進行 nodeJS 專案開發的腳手架。',
          links: [
            {
              text: 'GitHub',
              url: 'https://github.com/DevilTea/node-typescript-boilerplate'
            }
          ]
        },
        {
          title: 'NTUT SHOP - 北科大二手交易網',
          tags: ['NodeJS', 'vue', 'nuxt', 'koa2', 'MariaDB'],
          description:
            '資料庫系統課程學期專案，前端使用 vue 搭配 nuxt 實現 ssr ，後端使用 koa2 搭配 MariaDB。',
          links: [
            {
              text: 'GitHub',
              url: 'https://github.com/ntutshop/ntut-shop'
            }
          ]
        },
        {
          title: 'CCM - 瓷器信使（前端）',
          tags: ['NodeJS', 'vue'],
          description:
            '資訊安全課程學期專案，是一個加密訊息之通訊軟體，前端使用 vue 具有 RWD 。',
          links: [
            {
              text: 'GitHub',
              url: 'https://github.com/ChinaCipher/messenger-vue'
            }
          ]
        },
        {
          title: 'DevZone',
          tags: ['Vue', 'Firebase'],
          description:
            '網頁前端設計課程學期專題，提供登入註冊、即時聊天、Markdown 發文等功能的論壇。',
          links: [
            {
              text: 'GitHub',
              url: 'https://github.com/yaoandy107/vue-forum'
            }
          ]
        },
        {
          title: '大家的五十音',
          tags: ['Android', 'Java'],
          description: 'Android 課程學期專案，輔助學習日文五十音 App。',
          links: [
            {
              text: 'GitHub',
              url: 'https://github.com/DevilTea/Android_FinalProject'
            }
          ]
        },
        {
          title: '形象網頁練習',
          tags: ['NodeJS', 'Vue'],
          description: '上司臨時要求按照設計稿刻出的形象網頁。',
          links: [
            {
              text: 'GitHub',
              url: 'https://github.com/DevilTea/treatbar-new-sample'
            },
            {
              text: '網頁',
              url: 'https://deviltea.github.io/treatbar-new-sample/'
            }
          ]
        },
        {
          title: 'Vue SFC 腳手架',
          tags: ['NodeJS', 'Vue'],
          description:
            '方便開發、發布 vue 單檔組件 (Single File Component) 的腳手架。',
          links: [
            {
              text: 'GitHub',
              url: 'https://github.com/DevilTea/vue-sfc-preset'
            }
          ]
        },
        {
          title: 'FoodG - Telegram Bot',
          tags: ['Python'],
          description:
            'Coding 365 小組專案，提供簡易選項幫助使用者找出附近適合的飲食店家。',
          links: [
            {
              text: 'GitHub',
              url: 'https://github.com/DevilTea/FoodG'
            }
          ]
        },
        {
          title: 'OOP Monster Strike - web',
          tags: ['JavaScript'],
          description:
            '物件導向實習課程學期專案，模仿手遊“怪物彈珠”，基於課程提供之框架進行開發。',
          links: [
            {
              text: 'GitHub',
              url: 'https://github.com/DevilTea/OOP_MonsterStrike'
            }
          ]
        },
        {
          title: 'MapleStory Server Simulator',
          tags: ['Java'],
          description:
            '高中時期覺得有趣就自網路上找了外國大大開源出來的源碼，快樂學習物件導向ＸＤ。',
          links: [
            {
              text: 'GitHub',
              url: 'https://github.com/DevilTea/DevilTeaMS-server'
            }
          ]
        }
      ]
    }
  },
  methods: {
    column(n) {
      return this.projects.filter((_, i) => i % 2 === n)
    }
  }
}
</script>
