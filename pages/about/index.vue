<template>
  <div class="about">
    <base-breadcrumbs />
    <div class="title">C3について</div>
    <img
      type="image/webp"
      src="@/assets/image/s_logo.webp"
      class="about-logo"
      loading="lazy"
    />
    <markdown-view :markdown-text="c3_introduction" class="markdown" />
  </div>
</template>

<script>
import MarkdownView from '~/components/commons/MarkdownView.vue'
import BaseBreadcrumbs from '~/components/commons/BaseBreadcrumbs.vue'

import sdkClient from '~/plugins/contentful.js'

export default {
  components: {
    MarkdownView,
    BaseBreadcrumbs,
  },
  async asyncData({ store, error }) {
    try {
      return Promise.all([
        await sdkClient.getEntries({ content_type: 'c3Introduction' }),
      ]).then(([about]) => {
        store.commit('breadcrumbs/setBreadcrumbs', {
          breadcrumbs: [
            { url: '/', text: 'ホーム' },
            { url: '/about', text: 'C3について' },
          ],
        })
        return {
          c3_introduction: about.items[0].fields.introduction,
          c3_introduction_digest: about.items[0].fields.summaryOfIntroduction,
        }
      })
    } catch (e) {
      error({
        errorCode: e.errorCode,
        message: e.message,
      })
    }
  },
  data() {
    return {
      title: 'C3について',
      description: '',
    }
  },
  head() {
    return {
      title: this.title,
      htmlAttrs: {
        lang: 'jp',
        prefix:
          'og: https://ogp.me/ns# fb: https://ogp.me/ns/fb# article: https://ogp.me/ns/article#',
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.BASE_URL}about`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title,
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description,
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${process.env.BASE_URL}about`,
        },
      ],
    }
  },
  created() {
    this.description = this.c3_introduction_digest
  },
}
</script>

<style lang="scss" scoped>
.about {
  width: 70%;
  max-width: 1500px;
  margin: 0 auto 100px auto;
  padding: 10px 0;
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
@media screen and (max-width: $media-query-standard-max-width) {
  .about {
    width: 90%;
  }
}
</style>
