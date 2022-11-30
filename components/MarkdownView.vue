<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div class="markdown" v-html="getHTML()"></div>
</template>

<script>
import Prism from '@/plugins/prism'

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
  mounted() {
    Prism.highlightAll()
  },
  methods: {
    getHTML() {
      return this.$md.render(this.markdownText)
    },
  },
}
</script>

<style lang="scss">
.markdown {
  overflow-wrap: break-word;
  h1,
  h2,
  h3 {
    border-bottom: dotted 3px $through-light-blue;
    padding: 0 20px;
    margin: 40px 0 10px 0;
  }
  p {
    line-height: 4rem;
    code {
      background-color: #f0f0f0;
      padding: 1px 5px;
      border-radius: 5px;
      color: #905;
    }
    img {
      display: block;
      width: 60vw;
      max-width: 80%;
      height: auto;
      margin: 20px auto;
      border-radius: 20px;
      pointer-events: none;
    }
  }
  hr {
    border-bottom: dotted 3px $through-light-blue;
    border-right: none;
    border-top: none;
    border-left: none;
  }
}
table {
  border-collapse: collapse;
  border: 1px solid $light-gray;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 0 1px $light-gray;
}

th,
td {
  padding: 5px 10px;
  border: 1px solid $light-gray;
}

th {
  background: #ebf8ff;
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
