<template>
  <div class="wraper">
    <div class="title">
      <p>
        ブログ
      </p>
    </div>
    <div class="carousel-nav">
      <hooper :settings="hooperSettings">
      <slide 
        v-for="(slide, idx) in slides"
        :key="idx"
      >
        <img :src="slide.img" @click="toPage(slide.id)"/>
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </hooper>
    </div>
    <div style="height: 500px"></div>
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
  data() {
    return {
      slides: [
        { id: '100', link: '#1', img: 'https://simo-c3.github.io/image_url/CG.png' },
        { id: '2', link: '#2', img: 'https://simo-c3.github.io/image_url/Game.png' },
        { id: '3', link: '#3', img: 'https://simo-c3.github.io/image_url/MediaArt.jpg' },
        { id: '4', link: '#4', img: 'https://simo-c3.github.io/image_url/hack.jpg' },
        { id: '5', link: '#5', img: 'https://simo-c3.github.io/image_url/Game.png' }
      ],
      hooperSettings: {
        infiniteScroll: true,
        centerMode: false,
        keysControl: false,
        wheelControl: false,
        hoverPause: false,
        autoPlay: true,
        playSpeed: 5000,
        transition: 1000
      },
    }
  },
  methods: {
    toPage(id) {
      this.$router.push({path: '/blog/' + id})
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: $font-size-contents-title;
  color: $base-font-color;
  text-align: center;
}
.wraper {
  width: 100%;
  height: min(37.5vw, 720px);
  position: relative;
}
.carousel-nav {
  margin: auto;
  box-shadow: 15px 15px 25px #00000035;
  background: transparent;
  width: min(50vw, 950px);
  height: inherit;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 12px;
}
*:focus {
  outline: none;
}
.hooper {
  margin: 0;
  padding: 0;
  width: inline;
  height: inherit;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  border-radius: 12px;
  object-fit:cover;
}
::v-deep .hooper-list {
  border-radius: 12px;
  object-fit:cover;
}
.hooper img {
  margin: 0;
  padding: 0;
  background-color: aqua;
  width: min(50vw, 950px);
  height: min(37.5vw, 720px);
}
::v-deep .hooper-pagination {
  bottom: max(-50px, -6vw);
}
::v-deep .hooper-indicator {
  margin: 0 min(20px, 1.5vw);
  padding: 0;
  width: min(16px, 2vw);
  height: min(16px, 2vw);
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
::v-deep .hooper-next {
  right: -60px;
}
::v-deep .hooper-prev {
  left: -60px;
}
::v-deep .hooper-next,
::v-deep .hooper-prev {
  border-radius: 50%;
  padding: 0;
  margin: 0;
}
::v-deep .hooper-next svg,
::v-deep .hooper-prev svg {
  opacity: 0.3;
  transform: scale(3.4);
}
::v-deep .hooper-next svg:hover,
::v-deep .hooper-prev svg:hover {
  opacity: 0.6;
}
::v-deep .hooper-next:hover,
::v-deep .hooper-prev:hover {
  transition: 0.3s ease;
}

/* タブレット↓ */
@media screen and (max-width: 1000px) {
  .carousel-nav {
    width: min(70vw, 680px);
    height: min(50vw, 680px);
  }
  .hooper img {
    width: min(70vw, 680px);
    height: min(50vw, 680px);
  }
  ::v-deep .hooper-next,
  ::v-deep .hooper-prev {
    width: 80px;
    height: 80px;
  }
  ::v-deep .hooper-next {
    right: 0px;
  }
  ::v-deep .hooper-prev {
    left: 0px;
  }
  ::v-deep .hooper-next:hover,
  ::v-deep .hooper-prev:hover {
    transition: 0s;
    height: min(50vw, 680px);
    background-color: rgba(255, 255, 255, 0.8);
  }
  ::v-deep .hooper-next:hover {
    border-radius: 0 12px 12px 0;
  }
  ::v-deep .hooper-prev:hover {
    border-radius: 12px 0 0 12px;
  }
}
</style>