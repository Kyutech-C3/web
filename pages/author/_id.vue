<template>
  <div class="author">
    <profile
      :id="user.sys.id"
      :name="user.fields.name"
      :image="user.fields.icon.fields.file.url"
      :introduction="user.fields.introduction"
      :links="links"
    />
    <div class="change">
      <div
        @click="isSelect = 'blog'"
        class="item1"
        :class="{ select: isSelect === 'blog' }"
      >
        ブログ
      </div>
      <!-- 後に実装 -->
      <!-- <div
        @click="isSelect = 'news'"
        class="item2"
        :class="{ select: isSelect === 'news' }"
      >
        お知らせ
      </div> -->
    </div>
    <card-list
      :card-items="userBlog.items"
      :entry-type="'blog'"
      class="blog-list"
    />
  </div>
</template>

<script>
import Vue from 'vue'

import Profile from '@/components/user/Profile.vue'
import CardList from '~/components/card/CardList.vue'

import sdkClient from '~/plugins/contentful.js'

export default Vue.extend({
  components: {
    Profile,
    CardList,
  },
  async asyncData({ store, params, error }) {
    try {
      return Promise.all([
        await sdkClient.getEntry(params.id),
        await sdkClient.getEntries({
          content_type: 'blog',
          order: '-sys.createdAt',
          'fields.user.sys.id': params.id,
        }),
      ]).then(([user, userBlog]) => {
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
          links.github = user.fields.gitHub
        }
        urlSplit = user.fields.zenn.split('/')
        if (urlSplit[3] !== '') {
          links.zenn = user.fields.zenn
        }
        urlSplit = user.fields.homePage.split('/')
        if (urlSplit[2] !== '') {
          links.homepage = user.fields.homePage
        }
        return {
          user,
          links,
          userBlog,
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
      title: '',
      description: '',
      img_url: '',
      isSelect: 'blog',
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
  padding: 3vw 10% 7vw 10%;
  max-width: 1500px;
  margin: 0 auto;
}
.change {
  width: 70%;
  --change-height: 60px;
  height: var(--change-height);
  margin: 50px auto 20px auto;
  border-radius: 50px;
  border: 1px solid;
  border-color: $light-gray;
  overflow: hidden;
  display: flex;
}
.change .item1,
.item2 {
  font-size: $font-size-other-contents-description;
  // width: 50%;
  width: 100%;
  text-align: center;
  line-height: var(--change-height);
}
.change .select {
  background-color: $light-blue;
}
.blog-list {
  margin: 2vw 0;
}
@media screen and (max-width: $media-query-standard-max-width) {
  .author {
    padding: 3vw 5% 10vw 5%;
  }
}
@media screen and (max-width: $media-query-small-max-width) {
  .author {
    padding: 1vw 3% 10vw 3%;
  }
}
</style>
