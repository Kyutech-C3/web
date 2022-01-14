<template>
  <div>
    <top-top :news="news" />
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
  async asyncData({ env }) {
    return (
      Promise.all([
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
        }),
      ])
        .then(([c3Introduction, aboutCommunity, eachCommunity, news, blog]) => {
          const communities = []
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
          return {
            c3Introduction:
              c3Introduction.items[0].fields.summaryOfIntroduction,
            aboutCommunity: aboutCommunity.items[0].fields.about,
            eachCommunity: communities,
            news: news.items,
            blog: blog.items,
          }
        })
        // eslint-disable-next-line no-console
        .catch(console.error)
    )
  },
}
</script>
