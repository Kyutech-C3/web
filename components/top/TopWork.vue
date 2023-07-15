<template>
  <div class="wrapper">
    <div class="title">作品</div>
    <work-link :works="works" />
  </div>
</template>

<script>
import WorkLink from '~/components/WorkLink.vue'

export default {
  components: { WorkLink },
  props: {
    works: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  height: fit-content;
  padding-bottom: 100px;

  .title {
    font-size: $font-size-contents-title;
    color: $base-font-color;
    text-align: center;
    margin: 52px 0 20px 0;
  }
}
</style>
