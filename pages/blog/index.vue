<template>
  <div class="blog">
    <base-breadcrumbs />
    <div class="title">ブログ</div>
    <card-list
      :card-items="entry_list"
      :entry-type="'blog'"
      class="blog-list"
    />
  </div>
</template>

<script>
import axios from 'axios'

import CardList from '~/components/card/CardList.vue'
import BaseBreadcrumbs from '~/components/commons/BaseBreadcrumbs.vue'

import sdkClient from '@/plugins/contentful.js'

import { formatToybox } from '~/utils/toybox'

export default {
  components: {
    CardList,
    BaseBreadcrumbs,
  },
  async asyncData({ store, error }) {
    try {
      await store.commit('breadcrumbs/setBreadcrumbs', {
        breadcrumbs: [
          { url: '/', text: 'ホーム' },
          { url: '/blog', text: 'ブログ一覧' },
        ],
      })
      return Promise.all([
        await sdkClient.getEntries({
          content_type: 'blog',
          order: '-sys.createdAt',
        }),
        await axios.get(`${process.env.TOYBOX_API_BASE_URL}/blogs`),
      ]).then(([ctfResult, toyboxResult]) => {
        const blogs = toyboxResult.data.blogs.map(formatToybox)
        return {
          entry_list: blogs.concat(ctfResult.items),
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
      title: 'ブログ - 一覧',
      description: `${this.title} - ブログ一覧を表示するページです。`,
    }
  },
  head() {
    return {
      title: this.title,
      htmlAttrs: {
        lang: 'ja',
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
          content: `${process.env.BASE_URL}blog`,
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
    }
  },
}
</script>

<style lang="scss" scoped>
.blog {
  width: 80%;
  max-width: 1500px;
  margin: 0 auto 10% auto;
  color: $base-font-color;
  padding: 10px 0;
}
.title {
  font-size: $font-size-other-title;
}
.blog-list {
  margin: 2vw 0;
}
@media screen and (max-width: $media-query-small-max-width) {
  .blog {
    width: 95%;
  }
}
@media screen and (max-width: $media-query-standard-max-width) {
  .blog {
    width: 85%;
  }
}
</style>
