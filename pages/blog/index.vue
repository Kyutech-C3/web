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
  async asyncData({ store }) {
    await store.commit('breadcrumbs/setBreadcrumbs', {
      breadcrumbs: [
        { url: '/', text: 'ホーム' },
        { url: '/blog', text: 'ブログ一覧' },
      ],
    })
    return (
      Promise.all([
        await sdkClient.getEntries({
          content_type: 'blog',
        }),
      ])
        .then(([blog]) => {
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
        .catch(console.error)
    )
  },
  head() {
    return {
      title: `ブログ | 一覧`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `ブログ | 一覧`,
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
  padding: 50px 0;
}
.title {
  font-size: $font-size-other-title;
}
.blog-list {
  margin: 2vw 0;
}
</style>
