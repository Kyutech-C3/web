<template>
  <div>
    <top-top :news="news" :important-news="importantNews" id="top-top" />
    <top-about-c-3 :c3-introduction="c3Introduction" class="component" />
    <top-community-link
      v-for="(community, idx) in eachCommunity"
      :id="idx"
      :key="idx"
      :community="community"
      class="component"
    />
    <top-blog :blog="blog" class="component" />
  </div>
</template>

<script>
import TopTop from '~/components/TopTop.vue'
import TopAboutC3 from '~/components/TopAboutC3.vue'
import TopBlog from '~/components/TopBlog.vue'
import TopCommunityLink from '~/components/TopCommunityLink.vue'

import sdkClient from '@/plugins/contentful.js'

export default {
  components: {
    TopAboutC3,
    TopTop,
    TopCommunityLink,
    TopBlog,
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
      ]).then(([c3Introduction, eachCommunity, news, blog]) => {
        const communities = []
        const selectNews = []
        const latestNews = []
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
        for (let i = 0; i < 2; i++) {
          // 応急処置 ==要修正==
          if (news.items.length < 2 && i === 1) {
            latestNews.push(news.items[i - 1])
          } else {
            latestNews.push(news.items[i])
          }
        }
        return {
          c3Introduction: c3Introduction.items[0].fields.summaryOfIntroduction,
          eachCommunity: communities,
          news: latestNews,
          importantNews: selectNews,
          blog: blog.items,
        }
      })
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
