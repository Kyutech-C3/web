<template>
  <div>
    <base-entry-detail
      :title="blog_item.fields.title"
      :tags="blog_item.fields.tags"
      :img="blog_item.fields.thumbnail.fields.file.url"
      :body="blog_item.fields.body"
      :updated-at="blog_item.sys.updatedAt"
      :recent-blog="recent_blog"
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
      await sdkClient.getEntries({ content_type: 'blog', limit: 3 }),
    ]).then(([blog, recentBlog]) => {
      return {
        blog_item: blog,
        recent_blog: recentBlog.items,
      }
    })
  },
})
</script>
