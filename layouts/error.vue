<template>
  <v-layout
    row
    wrap
    fill-height
    justify-center
    align-center
  >
    <div class="notice text-xs-center">
      <div class="oops">
        (<span class="eyebrow">ˊ</span>・ω・<span class="eyebrow">ˋ</span>)
      </div>
      <div class="balloon-container">
        <div class="mt-3 balloon primary white--text">
          <div class="status">
            {{ error.statusCode }}
          </div>
          <div class="message">
            {{ error.message }}
          </div>
        </div>
      </div>
    </div>
  </v-layout>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
>

<style lang="scss" scoped>
.notice {
  display: flex;
  flex-direction: column;
  align-items: center;
  & > .oops {
    font-size: 20vmin;
    font-weight: 500;
    & > .eyebrow {
      position: relative;
      animation: raise-eyebrow;
      animation-duration: 1s;
      animation-iteration-count: infinite;
    }
  }
  & > .balloon-container {
    position: relative;
    & > .balloon {
      display: inline-block;
      position: relative;
      padding: 24px;
      border-radius: 50px;
      box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.5);
      animation: generate-balloon;
      animation-duration: 1s;
      // animation-iteration-count: infinite;
      animation-fill-mode: forwards;
      & > .status {
        line-height: 1em;
        font-size: 15vmin;
        font-weight: 400;
      }
      & > .message {
        max-width: 400px;
        line-height: 1em;
        font-size: 6vmin;
        font-weight: 400;
      }
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        border: 30px solid transparent;
        border-bottom-color: inherit;
        border-top: 0;
        margin-left: -30px;
        margin-top: -30px;
      }
    }
  }
}

@keyframes raise-eyebrow {
  0% {
    top: initial;
  }
  25% {
    top: initial;
  }
  40% {
    top: -20px;
  }
  45% {
    top: initial;
  }
  50% {
    top: initial;
  }
  60% {
    top: -20px;
  }
  65% {
    top: initial;
  }
  75% {
    top: initial;
  }
  100% {
    top: initial;
  }
}

@keyframes generate-balloon {
  0% {
    transform: translateY(-50%) scale(0);
  }
  100% {
    transform: translateY(0%) scale(1);
  }
}
</style>
