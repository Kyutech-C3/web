<template>
  <div class="community">
    <base-breadcrumbs />
    <community-detail
      :title="community.fields.name"
      :img="community.fields.image.fields.file.url"
      :description="community.fields.about"
    />
  </div>
</template>

<script>
import CommunityDetail from '@/components/CommunityDetail.vue'

import sdkClient from '~/plugins/contentful.js'

export default {
  components: { CommunityDetail },
  async asyncData({ params, store }) {
    return Promise.all([await sdkClient.getEntry(params.id)]).then(
      ([community]) => {
        store.commit('breadcrumbs/setBreadcrumbs', {
          breadcrumbs: [
            { url: '/', text: 'ホーム' },
            {
              url: `/community/${params.id}`,
              text: community.fields.name,
            },
          ],
        })
        // eslint-disable-next-line no-console
        console.log(community)
        return {
          community,
        }
      }
    )
  },
  head() {
    return {
      title: `コミュニティー | ${this.community.fields.name}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `コミュニティー | ${this.community.fields.name} | ${this.community.fields.about}`,
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${process.env.BASE_URL}/community/${this.$route.params.id}`,
        },
      ],
    }
  },
}
</script>

<style scoped>
.community {
  width: 70%;
  padding: 50px 0;
  margin: 0 auto;
}
</style>
