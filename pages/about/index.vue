<template>
  <div class="about">
    <base-breadcrumbs />
    <div class="title">C3について</div>
    <img
      type="image/webp"
      src="@/assets/image/s_logo.webp"
      class="about-logo"
      loading="lazy"
    />

    <!-- マークダウン -->
    <markdown-view :markdown-text="c3_introduction" class="markdown" />

    <!-- 分野 -->
    <h1 class="about__areas">各分野について</h1>
    <div class="about__areas-links">
      <nuxt-link
        v-for="(area, index) in areas_data"
        :key="index"
        :to="area.link"
        class="about__areas-link"
      >
        <div>
          <font-awesome-icon :icon="area.icon" class="about__areas-link-icon" />
          <span>{{ area.name }}</span>
        </div>
      </nuxt-link>
    </div>

    <!-- 作品 -->
    <h1 class="about__work">作品</h1>
    <work-link :works="works" class="about__work-link" />
  </div>
</template>

<script>
import axios from 'axios'

import MarkdownView from '~/components/commons/MarkdownView.vue'
import BaseBreadcrumbs from '~/components/commons/BaseBreadcrumbs.vue'
import WorkLink from '~/components/WorkLink.vue'

import sdkClient from '~/plugins/contentful.js'

export default {
  components: {
    MarkdownView,
    BaseBreadcrumbs,
    WorkLink,
  },
  async asyncData({ store, error }) {
    try {
      return Promise.all([
        await sdkClient.getEntries({ content_type: 'c3Introduction' }),
        await axios.get(`${process.env.TOYBOX_API_BASE_URL}/works?limit=30`),
      ]).then(([about, toyboxWork]) => {
        store.commit('breadcrumbs/setBreadcrumbs', {
          breadcrumbs: [
            { url: '/', text: 'ホーム' },
            { url: '/about', text: 'C3について' },
          ],
        })

        const works = toyboxWork.data.works.map((work) => {
          return {
            id: work.id,
            title: work.title,
            thumbnail: work.thumbnail.url,
          }
        })

        return {
          c3_introduction: about.items[0].fields.introduction,
          c3_introduction_digest: about.items[0].fields.summaryOfIntroduction,
          works,
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
      title: 'C3について',
      description: '',
      areas_data: [
        {
          name: 'GAME',
          link: '/community/21AY3pJOP214Gsw1d9u6cD',
          icon: 'gamepad',
        },
        {
          name: '3DCG',
          link: '/community/5Ay58j7CHdYFqKShRbr5tD',
          icon: 'cubes',
        },
        {
          name: 'HACK',
          link: '/community/39t5DaMrgq579LDvqWGKZK',
          icon: 'laptop-code',
        },
        {
          name: '2DCG',
          link: '/community/1q0aXzj2r1O0pC5soNRQok',
          icon: 'palette',
        },
        {
          name: 'MUSIC',
          link: '/community/mlIRfpRrISVzKc6K0l181',
          icon: 'music',
        },
      ],
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
          content: `${process.env.BASE_URL}about`,
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
      link: [
        {
          hid: 'canonical',
          rel: 'canonical',
          href: `${process.env.BASE_URL}about`,
        },
      ],
    }
  },
  created() {
    this.description = this.c3_introduction_digest
  },
}
</script>

<style lang="scss" scoped>
.about {
  width: 70%;
  max-width: 1500px;
  margin: 0 auto 100px auto;
  padding: 10px 0;
  color: $base-font-color;

  &__areas {
    width: fit-content;
    margin: 200px auto 50px auto;

    &-links {
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: clamp(10px, 2vw, 50px);
    }

    &-link {
      width: clamp(120px, 20vw, 170px);
      height: clamp(120px, 20vw, 170px);
      display: flex;
      align-items: center;
      border-radius: clamp(20px, 4.5vw, 30px);
      color: $base-font-color;
      text-decoration: none;
      user-select: none;

      &:hover {
        background-color: $bg-hover-color;
      }

      div {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        span {
          font-size: $base_font_size * 2.3;
          margin-top: clamp(10px, 3vw, 20px);
          text-align: center;
        }
      }

      &-icon {
        width: clamp(45px, 4vw, 55px);
        height: clamp(45px, 4vw, 55px);
      }
    }
  }

  &__work {
    width: fit-content;
    margin: 200px auto 40px auto;
  }

  &__work-link {
    margin-bottom: 200px;
  }
}

.title {
  font-size: $font-size-other-title;
}

.about-logo {
  display: block;
  width: 200px;
  height: auto;
  margin: 5vw auto;
}

.markdown {
  font-size: $font-size-other-contents-description;
}

@media screen and (max-width: $media-query-standard-max-width) {
  .about {
    width: 90%;
  }
}
</style>
