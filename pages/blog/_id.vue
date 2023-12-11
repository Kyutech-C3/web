<template>
  <div class="blog">
    <entry-detail
      :page-name="'ブログ'"
      :title="blog_item.fields.title"
      :tags="blog_item.fields.tags"
      :img="blog_item.fields.thumbnail.fields.file.url"
      :body="blog_item.fields.body"
      :created-at="blog_item.sys.createdAt"
      :updated-at="blog_item.sys.updatedAt"
      :recent-blog="recent_blog"
      :users="blog_item.fields.user"
      :type="'blog'"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

import EntryDetail from '~/components/EntryDetail.vue'

import sdkClient from '~/plugins/contentful.js'
import { formatToybox } from '~/utils/toybox'

export default Vue.extend({
  components: {
    EntryDetail,
  },
  async asyncData({ store, params, error, payload }) {
    if (payload) {
      return { blog_item: payload }
    }

    try {
      return Promise.all([
        await sdkClient.getEntry(params.id),
        await sdkClient.getEntries({ content_type: 'blog', limit: 3 }),
        await axios.get(`${process.env.TOYBOX_API_BASE_URL}/blogs?limit=3`),
      ]).then(([blog, recentBlog, recentToyboxBlog]) => {
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
        const formattedRecentToyboxBlogs =
          recentToyboxBlog.data.blogs.map(formatToybox)
        return {
          blog_item: blog,
          recent_blog: formattedRecentToyboxBlogs
            .concat(recentBlog.items)
            .slice(0, 3),
        }
      })
    } catch (e) {
      try {
        return Promise.all([
          await axios.get(
            `${process.env.TOYBOX_API_BASE_URL}/blogs/${params.id}`
          ),
          await sdkClient.getEntries({ content_type: 'blog', limit: 3 }),
          await axios.get(`${process.env.TOYBOX_API_BASE_URL}/blogs?limit=3`),
        ]).then(([blog, recentBlog, recentToyboxBlog]) => {
          store.commit('breadcrumbs/setBreadcrumbs', {
            breadcrumbs: [
              { url: '/', text: 'ホーム' },
              { url: '/blog', text: 'ブログ一覧' },
              {
                url: `/blog/${params.id}`,
                text: blog.data.title,
              },
            ],
          })
          const formattedRecentToyboxBlogs =
            recentToyboxBlog.data.blogs.map(formatToybox)

          return {
            blog_item: formatToybox(blog.data),
            recent_blog: formattedRecentToyboxBlogs
              .concat(recentBlog.items)
              .slice(0, 3),
          }
        })
      } catch (e) {
        error({
          errorCode: e.errorCode,
          message: e.message,
        })
      }
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
    this.title = `ブログ - ${this.blog_item.fields.title}`
    this.description = `${this.title} - ${this.blog_item.fields.digest}`
    this.img_url = `http:${this.blog_item.fields.thumbnail.fields.file.url}`
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.BASE_URL}blog/${this.$route.params.id}`,
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
          href: `${process.env.BASE_URL}blog/${this.$route.params.id}`,
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.blog {
  max-width: 1920px;
  margin: 0 auto;
}
</style>
<style lang="scss">
.markdown video {
  display: block;
  margin: auto;
  width: 60vw;
}

.named-fence-block.named-fence-block {
  position: relative;
  padding-top: 2em;
}

.named-fence-filename {
  position: absolute;
  top: 0;
  left: 1em;
  padding: 0 6px;
  color: $black;
  background-color: $light-gray;
  border-radius: 0 0 4px 4px;
  opacity: 0.8;
}
</style>
