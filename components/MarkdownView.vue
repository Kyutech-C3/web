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
  border-radius: 20px;
}
@media screen and (max-width: $media-query-s-small-max-width) {
  .markdown h1,
  h2,
  h3 {
    padding: 0 5px;
  }
  .markdown p img {
    width: 90%;
    border-radius: 10px;
  }
  .markdown p,
  blockquote {
    width: 95%;
  }
  .markdown p {
    margin: 0 auto;
  }
  .markdown p,
  blockquote {
    margin: 2rem auto;
  }
  .markdown blockquote p {
    width: 100%;
    margin: 1rem 0;
  }
}
</style>
