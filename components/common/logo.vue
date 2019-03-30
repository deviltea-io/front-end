<template>
  <div class="container">
    <div class="logo">
      <div class="logo__text--main">
        DevilTea
      </div>
      <div class="logo__text--sub">
        菜鳥也會有夢想
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 16px 0;
  .logo {
    text-align: center;
    margin: auto;
    .logo__text--main {
      font-size: 60px;
      font-weight: 900;
      // text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }
    .logo__text--sub {
      font-size: 24px;
      // text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }
  }
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

.zoomIn {
  animation-name: zoomIn;
  animation-duration: 1s;
  animation-fill-mode: both;
}
</style>
