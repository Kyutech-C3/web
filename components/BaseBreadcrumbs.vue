<template>
  <div class="breadcrumbs">
    <div v-for="(breadcrumb, index) in getBreadcrumbs" :key="index">
      <nuxt-link
        :to="breadcrumb.url"
        class="link"
        :class="{ 'is-disabled': getBreadcrumbs.length === index + 1 }"
      >
        {{ breadcrumb.text }}
      </nuxt-link>
      <span v-if="getBreadcrumbs.length !== index + 1">/</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getBreadcrumbs() {
      return this.$store.state.breadcrumbs.breadcrumbs
    },
  },
}
</script>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  align-items: center;
  font-size: $font-size-other-contents-other;
}
.link {
  color: $base-font-color;
  text-decoration: none;
  margin: 0 3px;
}
.link:hover {
  text-decoration: underline;
}
.is-disabled {
  pointer-events: none;
  color: $black;
}
</style>
