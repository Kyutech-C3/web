<template>
  <div>
    <Header
      ref="header"
      :style="
        showHeader
          ? 'transform: translate(-50%, 0);'
          : 'transform: translate(-50%, calc(var(--header-height) * -2));'
      "
      @masked-screen="isMaskedScreen = !isMaskedScreen"
      @change-header-height="handleHeaderHeightResize()"
    />
    <Nuxt class="page" :style="`--page-top-margin: ${headerHeight}px;`" />
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
      headerHeight: 0,
      oldScrollY: 0,
      showHeader: true,
    }
  },
  watch: {
    isMaskedScreen() {
      if (this.isMaskedScreen) {
        document.addEventListener('touchmove', this.noScroll, {
          passive: false,
        })
        document.addEventListener('wheel', this.noScroll, { passive: false })
      } else {
        document.removeEventListener('touchmove', this.noScroll)
        document.removeEventListener('wheel', this.noScroll)
      }
    },
  },
  mounted() {
    this.handleHeaderHeightResize()
    window.addEventListener('scroll', this.scrollEventHandler)
  },
  methods: {
    closeHeader() {
      this.isMaskedScreen = false
      this.$refs.header.closeHeader()
    },
    handleHeaderHeightResize() {
      if (this.$refs.header) {
        const headerContainer =
          this.$refs.header.$el.getElementsByClassName('header-container')
        if (headerContainer.length === 1) {
          this.headerHeight = headerContainer[0].offsetHeight
        }
      }
    },
    scrollEventHandler() {
      const scrollY = window.scrollY
      if (scrollY > this.oldScrollY) {
        if (scrollY > this.headerHeight * 3) {
          this.showHeader = false
        }
      } else {
        this.showHeader = true
      }
      this.oldScrollY = scrollY
    },
    noScroll(e) {
      e.preventDefault()
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
}

body {
  overflow-x: hidden;
  width: 100vw;
  margin: 0;
  --header-max-height: 80px;
  --header-height: 12vw;
  --header-min-height: 50px;
  --header-top: max(min(2vw, 20px), 10px);
}

h1 {
  font-size: $h1-font-size;
}

h2 {
  font-size: $h2-font-size;
}

h3 {
  font-size: $h3-font-size;
}

h4 {
  font-size: $h4-font-size;
}

h5 {
  font-size: $h5-font-size;
}

.page {
  margin-top: calc(var(--page-top-margin) + var(--header-top) * 2) !important;
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
  transition: opacity 0.2s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
