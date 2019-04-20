<template>
  <v-layout
    row
    wrap
    justify-center
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
                <span class="category__title">陳威任</span>
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
            <span class="category__title">專案</span>
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
$black-dark: #2c2c2c;
$black-light: #555555;

/deep/.v-card__title {
  padding: 8px;
  justify-content: center;
  font-size: 2.1rem;
  font-weight: 900;
  // color: var(--v-primary-darken1);
}

/deep/.v-card {
  margin: 0.25rem;
  opacity: 0.9;
  &:hover {
    transition: 0.3s cubic-bezier(0.6, -0.28, 0.735, 0.045);
    transform: scale(1.02);
    z-index: 1;
    opacity: 1;
  }
}

.category__title {
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  padding: 0 8px;
}
</style>
