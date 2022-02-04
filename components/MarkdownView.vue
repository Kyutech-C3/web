<template>
  <div class="markdown" v-html="$md.render(markdownText)"></div>
</template>

<script>
export default {
  props: {
    markdownText: {
      type: String,
      required: true,
      default() {
        return '# hoge'
      },
    },
  },
}
</script>

<style>
.markdown {
  overflow-wrap: break-word;
}
.markdown p img {
  width: 60%;
  height: auto;
}
</style>
