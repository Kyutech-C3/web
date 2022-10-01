<template>
  <div class="news">
    <base-breadcrumbs />
    <div class="title">お知らせ</div>
    <card-list
      :card-items="entry_list"
      :entry-type="'news'"
      class="news-list"
    />
  </div>
</template>

<script>
import CardList from '~/components/card/CardList.vue'
import BaseBreadcrumbs from '@/components/BaseBreadcrumbs.vue'

import sdkClient from '@/plugins/contentful.js'

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
          { url: '/news', text: 'お知らせ一覧' },
        ],
      })
      return Promise.all([
        await sdkClient.getEntries({
          content_type: 'news',
        }),
      ]).then(([news]) => {
        const resEntryList = []
        for (let i = 0; i < news.items.length; i++) {
          resEntryList.push(news.items[i])
        }
        return {
          entry_list: resEntryList,
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
          content: `${process.env.BASE_URL}blog/`,
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
.news {
  width: 80%;
  max-width: 1500px;
  margin: 0 auto 10% auto;
  color: $base-font-color;
  padding: 10px 0;
}
.title {
  font-size: $font-size-other-title;
}
.news-list {
  margin: 2vw 0;
}
@media screen and (max-width: $media-query-small-max-width) {
  .news {
    width: 95%;
  }
}
@media screen and (max-width: $media-query-standard-max-width) {
  .news {
    width: 85%;
  }
}
</style>
