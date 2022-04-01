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
  data() {
    return {
      title: '',
      description: '',
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
          content: `${process.env.BASE_URL}/community/${this.$route.params.id}`,
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
          content: this.community.fields.image.fields.file.url,
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
  created() {
    this.title = `コミュニティー - ${this.community.fields.name}`
    this.description = `${this.title} - ${this.community.fields.about}`
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
