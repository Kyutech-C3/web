<template>
  <div>
    <top-top :news="news" :important-news="importantNews" />
    <top-about-c-3 :c3-introduction="c3Introduction" class="component" />
    <top-about-community :about-community="aboutCommunity" class="component" />
    <top-community-link
      v-for="(community, idx) in eachCommunity"
      :id="idx"
      :key="idx"
      :each-community="eachCommunity"
      :community="community"
      class="component"
    />
    <top-blog :blog="blog" class="component" />
  </div>
</template>

<script>
import TopTop from '~/components/TopTop.vue'
import TopAboutC3 from '~/components/TopAboutC3.vue'
import TopAboutCommunity from '~/components/TopAboutCommunity.vue'
import TopBlog from '~/components/TopBlog.vue'
import TopCommunityLink from '~/components/TopCommunityLink.vue'

import sdkClient from '@/plugins/contentful.js'

export default {
  components: {
    TopAboutCommunity,
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
          content_type: 'aboutCommunity',
        }),
        await sdkClient.getEntries({
          content_type: 'eachCommunity',
        }),
        await sdkClient.getEntries({
          content_type: 'news',
        }),
        await sdkClient.getEntries({
          content_type: 'blog',
          limit: 5,
        }),
      ]).then(([c3Introduction, aboutCommunity, eachCommunity, news, blog]) => {
        const communities = []
        const selectNews = []
        const latestNews = []
        for (let i = 0; i < eachCommunity.items.length; i++) {
          communities.push({
            id: eachCommunity.items[i].sys.id,
            field: {
              name: eachCommunity.items[i].fields.name,
              about: eachCommunity.items[i].fields.about,
              image: eachCommunity.items[i].fields.image.fields.file.url,
            },
          })
        }
        for (let i = 0; i < news.items.length; i++) {
          if (news.items[i].fields.important) {
            selectNews.push(news.items[i])
          }
        }
        for (let i = 0; i < 5; i++) {
          latestNews.push(news.items[i])
        }
        return {
          c3Introduction: c3Introduction.items[0].fields.summaryOfIntroduction,
          aboutCommunity: aboutCommunity.items[0].fields.about,
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
.component {
  margin: 10vw auto;
  width: 75vw;
  max-width: 1500px;
}
</style>
