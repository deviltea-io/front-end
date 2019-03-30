<template>
  <v-layout
    row
    wrap
  >
    <v-flex xs12>
      <v-card
        color="transparent"
        flat
      >
        <v-card-text>
          <v-layout
            row
            wrap
            justify-center
            align-center
          >
            <v-flex
              xs3
              sm1
            >
              <v-layout justify-center>
                <v-avatar size="70">
                  <img
                    src="/images/avatar.jpeg"
                    alt="陳"
                  >
                </v-avatar>
              </v-layout>
            </v-flex>
            <v-flex
              xs6
              sm4
            >
              <div class="text-xs-center">
                <span class="category__title primary--text">陳威任</span>
              </div>
            </v-flex>
            <v-flex
              xs0
              sm1
            />
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex
      xs12
      sm6
    >
      <v-layout
        column
      >
        <v-flex xs9>
          <about-card />
        </v-flex>
        <v-flex xs3>
          <contact-card />
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex
      xs12
      sm6
    >
      <skill-card />
    </v-flex>
    <v-flex xs12>
      <v-card
        color="transparent"
        flat
      >
        <v-card-text>
          <div class="text-xs-center">
            <span class="category__title primary--text">專案</span>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12>
      <project-list />
    </v-flex>
  </v-layout>
</template>

<script>
import AboutCard from '@/components/about/about-card'
import ContactCard from '@/components/about/contact-card'
import SkillCard from '@/components/about/skill-card'
import ProjectList from '@/components/about/project-list'

export default {
  components: {
    AboutCard,
    ContactCard,
    SkillCard,
    ProjectList
  }
}
</script>

<style lang="scss" scoped>
/deep/.v-card__title {
  padding: 8px;
  justify-content: center;
  font-size: 2.2rem;
  font-weight: 900;
}

/deep/.v-card {
  margin: 0.25rem;
}

.category__title {
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  padding: 0 8px;
}
</style>
