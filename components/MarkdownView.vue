<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div class="markdown" v-html="$md.render(markdownText)"></div>
</template>

<script>
export default {
  props: {
    markdownText: {
      type: String,
      required: true,
      default() {
        return ''
      },
    },
  },
}
</script>

<style lang="scss">
.markdown {
  overflow-wrap: break-word;
}
.markdown h1,
h2,
h3 {
  border-bottom: dotted 3px $through-light-blue;
  padding: 0 20px;
}
.markdown p img {
  display: block;
  width: 70%;
  height: auto;
  margin: 0 auto;
}
</style>
