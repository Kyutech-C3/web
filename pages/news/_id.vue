<template>
  <div>
    <base-entry-detail
      :page-name="'お知らせ'"
      :title="news_item.fields.title"
      :tags="news_item.fields.tags"
      :img="news_item.fields.thumbnail.fields.file.url"
      :body="news_item.fields.body"
      :updated-at="news_item.sys.updatedAt"
      :recent-blog="recent_news"
    />
  </div>
</template>

<script>
import Vue from 'vue'

import BaseEntryDetail from '~/components/BaseEntryDetail.vue'

import sdkClient from '~/plugins/contentful.js'

export default Vue.extend({
  components: {
    BaseEntryDetail,
  },
  async asyncData({ params }) {
    return Promise.all([
      await sdkClient.getEntry(params.id),
      await sdkClient.getEntries({ content_type: 'news', limit: 3 }),
    ]).then(([news, recentNews]) => {
      return {
        news_item: news,
        recent_news: recentNews.items,
      }
    })
  },
  head() {
    return {
      title: `お知らせ | ${this.news_item.fields.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `お知らせ | ${this.news_item.fields.title} | ${this.news_item.fields.digest}`,
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${process.env.BASE_URL}/news/${this.$route.params.id}`,
        },
      ],
    }
  },
})
</script>
