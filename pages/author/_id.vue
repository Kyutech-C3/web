<template>
  <div class="author">
    <profile
      :id="user.sys.id"
      :name="user.fields.name"
      :image="user.fields.icon.fields.file.url"
      :introduction="user.fields.introduction"
      :links="links"
    />
  </div>
</template>

<script>
import Vue from 'vue'

import Profile from '@/components/user/Profile.vue'

import sdkClient from '~/plugins/contentful.js'

export default Vue.extend({
  components: {
    Profile,
  },
  async asyncData({ store, params, error }) {
    try {
      return Promise.all([await sdkClient.getEntry(params.id)]).then(
        ([user]) => {
          store.commit('breadcrumbs/setBreadcrumbs', {
            breadcrumbs: [
              { url: '/', text: 'ホーム' },
              { url: '/author', text: 'ユーザー一覧' },
              {
                url: `/author/${params.id}`,
                text: user.fields.name,
              },
            ],
          })
          console.log(user)
          const links = {}
          let urlSplit = user.fields.twitter.split('/')
          if (urlSplit[3] !== '') {
            links.twitter = user.fields.twitter
          }
          urlSplit = user.fields.qiita.split('/')
          if (urlSplit[3] !== '') {
            links.qiita = user.fields.qiita
          }
          urlSplit = user.fields.gitHub.split('/')
          if (urlSplit[3] !== '') {
            links.gitHub = user.fields.gitHub
          }
          urlSplit = user.fields.zenn.split('/')
          if (urlSplit[3] !== '') {
            links.zenn = user.fields.zenn
          }
          urlSplit = user.fields.homePage.split('/')
          if (urlSplit[2] !== '') {
            links.homepage = user.fields.homePage
          }
          console.log(urlSplit[3])
          return {
            user,
            links,
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
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'og-url',
          property: 'og:url',
          content: `${process.env.BASE_URL}/author/${this.$route.params.id}`,
        },
        {
          hid: 'og-title',
          property: 'og:title',
          content: `author - ${this.title}`,
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
          content: this.img_url,
        },
      ],
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${process.env.BASE_URL}/author/${this.$route.params.id}`,
        },
      ],
    }
  },
  created() {
    this.title = `Author - ${this.user.fields.name}`
    this.description = `${this.title} - ${this.user.fields.introduction}`
    this.img_url = `http:${this.user.fields.icon.fields.file.url}`
  },
})
</script>

<style lang="scss" scoped>
.author {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - min(40vw, 120px));
  padding: 1vw 10% 7vw 10%;
  max-width: 1500px;
  margin: 0 auto;
}
@media screen and (max-width: $media-query-standard-max-width) {
  .author {
    padding: 0 5% 10vw 5%;
  }
}
@media screen and (max-width: $media-query-small-max-width) {
  .author {
    padding: 0 3% 10vw 3%;
  }
}
</style>
