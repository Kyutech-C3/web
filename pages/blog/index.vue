<template>
  <div class="blog">
    <base-breadcrumbs />
    <div class="title">ブログ</div>
    <card-list :card-items="entryList" :entry-type="'blog'" class="blog-list" />
    <base-pagination
      v-if="totalPages > 1"
      :current-page="currentPage"
      :total-pages="totalPages"
      @page-change="onPageChange"
    />
  </div>
</template>

<script>
import axios from 'axios'

import CardList from '~/components/card/CardList.vue'
import BaseBreadcrumbs from '~/components/commons/BaseBreadcrumbs.vue'
import BasePagination from '~/components/commons/BasePagination.vue'

import sdkClient from '@/plugins/contentful.js'

import { formatToybox } from '~/utils/toybox'

const ITEMS_PER_PAGE = 10

export default {
  components: {
    CardList,
    BaseBreadcrumbs,
    BasePagination,
  },
  async asyncData({ store, error, query }) {
    try {
      const currentPage = parseInt(query.page) || 1
      const limit = ITEMS_PER_PAGE

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
        await axios.get(`${process.env.TOYBOX_API_BASE_URL}/blogs`, {
          params: {
            limit,
            page: currentPage,
          },
        }),
      ]).then(([ctfResult, toyboxResult]) => {
        const toyboxBlogs = toyboxResult.data.blogs.map(formatToybox)
        const toyboxTotal =
          toyboxResult.data.total || toyboxResult.data.blogs.length
        const ctfBlogs = ctfResult.items
        const entryList = toyboxBlogs.concat(ctfBlogs).sort((a, b) => {
          const createdAtA = new Date(a?.sys?.createdAt || 0)
          const createdAtB = new Date(b?.sys?.createdAt || 0)
          return createdAtB - createdAtA
        })
        const totalItems = toyboxTotal + ctfResult.total
        const totalPages = Math.ceil(totalItems / limit)
        return {
          entryList,
          currentPage,
          totalPages,
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
      currentPage: 1,
      totalPages: 1,
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
  watchQuery: ['page'],
  methods: {
    onPageChange(page) {
      this.$router.push({
        path: '/blog',
        query: { page },
      })
    },
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
