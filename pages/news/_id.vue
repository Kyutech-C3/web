<template>
  <div class="news">
    <entry-detail
      :page-name="'お知らせ'"
      :title="news_item.fields.title"
      :tags="news_item.fields.tags"
      :img="news_item.fields.thumbnail.fields.file.url"
      :body="news_item.fields.body"
      :created-at="news_item.sys.createdAt"
      :updated-at="news_item.sys.updatedAt"
      :recent-blog="recent_news"
      :users="news_item.fields.user"
      :type="'news'"
    />
  </div>
</template>

<script>
import Vue from 'vue'

import EntryDetail from '~/components/EntryDetail.vue'

import sdkClient from '~/plugins/contentful.js'

export default Vue.extend({
  components: {
    EntryDetail,
  },
  async asyncData({ params, store, error, payload }) {
    if (payload) {
      return { news_item: payload }
    }
    try {
      return Promise.all([
        await sdkClient.getEntry(params.id),
        await sdkClient.getEntries({ content_type: 'news', limit: 3 }),
      ]).then(([news, recentNews]) => {
        store.commit('breadcrumbs/setBreadcrumbs', {
          breadcrumbs: [
            { url: '/', text: 'ホーム' },
            { url: '/news', text: 'お知らせ一覧' },
            {
              url: `/news/${params.id}`,
              text: news.fields.title,
            },
          ],
        })
        return {
          news_item: news,
          recent_news: recentNews.items,
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
      title: '',
      description: '',
      img_url: '',
    }
  },
  head() {
    this.title = `お知らせ - ${this.news_item.fields.title}`
    this.description = `${this.title} - ${this.news_item.fields.digest}`
    this.img_url = `http:${this.news_item.fields.thumbnail.fields.file.url}`
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
          content: `${process.env.BASE_URL}news/${this.$route.params.id}`,
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
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.img_url,
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${process.env.BASE_URL}news/${this.$route.params.id}`,
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.news {
  max-width: 1920px;
  margin: 0 auto;
}
</style>
