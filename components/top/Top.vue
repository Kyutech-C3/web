<template>
  <div class="wrap">
    <div class="left-wrap">
      <!-- トップタイトル(Composite Computer Club) -->
      <div class="top-title">
        <div class="top-title-text">Composite</div>
        <div class="top-title-text">Computer</div>
        <div class="top-title-text">Club</div>
      </div>
      <!-- トップニュース(pc) -->
      <div class="top-news pc">
        <div class="top-news__flex-wrap">
          <div class="top-news__title">お知らせ</div>
          <nuxt-link class="top-news__link" to="/news/">一覧を見る</nuxt-link>
        </div>
        <div class="top-news__slide">
          <base-button
            v-for="(item, index) in news"
            :key="index"
            :to="`/news/` + item.sys.id"
            :animation="'rightToRight'"
          >
            <div class="top-news__slide-item">
              {{ dateFormatter(item.sys.updatedAt) + ' ' + item.fields.title }}
            </div>
          </base-button>
        </div>
      </div>
    </div>
    <div class="right-wrap">
      <!-- カルーセル -->
      <div class="carousel-nav">
        <hooper :settings="hooperSettings">
          <slide
            v-for="(content, idx) in importantNews"
            :key="idx"
            @touchstart="mobileTouchStart"
            @touchend="mobileTouchEnd"
          >
            <carousel-item
              :link-url="`/news/${content.sys.id}`"
              :image-url="content.fields.thumbnail.fields.file.url"
              :title="content.fields.title"
              :tags="content.fields.tags"
              :users="content.fields.user"
              :updated-at="content.sys.updatedAt"
              class-name="link-to-news"
            />
          </slide>
          <hooper-navigation
            v-if="!$device.isMobileOrTablet"
            slot="hooper-addons"
          ></hooper-navigation>
          <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
      </div>
      <!-- トップニュース(sp) -->
      <div class="top-news sp">
        <div class="top-news__flex-wrap">
          <div class="top-news__title">お知らせ</div>
          <nuxt-link class="top-news__link" to="/news/">一覧を見る</nuxt-link>
        </div>
        <div class="top-news__slide">
          <base-button
            v-for="(item, index) in news"
            :key="index"
            :to="`/news/` + item.sys.id"
            :animation="'rightToRight'"
          >
            <div class="top-news__slide-item">
              {{ dateFormatter(item.sys.updatedAt) + ' ' + item.fields.title }}
            </div>
          </base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
  Navigation as HooperNavigation,
} from 'hooper'
import 'hooper/dist/hooper.css'
import BaseButton from '@/components/commons/BaseButton.vue'
import CarouselItem from '~/components/commons/CarouselItem.vue'

export default {
  components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation,
    BaseButton,
    CarouselItem,
  },
  props: {
    news: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
    importantNews: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      hooperSettings: {
        infiniteScroll: true,
        centerMode: true,
        keysControl: false,
        wheelControl: false,
        autoPlay: true,
        mouseDrag: false,
        touchDrag: true,
        hoverPause: true,
        playSpeed: 5000,
        transition: 1000,
        sleep: (waitTime) =>
          new Promise((resolve) => setTimeout(resolve, waitTime)),
      },
      windowWidth: window.innerWidth,
    }
  },
  mounted() {
    window.addEventListener('resize', this.resizeWindow)
  },
  methods: {
    dateFormatter(date) {
      date = new Date(date)
      return (
        date.getFullYear() +
        '/' +
        (date.getMonth() + 1) +
        '/' +
        date.getDate() +
        '  ' +
        date.getHours() +
        ':' +
        date.getMinutes() +
        ':' +
        date.getSeconds()
      )
    },
    mobileTouchStart() {
      if (!this.$device.isDesktop) {
        this.playSpeed = 0
        this.transition = 0
        this.autoPlay = false
      }
    },
    mobileTouchEnd() {
      this.sleep(700)
      this.playSpeed = 5000
      this.transition = 1500
      this.autoPlay = true
    },
    resizeWindow() {
      this.windowWidth = window.innerWidth
    },
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  font-family: $font-family-contens;
  margin: 0;
  background: $white;
  color: $gray;
  justify-content: space-between;
  max-width: 1920px;
  user-select: none;
  display: flex;
}

/* タブレット↓ */
@media screen and (max-width: $media-query-standard-max-width) {
  .wrap {
    display: inherit;
  }
}

/*                 */
/*  トップタイトル  */
/*                 */
.top-title-text {
  font-size: min(120px, 6vw);
  font-weight: 800;
  font-family: $font-family-title;
  display: flex;
}
.top-title {
  padding: min(50px, 4vw) min(40px, 3.8vw) min(100px, 5.3vw) min(90px, 4.7vw);
  display: inherit;
}

