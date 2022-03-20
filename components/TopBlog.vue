<template>
  <div class="wrapper">
    <div class="title">ブログ</div>
    <div class="carousel-nav">
      <hooper :settings="hooperSettings">
        <slide v-for="(item, idx) in blog" :key="idx">
          <nuxt-link id="link-to-blog" :to="'blog/' + item.sys.id">
            <img :src="item.fields.thumbnail.fields.file.url" />
            <div class="blog-info">
              <div class="blog-title">{{ item.fields.title }}</div>
              <div class="blog-tags">
                <nuxt-link
                  v-for="(tag, index) in item.fields.tags"
                  :key="index"
                  :to="'/blog?tag=' + tag.fields.name"
                  class="link"
                >
                  <tag :tag="tag.fields.name" class="tag" />
                </nuxt-link>
              </div>
              <div class="blog-date">
                {{ dateFormatter(item.sys.updatedAt) }}
              </div>
            </div>
          </nuxt-link>
        </slide>
        <slide class="link-to-blog-list">
          <nuxt-link id="link-to-blog-list-content" to="/blog">
            <span>一覧を見る</span>
            <font-awesome-icon id="arrow" :icon="['fas', 'angle-right']" />
          </nuxt-link>
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

import Tag from '~/components/Tag.vue'

export default {
  components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation,
    Tag,
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
    dateFormatter(date) {
      date = new Date(date)
      return (
        date.getFullYear() +
        '/' +
        date.getMonth() +
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
  },
}
</script>

<style lang="scss" scoped>
.title {
  font-size: $font-size-contents-title;
  color: $base-font-color;
  text-align: center;
  margin: 52px 0 20px 0;
}
.wrapper {
  height: fit-content;
  padding-bottom: 100px;
}
.carousel-nav {
  margin: auto;
  box-shadow: 15px 15px 25px #00000035;
  width: min(50vw, 950px);
  height: min(37.5vw, 720px);
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
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
::v-deep .hooper-list {
  border-radius: 20px;
}
::v-deep .link-to-blog-list {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: large;
}
::v-deep #link-to-blog-list-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: $base-font-color;
}
::v-deep #link-to-blog-list-content::after {
  position: absolute;
  bottom: -4px;
  left: 0;
  content: '';
  width: 100%;
  height: 2px;
  background: $base-font-color;
  transform: scale(0, 1);
  transform-origin: center top;
  transition: transform 0.3s;
}
::v-deep #link-to-blog-list-content:hover {
  color: $black;
}
::v-deep #link-to-blog-list-content:hover::after {
  background: $black;
  transform: scale(1, 1);
}
::v-deep .link-to-blog-list #arrow,
span {
  margin: 6px 7px;
}
::v-deep .link-to-blog-list #arrow {
  font-size: 25px;
}
#link-to-blog {
  width: inherit;
  height: inherit;
  position: relative;

  img {
    object-fit: cover;
    width: inherit;
    height: inherit;
  }
  .blog-info {
    position: absolute;
    width: 100%;
    height: 13vw;
    bottom: 0;
    background-color: $through-light-blue;
    color: $white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.2s 0s ease;

    .blog-title,
    .blog-tags,
    .blog-date {
      width: fit-content;
    }
    .blog-title {
      font-size: $base_font_size * 3;
      max-width: 60%;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    .blog-tags {
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

    .blog-date {
      font-size: $base_font_size * 1.1;
    }
  }
}
#link-to-blog:hover {
  .blog-info {
    height: 15vw;
  }
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
