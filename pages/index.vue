<template>
  <div>
    <top id="top-top" :news="news" :important-news="importantNews" />
    <top-about-c-3 :c3-introduction="c3Introduction" class="component" />
    <top-community-link
      v-for="(community, idx) in eachCommunity"
      :id="idx"
      :key="idx"
      :community="community"
      class="component"
    />
    <top-work :works="works" class="component" />
    <top-blog :blog="blog" class="component" />
  </div>
</template>

<script>
import axios from 'axios'

import Top from '~/components/top/Top.vue'
import TopAboutC3 from '~/components/top/AboutC3.vue'
import TopBlog from '~/components/top/TopBlog.vue'
import TopCommunityLink from '~/components/top/TopCommunityLink.vue'
import TopWork from '~/components/top/TopWork.vue'

import sdkClient from '@/plugins/contentful.js'
import { formatToybox } from '~/utils/toybox'

export default {
  components: {
    TopAboutC3,
    Top,
    TopCommunityLink,
    TopBlog,
    TopWork,
  },
  async asyncData({ error }) {
    try {
      return Promise.all([
        await sdkClient.getEntries({
          content_type: 'c3Introduction',
        }),
        await sdkClient.getEntries({
          content_type: 'eachCommunity',
          order: 'fields.name',
        }),
        await sdkClient.getEntries({
          content_type: 'news',
        }),
        await sdkClient.getEntries({
          content_type: 'blog',
          limit: 5,
        }),
        await axios.get(`${process.env.TOYBOX_API_BASE_URL}/works?limit=30`),
        await axios.get(`${process.env.TOYBOX_API_BASE_URL}/blogs?limit=5`),
      ]).then(
        ([
          c3Introduction,
          eachCommunity,
          news,
          blog,
          toyboxWork,
          toyboxblog,
        ]) => {
          const communities = []
          const selectNews = []
          for (let i = 0; i < eachCommunity.items.length; i++) {
            communities.push({
              id: eachCommunity.items[i].sys.id,
              field: {
                name: eachCommunity.items[i].fields.name,
                domain: eachCommunity.items[i].fields.domain,
                image: eachCommunity.items[i].fields.image.fields.file.url,
                simage: eachCommunity.items[i].fields.smallimg.fields.file.url,
              },
            })
          }
          for (let i = 0; i < news.items.length; i++) {
            if (news.items[i].fields.important) {
              selectNews.push(news.items[i])
            }
          }
          const latestNews = news.items.slice(0, 5)

          const works = toyboxWork.data.works.map((work) => {
            return {
              id: work.id,
              title: work.title,
              thumbnail: work.thumbnail.url,
            }
          })

          return {
            c3Introduction:
              c3Introduction.items[0].fields.summaryOfIntroduction,
            eachCommunity: communities,
            news: latestNews,
            importantNews: selectNews,
            blog: toyboxblog.data.blogs
              .map(formatToybox)
              .concat(blog.items)
              .slice(0, 5),
            works,
          }
        }
      )
    } catch (e) {
      error({
        errorCode: e.errorCode,
        message: e.message,
      })
    }
  },
}
</script>

<style lang="scss" scoped>
#top-top {
  max-width: 1900px;
  margin: 0 auto;
}
.component {
  margin: 20vw auto;
  width: 90vw;
  max-width: 1000px;
}
@media screen and (max-width: $media-query-standard-max-width) {
  .component {
    width: 80%;
  }
}
@media screen and (max-width: $media-query-small-max-width) {
  .component {
    width: 90%;
  }
}
</style>
