<template>
  <div class="blog">
    <base-breadcrumbs />
    <div class="title">Blog</div>
    <base-entry-list :entry-list="entry_list" class="blog-list" />
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
          { url: '/blog', text: 'ブログ一覧' },
        ],
      })
      return Promise.all([
        await sdkClient.getEntries({
          content_type: 'blog',
        }),
      ]).then(([blog]) => {
        const resEntryList = []
        // eslint-disable-next-line no-console
        console.log(blog.items)
        for (let i = 0; i < blog.items.length; i++) {
          resEntryList.push({
            id: blog.items[i].sys.id,
            title: blog.items[i].fields.title,
            date: blog.items[i].sys.updatedAt,
            contents: blog.items[i].fields.digest,
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
.blog {
  width: 70%;
  max-width: 1500px;
  margin: 0 auto;
  color: $base-font-color;
  padding: 10px 0;
}
.title {
  font-size: $font-size-other-title;
}
.blog-list {
  margin: 2vw 0;
}
</style>
