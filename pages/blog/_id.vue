<template>
  <div class="blog">
    <base-entry-detail
      :page-name="'ブログ'"
      :title="blog_item.fields.title"
      :tags="blog_item.fields.tags"
      :img="blog_item.fields.thumbnail.fields.file.url"
      :body="blog_item.fields.body"
      :updated-at="blog_item.sys.updatedAt"
      :recent-blog="recent_blog"
      :users="blog_item.fields.user"
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
  async asyncData({ store, params, error }) {
    try {
      return Promise.all([
        await sdkClient.getEntry(params.id),
        await sdkClient.getEntries({ content_type: 'blog', limit: 3 }),
      ]).then(([blog, recentBlog]) => {
        store.commit('breadcrumbs/setBreadcrumbs', {
          breadcrumbs: [
            { url: '/', text: 'ホーム' },
            { url: '/blog', text: 'ブログ一覧' },
            {
              url: `/blog/${params.id}`,
              text: blog.fields.title,
            },
          ],
        })
        return {
          blog_item: blog,
          recent_blog: recentBlog.items,
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
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'og-url',
          property: 'og:url',
          content: `${process.env.BASE_URL}blog/${this.$route.params.id}/`,
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
        {
          hid: 'og-image',
          property: 'og:image',
          content: this.img_url,
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${process.env.BASE_URL}blog/${this.$route.params.id}/`,
        },
      ],
    }
  },
  created() {
    this.title = `ブログ - ${this.blog_item.fields.title}`
    this.description = `${this.title} - ${this.blog_item.fields.digest}`
    this.img_url = `http:${this.blog_item.fields.thumbnail.fields.file.url}`
  },
})
</script>

<style lang="scss" scoped>
.blog {
  max-width: 1920px;
  margin: 0 auto;
}
</style>
