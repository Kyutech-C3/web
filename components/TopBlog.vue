<template>
  <div class="wrapper">
    <div class="title">
      <p>ブログ</p>
    </div>
    <div class="carousel-nav">
      <hooper :settings="hooperSettings">
        <slide v-for="(item, idx) in blog" :key="idx">
          <img
            :src="item.fields.thumbnail.fields.file.url"
            @click="toPage(item.sys.id)"
          />
        </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </hooper>
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

export default {
  components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation,
  },
  props: {
    blog: {
      type: Array,
      required: true,
      default() {
        return [
          {
            sys: {
              id: 'hoge',
            },
            fields: {
              publishedAt: '2020',
              title: 'hogehoge',
              thumbnail: {},
            },
          },
        ]
      },
    },
  },
  data() {
    return {
      hooperSettings: {
        infiniteScroll: true,
        centerMode: false,
        keysControl: false,
        wheelControl: false,
        hoverPause: false,
        autoPlay: true,
        playSpeed: 5000,
        transition: 1000,
      },
    }
  },
  methods: {
    toPage(id) {
      this.$router.push(`/blog/${id}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.title {
  font-size: $font-size-contents-title;
  color: $base-font-color;
  text-align: center;
}
.wrapper {
  height: min(37.5vw, 720px);
}
.carousel-nav {
  margin: auto;
  box-shadow: 15px 15px 25px #00000035;
  width: min(50vw, 950px);
  height: inherit;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0);
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
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  object-fit: cover;
}
::v-deep .hooper-list {
  border-radius: 20px;
  object-fit: cover;
}
.hooper img {
  margin: 0;
  padding: 0;
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

@media screen and (max-width: $media-query-standard-max-width) {
  .carousel-nav {
    width: min(70vw, 680px);
    height: min(50vw, 680px);
  }
  .hooper img {
    width: min(70vw, 680px);
    height: min(50vw, 680px);
  }
  ::v-deep .hooper-next svg,
  ::v-deep .hooper-prev svg {
    width: 80px;
    height: min(50vw, 680px);
    transform: scale(1);
  }
  ::v-deep .hooper-next,
  ::v-deep .hooper-prev {
    width: 80px;
    height: min(50vw, 680px);
  }
  ::v-deep .hooper-next {
    right: 0px;
    border-radius: 0 20px 20px 0;
  }
  ::v-deep .hooper-prev {
    left: 0px;
    border-radius: 20px 0 0 20px;
  }
  ::v-deep .hooper-next:hover,
  ::v-deep .hooper-prev:hover {
    transition: 0.1s;
    background-color: rgba(255, 255, 255, 0.8);
  }
}
</style>
