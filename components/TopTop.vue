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
              <nuxt-link to="/news">一覧を見る</nuxt-link>
            </div>
          </div>
          <div class="top-news">
            <nuxt-link :to="'/news/' + news[0].sys.id">
              {{ getNewsDate + ' ' + news[0].fields.title }}
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="right-wrap">
        <!-- カルーセル -->
        <div class="carousel-nav">
          <hooper :settings="hooperSettings">
            <slide 
              v-for="(slide, idx) in slides"
              :key="idx"
            >
              <nuxt-link to="slides[idx].link">
                <img :src="slides[idx].img"/>
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
              <nuxt-link to="/news">一覧を見る</nuxt-link>
            </div>
          </div>
          <div class="top-news">
            <nuxt-link :to="`/news/` + news[0].sys.id">
              {{ getNewsDate + ' ' + news[0].fields.title }}
            </nuxt-link>
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
  Navigation as HooperNavigation
} from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  components: { 
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation
  },
  props: {
    news: {
      type: Array,
      require: true,
      default() {
        return [{
          sys: {
            id: "hoge"
          },
          fields: {
            publishedAt: "2020",
            title: 'hogehoge'
          },
        }]
      }
    }
  },
  data() {
    return {
      slides: [
        { link: '#1', img: '/carousel_1.png' },
        { link: '#2', img: '/carousel_2.png' },
        { link: '#3', img: '/carousel_3.png' },
        { link: '#4', img: '/carousel_4.png' },
        { link: '#5', img: '/carousel_5.png' }
      ],
      hooperSettings: {
        infiniteScroll: true,
        centerMode: true,
        keysControl: false,
        autoPlay: true,
        playSpeed: 5000,
        transition: 1500
      },
    }
  },
  computed: {
    getNewsDate() {
      const date = new Date(this.news[0].fields.publishedAt)
      const newsDate = date.getFullYear().toString() + "." + date.getMonth().toString() + "." + date.getDate().toString()
      // const newsDateTest = "hoge"
      return newsDate
    }
  }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap');
* {
  margin: 0;
  padding: 0;
}
.wrap {
  margin: 0;
  padding: 80px/*ヘッダーの高さ*/ 0 50px 0;
  background: $white;
  color: $gray;
  font-family: 'Inter', '游ゴシック';
  justify-content: space-between;
  max-width: 1920px;
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
.top-title {
  margin: 0;
}
.top-title-text {
  font-size: min(120px, 6.5vw);
  font-weight: 800;
  display: inherit;
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
  margin: 0;
  padding: min(40px, 3vw) min(30px, 1.5vw);
}
.top-news a {
  margin: 0;
  padding: min(20px, 2vw) min(40px, 3.8vw);
  text-decoration: none;
  color: $gray;
  border: solid $gray;
  border-width: min(2px, 0.1vw);
  border-radius: 50px;
  white-space: nowrap;
  display: block;
  width: 80%;
  text-align: center;
}
.top-news a:hover, .all-news-link a:hover {
  opacity: 0.5;
  transition: 0.3s ease;
}
/* タブレット↑ */
@media screen and (min-width: 1001px) {
  .top-news-nav {
    margin: 0;
    padding: min(40px, 4vw) min(40px, 3.8vw) min(20px, 2vw) min(70px, 4.5vw);
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
    margin-top: min(8vw, 60px);
    padding: 2vw 4vw;
    width: min(65vw, 500px);
    border-radius: 0 12px 12px 0;
  }
  .top-news a {
  font-size: 2vw
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
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}
.hooper img {
  margin: 0;
  padding: 0;
  object-fit: cover;
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
  background: $white;
  opacity: 0.2;
  border-radius: 50%;
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
@media screen and (max-width: 1000px) {
  .carousel-nav {
    margin: auto;
    width: min(88vw, 680px);
    height: min(88vw, 680px);
    border-radius: 12px;
  }
  .hooper img {
    width: min(88vw, 680px);
    height: min(88vw, 680px);
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
</style>
