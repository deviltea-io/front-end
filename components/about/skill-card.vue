<template>
  <v-card class="pa-3">
    <v-card-title primary-title>
      技能
    </v-card-title>
    <v-divider />
    <v-card-text>
      <div
        v-for="(skill, i) in skills"
        :key="i"
        class="my-3"
      >
        <p class="skill-category__title">
          {{ skill[0] }}
        </p>
        <v-layout
          row
          wrap
          justify-center
        >
          <v-tooltip
            v-for="(sk, j) in skill[1]"
            :key="'chip' + j"
            top
          >
            <template v-slot:activator="{ on }">
              <v-chip
                color="primary"
                outline
                v-on="on"
              >
                <span class="skill__text">{{ sk[0] }}</span>
              </v-chip>
            </template>
            {{ sk[1] }}
          </v-tooltip>
        </v-layout>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        [
          '語言',
          [
            ['JavaScript', '熟悉'],
            ['TypeScript', '熟悉'],
            ['Python', '有經驗'],
            ['Java', '有經驗'],
            ['C#', '有經驗']
          ]
        ],
        [
          '前端',
          [
            ['Bootstrap', '有經驗'],
            ['Vue.js', '熟悉'],
            ['Nuxt.js', '熟悉'],
            ['SCSS', '熟悉']
          ]
        ],
        [
          '後端',
          [
            ['NodeJs', '熟悉'],
            ['Koa2', '熟悉'],
            ['MongoDB', '熟悉'],
            ['MySQL', '有經驗'],
            ['Restful API', '有經驗']
          ]
        ],
        ['行動端', [['Android', '有經驗']]],
        [
          'DevOps',
          [
            ['Git', '熟悉'],
            ['Docker', '有經驗'],
            ['Docker Compose', '有經驗'],
            ['CircleCI', '有經驗'],
            ['GitLabCI', '有經驗']
          ]
        ]
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
.skill-category__title {
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  // color: var(--v-primary-darken1);
}

.skill__text {
  font-size: 1.25rem;
  font-weight: 400;
}
</style>
