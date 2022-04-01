<template>
  <div class="about">
    <base-breadcrumbs />
    <div class="title">C3について</div>
    <img src="@/assets/image/c3_logo_circled.png" class="about-logo" />
    <markdown-view :markdown-text="c3_introduction" class="markdown" />
  </div>
</template>

<script>
import MarkdownView from '~/components/MarkdownView.vue'

import sdkClient from '~/plugins/contentful.js'

export default {
  components: {
    MarkdownView,
  },
  async asyncData({ store }) {
    return Promise.all([
      await sdkClient.getEntries({ content_type: 'c3Introduction' }),
    ]).then(([about]) => {
      store.commit('breadcrumbs/setBreadcrumbs', {
        breadcrumbs: [
          { url: '/', text: 'ホーム' },
          { url: '/about', text: 'C3について' },
        ],
      })
      // eslint-disable-next-line no-console
      console.log(about.items)
      return {
        c3_introduction: about.items[0].fields.introduction,
      }
    })
  },
}
</script>

<style lang="scss" scoped>
.about {
  width: 70%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 50px 0;
  color: $base-font-color;
}
.title {
  font-size: $font-size-other-title;
}
.about-logo {
  display: block;
  width: 200px;
  height: auto;
  margin: 5vw auto;
}
.markdown {
  font-size: $font-size-other-contents-description;
}
</style>
