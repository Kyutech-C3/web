<template>
  <div class="tag">
    <div class="tag-item">{{ tag }}</div>
  </div>
</template>

<script>
export default {
  props: {
    tag: {
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
.tag {
  border: 1px solid;
  border-color: $light-gray;
  border-radius: 8px;
  padding: 3px 6px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tag-item {
  width: fit-content;
}
</style>
