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
      <div class="top-news-nav pc">
        <div class="top-news-flex-wrap">
          <div class="top-news-title">お知らせ</div>
          <div class="all-news-link">
            <nuxt-link to="/news/">一覧を見る</nuxt-link>
          </div>
        </div>
        <div class="top-news slide">
          <base-button
            v-for="(item, index) in news"
            :key="index"
            :to="`/news/` + item.sys.id"
            :animation="'rightToRight'"
          >
            <div class="slide-item">
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
            <nuxt-link id="link-to-news" :to="`/news/${content.sys.id}/`">
              <div class="img-wrapper">
                <img
                  type="image"
                  :src="`${content.fields.thumbnail.fields.file.url}?fm=webp&q=30`"
                  class="img"
                  rel="preload"
                  alt="img"
                />
              </div>

              <div class="news-info">
                <div class="news-title">{{ content.fields.title }}</div>
                <div v-if="windowWidth > 600" class="news-tags">
                  <div
                    v-for="(tag, index) in content.fields.tags"
                    :key="index"
                    class="link"
                  >
                    <tag :tag="tag.fields.name" class="tag" />
                  </div>
                </div>
                <users
                  v-if="windowWidth > 600"
                  :users="content.fields.user"
                  :color="'white'"
                  class="users"
                />
                <div class="news-date">
                  {{ dateFormatter(content.sys.updatedAt) }}
                </div>
              </div>
            </nuxt-link>
          </slide>
          <hooper-navigation slot="hooper-addons"></hooper-navigation>
          <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
      </div>
      <!-- トップニュース(sp) -->
      <div class="top-news-nav sp">
        <div class="top-news-flex-wrap">
          <div class="top-news-title">お知らせ</div>
          <div class="all-news-link">
            <nuxt-link to="/news/">一覧を見る</nuxt-link>
          </div>
        </div>
        <div class="top-news slide">
          <base-button
            v-for="(item, index) in news"
            :key="index"
            :to="`/news/` + item.sys.id"
            :animation="'rightToRight'"
          >
            <div class="slide-item">
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
import BaseButton from '@/components/BaseButton.vue'
import Users from '@/components/Users.vue'

