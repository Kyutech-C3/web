<template>
  <div>
    <Header ref="header" @masked-screen="isMaskedScreen = !isMaskedScreen" />
    <Nuxt class="page_content" />
    <transition>
      <div v-show="isMaskedScreen" class="mask" @click="closeHeader()"></div>
    </transition>
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

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
}
</style>

<style lang="scss" scoped>
.mask {
  width: 100vw;
  height: 100vh;
  background-color: $gray;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.5;
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
.page_content {
  margin-top: 150px !important;
}
</style>
