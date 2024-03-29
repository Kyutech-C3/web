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
      const regexp = /\[(.*)\]\(#(.*)\)/g
      const replaceText = `[$1](${location.pathname}#$2)`
      return this.$md.render(this.markdownText.replaceAll(regexp, replaceText))
    },
  },
}
</script>

<style lang="scss">
.markdown {
  overflow-wrap: break-word;

  h2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  h3 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  h4 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  h5 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  h1,
  h2,
  h3 {
    border-bottom: dotted 3px $through-light-blue;
    margin: 40px 0 10px 0;
  }
  pre {
    border-radius: 10px;
  }
  p {
    line-height: 4rem;
    code {
      background-color: #f0f0f0;
      padding: 1px 5px;
      border-radius: 5px;
      color: #905;
    }
  }
  img {
    display: block;
    width: 60vw;
    max-width: 80%;
    height: auto;
    margin: 20px auto;
    border-radius: 20px;
    pointer-events: none;
    border: 1.5px solid;
    border-color: #f5f5f5;
  }
  ul li {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  hr {
    border-bottom: dotted 3px $through-light-blue;
    border-right: none;
    border-top: none;
    border-left: none;
  }
  iframe {
    margin: 0 auto;
    display: block;
    border-radius: 20px;
    width: 60vw;
    height: 35vw;
    max-width: 80%;
    max-height: 400px;
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
  .markdown p img,
  .markdown ul img,
  iframe {
    width: 100% !important;
    border-radius: 10px !important;
    margin: 2rem auto;
    max-width: none !important;
    max-height: none !important;
  }
  iframe {
    height: 50vw !important;
  }
  .markdown ul {
    padding-left: 20px;

    li {
      margin-top: 10px;
      margin-bottom: 10px;
    }
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
