<template>
  <nuxt-link class="carousel-item" :class="className" :to="linkUrl">
    <!-- サムネイル -->
    <div class="img-wrapper">
      <img
        type="image"
        :src="`${imageUrl}?fm=webp&q=20`"
        class="img"
        rel="preload"
        alt="img"
      />
    </div>

    <!-- アイテム情報 -->
    <div class="news-info">
      <div class="news-title">{{ title }}</div>
      <div class="news-tags">
        <div v-for="(tag, index) in tags" :key="index" class="link">
          <tag :tag="tag.fields.name" class="tag" />
        </div>
      </div>
      <users
        v-if="showUsers && windowWidth > 600"
        :users="users"
        :color="'white'"
        class="users"
      />
      <div class="news-date">
        {{ dateFormatter(updatedAt) }}
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import Users from '~/components/commons/Users.vue'
import Tag from '~/components/commons/Tag.vue'

export default {
  components: {
    Users,
    Tag,
  },
  props: {
    linkUrl: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    users: {
      type: Array,
      required: true,
    },
    updatedAt: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      required: true,
    },
    showUsers: {
      type: Boolean,
      required: false,
      default() {
        return false
      },
    },
  },
  data() {
    return {
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
    resizeWindow() {
      this.windowWidth = window.innerWidth
    },
  },
}
</script>

<style lang="scss" scoped>
.carousel-item {
  width: 100%;
  height: 100%;
  position: relative;
  display: block;

  .img-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
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
    height: max-content;
    padding: 20px 0;
    bottom: 0;
    left: 0;
    background-color: $through-light-blue;
    color: $white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.2s 0s ease;
    overflow: hidden;

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
      justify-content: center;
      display: flex;
      margin: max(min(1vw, 10px), 2px) 0;
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

  @media screen and (max-width: 1000px) {
    .news-info {
      padding: max(min(3vw, 20px), 7px) 0;
    }
  }
}
</style>
