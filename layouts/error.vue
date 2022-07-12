<template>
  <div class="error-page">
    <div class="error-modal">
      <img
        type="image/webp"
        src="@/assets/image/s_logo.webp"
        alt="sorry"
        class="error-img"
        loading="lazy"
      />
      <p class="">{{ error.statusCode }}</p>
      <p class="error-massage">{{ error.message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    if (this.error.statusCode !== 404) {
      this.$gtag('event', 'exception', {
        description: this.error.message,
        fatal: false,
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.error-page {
  width: 100%;
  height: 100vh;
  position: relative;
}
.error-modal {
  width: 50%;
  padding: 5vw 10vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  border-radius: 2vw;
  background-color: rgb(231, 231, 231);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.error-img {
  width: 200px;
  height: auto;
  position: absolute;
  bottom: -100px;
  right: -100px;
}
.error-massage {
  overflow-wrap: break-word;
}
</style>