export default {
  components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation,
    BaseButton,
    Users,
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
* {
  margin: 0;
  padding: 0;
}
.wrap {
  font-family: $font-family-contens;
  margin: 0;
  background: $white;
  color: $gray;
  justify-content: space-between;
  max-width: 1920px;
  user-select: none;
}

/* タブレット↑ */
@media screen and (min-width: 1001px) {
  .wrap {
    display: flex;
  }
}
/* タブレット↓ */
@media screen and (max-width: 1000px) {
  .wrap {
    display: inherit;
  }
}

/*                 */
/*  トップタイトル  */
/*                 */
.top-title-text {
  font-size: min(120px, 6.5vw);
  font-weight: 800;
  font-family: $font-family-title;
  display: flex;
}
/* タブレット↑ */
@media screen and (min-width: 1001px) {
  .top-title {
    padding: min(50px, 4vw) min(40px, 3.8vw) min(100px, 5.3vw) min(90px, 4.7vw);
    display: inherit;
  }
}
/* タブレット↓ */
@media screen and (max-width: 1000px) {
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
.top-news-nav {
  box-shadow: 0 0 8px #00000029;
}
.top-news-flex-wrap {
  display: flex;
  justify-content: space-between;
  vertical-align: middle;
}
.top-news-title {
  margin: 0;
  padding: 0;
  width: 70%;
  font-size: min(32px, 3vw);
}
.all-news-link {
  font-size: min(24px, 2vw);
  text-align: right;
}
.all-news-link a {
  color: $gray;
}
.top-news {
  height: min(7vw, 60px);
  padding: min(30px, 2.5vw) min(30px, 1.5vw);
}

.slide {
  position: relative;
  overflow: hidden;
}

.slide a {
  position: absolute;
  top: -100%;
  left: 0;
  animation: slideAnime 30s ease infinite;
  height: min(7vw, 60px);
  padding: 5px min(30px, 1.5vw);
  width: 90%;
}

.slide a:nth-of-type(1) {
  animation-delay: 0s;
}
.slide a:nth-of-type(2) {
  animation-delay: 6s;
}
.slide a:nth-of-type(3) {
  animation-delay: 12s;
}
.slide a:nth-of-type(4) {
  animation-delay: 18s;
}
.slide a:nth-of-type(5) {
  animation-delay: 24s;
}

@keyframes slideAnime {
  0% {
    top: -100%;
  }
  2% {
    top: 25px;
  }
  19% {
    top: 25px;
  }
  20% {
    top: 100%;
  }
  100% {
    top: 100%;
  }
}

/* タブレット↑ */
@media screen and (min-width: 1001px) {
  .top-news-nav {
    margin: 0;
    padding: min(40px, 4vw) min(70px, 4.5vw) min(20px, 2vw) min(70px, 4.5vw);
    border-radius: 0 20px 20px 0;
  }
  .top-news a {
    font-size: min(24px, 1.3vw);
  }
  .sp {
    display: none;
  }
}
/* タブレット↓ */
@media screen and (max-width: 1000px) {
  .top-news-nav {
    margin-top: min(14vw, 90px);
    padding: 2vw 4vw;
    width: min(65vw, 500px);
    border-radius: 0 12px 12px 0;
  }
  .top-news {
    padding: min(40px, 2vw) min(30px, 1.5vw);
  }
  .top-news a {
    font-size: 2vw;
    // padding: 3px min(30px, 1.5vw);
    height: min(5vw, 50px);
    width: min(60vw, 465px);
  }
  @keyframes slideAnime {
    0% {
      top: -100%;
    }
    2% {
      top: 2vw;
    }
    19% {
      top: 2vw;
    }
    20% {
      top: 100%;
    }
    100% {
      top: 100%;
    }
  }
  .pc {
    display: none;
  }
}

/*                 */
/*    カルーセル    */
/*                 */
.carousel-nav {
  box-shadow: 8px 8px 8px #00000029;
  background: transparent;
}
*:focus {
  outline: none;
}
.hooper {
  margin: 0;
  padding: 0;
  width: inline;
  height: inherit;
  display: inline-block;
  position: relative;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

#link-to-news {
  width: inherit;
  height: inherit;
  position: relative;

  .img-wrapper {
    position: relative;
    width: inherit;
    height: inherit;
    .img {
      position: absolute;
      object-fit: cover;
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-drag: none;
      -khtml-user-drag: none;
    }
  }
  .news-info {
    position: absolute;
    width: 100%;
    height: max(15vw, 160px);
    bottom: 0;
    background-color: $through-light-blue;
    color: $white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.2s 0s ease;

    .news-title,
    .news-tags,
    .news-date {
      width: fit-content;
    }
    .news-title {
      font-size: $base_font_size * 2.5;
      max-width: 70%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .news-tags {
      display: flex;
      justify-content: center;
      margin: 10px 0;
      font-size: $font-size-other-contents-other;

      .link {
        text-decoration: none;
        color: $white;

        .tag {
          margin: 0 3px;
          cursor: pointer;
        }
      }
    }
    .users {
      margin-bottom: 7px;
      justify-content: center;
    }

    .news-date {
      font-size: $base_font_size * 1.1;
    }
  }
}
::v-deep .hooper-list {
  margin: 0;
  padding: 0;
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
}
::v-deep .hooper-next:hover,
::v-deep .hooper-prev:hover {
  background: $white;
  opacity: 0.5;
  transition: 0.3s ease;
}
/* タブレット↑ */
@media screen and (min-width: 1001px) {
  .carousel-nav {
    margin: min(60px, 3.1vw) min(60px, 2.9vw) min(100px, 5.3vw) min(20px, 1vw);
    width: min(50vw, 950px);
    height: min(37.5vw, 720px);
    border-radius: 20px;
  }
  .hooper img {
    width: min(50vw, 950px);
    height: min(37.5vw, 720px);
    border-radius: 20px;
  }
  ::v-deep .hooper-list {
    border-radius: 20px;
  }
  ::v-deep .hooper-next,
  ::v-deep .hooper-prev {
    margin: 0 10px;
    padding: 5px;
  }
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
  #link-to-news {
    .news-info {
      height: 30%;
      min-height: 60px;
    }
  }
}
</style>

<style>
.slide-item {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  white-space: normal;
  overflow: hidden;
  -webkit-box-orient: vertical;
}
</style>
