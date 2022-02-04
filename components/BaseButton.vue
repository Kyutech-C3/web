<template>
  <nuxt-link :to="link" class="link">
    <div class="frame">
      <slot></slot>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
      default() {
        return ''
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.link {
  height: 100%;
  color: $gray;
  text-decoration: none;
  font-family: $font-family-contens;
  font-size: $font-size-button;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-color: $gray;
  border-radius: 500px;
}
</style>
