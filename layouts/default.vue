<template>
  <div>
    <Header ref="header" @masked-screen="isMaskedScreen = !isMaskedScreen" />
    <Nuxt class="page" />
    <transition>
      <div v-show="isMaskedScreen" class="mask" @click="closeHeader()"></div>
    </transition>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMaskedScreen: false,
    }
  },
  methods: {
    closeHeader() {
      this.isMaskedScreen = false
      this.$refs.header.closeHeader()
    },
  },
}
</script>
<style lang="scss">
html {
  font-family: $font-family-contens;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden !important;
}
.page {
  margin-top: min(40vw, 120px) !important;
}
body {
  width: 100%;
  margin: 0;
}
</style>
<style lang="scss" scoped>
.mask {
  width: 100vw;
  height: 100vh;
  background-color: rgba(112, 112, 112, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
}

// transition
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