/* タブレット↓ */
@media screen and (max-width: $media-query-standard-max-width) {
  .top-title {
    padding: 2.5vw 4vw;
    display: flex;
    text-align: center;
  }
  .top-title-text {
    margin: 0 5px;
  }
}

/*                 */
/*  トップニュース  */
/*                 */
.top-news {
  box-shadow: 0 0 8px #00000029;
  margin: 0;
  padding: min(40px, 4vw) min(70px, 4.5vw) min(20px, 2vw) min(70px, 4.5vw);
  border-radius: 0 20px 20px 0;
  --top-news-slide-item-height: min(7vw, 60px);

  a {
    font-size: min(24px, 1.3vw);
  }

  &__flex-wrap {
    display: flex;
    justify-content: space-between;
    vertical-align: middle;
  }

  &__title {
    margin: 0;
    padding: 0;
    width: 70%;
    font-size: clamp(12px, 3vw, 32px);
  }

  &__link {
    font-size: min(24px, 2vw);
    text-align: right;
    color: $gray;
  }

  &__slide {
    height: calc(var(--top-news-slide-item-height) + 15px);
    margin: min(30px, 2.5vw) 0;
    position: relative;
    overflow: hidden;
    isolation: isolate;
    width: 100%;

    @keyframes slideAnime {
      0% {
        top: -200%;
      }
      2% {
        top: 0;
      }
      19% {
        top: 0;
      }
      20% {
        top: 200%;
      }
      100% {
        top: 200%;
      }
    }

    a {
      position: absolute;
      top: -200%;
      left: 0;
      animation: slideAnime 30s ease infinite;
      height: var(--top-news-slide-item-height);
      padding: 5px min(30px, 1.5vw);
    }
    a:nth-of-type(1) {
      animation-delay: 0s;
    }
    a:nth-of-type(2) {
      animation-delay: 6s;
    }
    a:nth-of-type(3) {
      animation-delay: 12s;
    }
    a:nth-of-type(4) {
      animation-delay: 18s;
    }
    a:nth-of-type(5) {
      animation-delay: 24s;
    }
  }

  &__slide-item {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    text-overflow: ellipsis;
    white-space: normal;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }
}
.sp {
  display: none;
}
/* タブレット↓ */
@media screen and (max-width: $media-query-standard-max-width) {
  .top-news {
    margin-top: 10vw;
    padding: 2vw 4vw;
    width: min(65vw, 500px);
    border-radius: 0 12px 12px 0;

    a {
      font-size: max(2vw, 12px);
      width: 94%;
    }
  }
  .pc {
    display: none;
  }
  .sp {
    display: block;
  }
}

/*                 */
/*    カルーセル    */
/*                 */
.carousel-nav {
  box-shadow: 8px 8px 8px #00000029;
  background: transparent;
  margin: min(60px, 3.1vw) min(60px, 2.9vw) min(100px, 5.3vw) min(20px, 1vw);
  width: min(50vw, 950px);
  height: min(37.5vw, 720px);
  border-radius: 20px;
}
*:focus {
  outline: none;
}
.hooper {
  margin: 0;
  padding: 0;
  width: inline;
  height: 100%;
  position: relative;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
::v-deep .hooper-list {
  overflow: hidden;
  isolation: isolate;
  margin: 0;
  padding: 0;
  border-radius: 20px;
}
::v-deep .hooper-pagination {
  bottom: max(-50px, -6vw);
}
::v-deep .hooper-indicator {
  margin: 0 min(20px, 1.5vw);
  padding: 0;
  width: min(16px, 1vw);
  height: min(16px, 1vw);
  border-radius: 50%;
  background: $gray;
  opacity: 0.3;
}
::v-deep .hooper-indicator:hover,
::v-deep .hooper-indicator.is-active {
  background: $gray;
  opacity: 0.6;
  transition: 0.3s ease;
}
::v-deep .hooper-indicator.is-active {
  background: $gray;
  opacity: 0.9;
}
::v-deep .hooper-next,
::v-deep .hooper-prev {
  display: flex;
  align-items: center;
  justify-content: center;
  background: $white;
  opacity: 0.2;
  border-radius: 50px;
  margin: 0 10px;
  padding: 5px;
}
::v-deep .hooper-next:hover,
::v-deep .hooper-prev:hover {
  background: $white;
  opacity: 0.5;
  transition: 0.3s ease;
}
/* タブレット↓ */
@media screen and (max-width: $media-query-standard-max-width) {
  .carousel-nav {
    margin: auto;
    width: 90vw;
    height: 60vw;
    border-radius: 12px;
  }
  ::v-deep .hooper-list {
    border-radius: 12px;
  }
  ::v-deep .hooper-next,
  ::v-deep .hooper-prev {
    margin: 0 10px;
    padding: 0;
  }
}

@media screen and (max-width: $media-query-small-max-width) {
  .link-to-news {
    .news-info {
      height: 30%;
      min-height: 60px;
    }
  }
}
</style>
