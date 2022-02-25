<template>
  <div class="tag">{{ tag }}</div>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      required: true,
      default() {
        return 'default'
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.tag {
  border: 1px solid;
  border-color: $light-gray;
  border-radius: 8px;
  padding: 3px 6px;
}
</style>
