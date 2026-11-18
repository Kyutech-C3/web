<template>
  <div class="community">
    <base-breadcrumbs />
    <community-detail
      :title="community.name"
      :img-webm="community.image"
      :img-mp4="community.smallimg"
      :description="community.about"
    />
  </div>
</template>

<script>
import CommunityDetail from '@/components/CommunityDetail.vue'
import BaseBreadcrumbs from '~/components/commons/BaseBreadcrumbs.vue'

import { getCommunity } from '~/utils/contents'

export default {
  components: { CommunityDetail, BaseBreadcrumbs },
  async asyncData({ params, store, error }) {
    try {
      return Promise.all([await getCommunity(params.id)]).then(
        ([community]) => {
          store.commit('breadcrumbs/setBreadcrumbs', {
            breadcrumbs: [
              { url: '/', text: 'ホーム' },
              {
                url: `/community/${params.id}`,
                text: community.name,
              },
            ],
          })
          return {
            community,
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
  data() {
    return {
      title: '',
      description: '',
      img_url: '',
    }
  },
  head() {
    this.title = `${this.community.name}`
    this.description = `${this.title} - ${this.community.about}`
    this.img_url = `${process.env.BASE_URL}${this.community.image.slice(1)}`
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
          content: `${process.env.BASE_URL}community/${this.$route.params.id}`,
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
          href: `${process.env.BASE_URL}community/${this.$route.params.id}`,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.community {
  width: 70%;
  margin: 5% auto 20% auto;
  max-width: 1500px;
}
@media screen and (max-width: $media-query-standard-max-width) {
  .community {
    width: 90%;
  }
}
</style>
