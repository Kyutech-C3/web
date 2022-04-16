<template>
  <div class="news">
    <base-breadcrumbs />
    <div class="title">お知らせ</div>
    <base-entry-list
      :entry-list="entry_list"
      :entry-type="'news'"
      class="news-list"
    />
  </div>
</template>

<script>
import BaseEntryList from '@/components/BaseEntryList.vue'
import BaseBreadcrumbs from '@/components/BaseBreadcrumbs.vue'

import sdkClient from '@/plugins/contentful.js'

export default {
  components: {
    BaseEntryList,
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
        // eslint-disable-next-line no-console
        console.log(news.items)
        for (let i = 0; i < news.items.length; i++) {
          resEntryList.push({
            id: news.items[i].sys.id,
            title: news.items[i].fields.title,
            date: news.items[i].sys.updatedAt,
            contents: news.items[i].fields.digest,
          })
        }
        return {
          entry_list: resEntryList,
        }
      })
      // eslint-disable-next-line no-console
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
          hid: 'og-url',
          property: 'og:url',
          content: `${process.env.BASE_URL}/blog`,
        },
        {
          hid: 'og-title',
          property: 'og:title',
          content: this.title,
        },
        { hid: 'og-type', property: 'og:type', content: 'article' },
        {
          hid: 'og-description',
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
  width: 70%;
  max-width: 1500px;
  margin: 0 auto;
  color: $base-font-color;
  padding: 10px 0;
}
.title {
  font-size: $font-size-other-title;
}
.news-list {
  margin: 2vw 0;
}
</style>
