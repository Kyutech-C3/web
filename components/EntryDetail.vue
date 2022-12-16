<template>
  <div class="entry">
    <base-breadcrumbs class="detail-breadcrumbs" />
    <div class="entry__name">C3 {{ pageName }}</div>
    <div class="entry__content">
      <div class="entry__detail">
        <div class="image-wrapper">
          <img
            type="image"
            :src="getImageURL"
            :alt="title + 'サムネイル'"
            class="img"
            loading="lazy"
          />
        </div>
        <div class="title">{{ title }}</div>
        <div class="tags-wrapper">
          <div class="tags-title">タグ：</div>
          <div class="tags">
            <nuxt-link
              v-for="(tag, index) in tags"
              :key="index"
              :to="`/${type}?tag=${tag.fields.name}`"
              class="link"
            >
              <tag :tag="tag.fields.name" class="tag" />
            </nuxt-link>
          </div>
        </div>
        <div class="users-wrapper">
          <div>ユーザー：</div>
          <users :users="users" :color="'black'" class="users" />
        </div>
        <div class="date">
          投稿日：{{ $dayjs(createdAt).format('YYYY年MM月DD日 HH:mm:ss') }}
        </div>
        <div class="date">
          更新日：{{ $dayjs(updatedAt).format('YYYY年MM月DD日 HH:mm:ss') }}
        </div>
        <markdown-view :markdown-text="body" />
      </div>
      <sidebar :blogs="recentBlog" :type="type" class="sidebar" />
    </div>
  </div>
</template>

<script>
import MarkdownView from '~/components/commons/MarkdownView.vue'
import Sidebar from '~/components/sidebar/Sidebar.vue'
import Tag from '~/components/commons/Tag.vue'
import Users from '~/components/commons/Users.vue'
import BaseBreadcrumbs from '~/components/commons/BaseBreadcrumbs.vue'

export default {
  components: {
    MarkdownView,
    Sidebar,
    Tag,
    Users,
    BaseBreadcrumbs,
  },
  props: {
    pageName: {
      type: String,
      required: true,
      default() {
        return ''
      },
    },
    title: {
      type: String,
      required: true,
      default() {
        return ''
      },
    },
    tags: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
    img: {
      type: String,
      required: true,
      default() {
        return ''
      },
    },
    body: {
      type: String,
      required: true,
      default() {
        return ''
      },
    },
    createdAt: {
      type: String,
      required: true,
      default() {
        return ''
      },
    },
    updatedAt: {
      type: String,
      required: true,
      default() {
        return ''
      },
    },
    recentBlog: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
    users: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    getImageURL() {
      if (this.$device.isMobile) {
        return this.img + '?fm=webp&q=90&w=500'
      } else {
        return this.img + '?fm=webp&q=50&w=1000'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.entry {
  padding: 10px 0 80px 0;

  &__name {
    font-size: $font-size-other-title;
    color: $base-font-color;
    margin: 0 7vw 2vw 7vw;
  }

  &__content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: $base-font-color;
  }

  &__detail {
    width: 63vw;
    max-width: 1000px;
    margin-left: 5vw;

    .image-wrapper {
      position: relative;
      box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.3);
      border-radius: 20px;
      width: 100%;
      height: 40vw;
      max-height: 600px;
      overflow: hidden;
      .img {
        height: 100%;
        position: absolute;
        object-fit: cover;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
      }
    }

    .title {
      overflow-wrap: break-word;
      font-size: $font-size-other-contents-title;
      width: 100%;
      margin: 30px 0 0 0;
      font-weight: bold;
    }
    .tags-wrapper {
      width: 100%;

      .tags-title {
        min-width: 50px;
      }

      .tags {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        .link {
          margin: 1px 0;
          text-decoration: none;
          color: $black;
          .tag {
            margin: 0 3px;
            cursor: pointer;
            --height: 25px;
            color: $gray;
          }
        }
      }
    }
    .users-wrapper {
      .users {
        justify-content: flex-start;
      }
    }

    .markdown {
      font-size: $font-size-other-contents-description;
      margin: 40px 7% 0 7%;
    }

    .tags-wrapper,
    .users-wrapper {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .tags-wrapper,
    .users-wrapper,
    .date {
      margin-top: 10px;
    }
    .users-wrapper div,
    .tags-wrapper,
    .date {
      font-size: $font-size-other-contents-description;
      width: fit-content;
    }
  }
}
.detail-breadcrumbs {
  margin: 0 7vw;
}

.sidebar {
  margin-left: 3vw;
  width: 300px;
}

@media screen and (max-width: 1285px) {
  .entry__detail {
    width: 90%;
    margin: 0;
  }
  .image-wrapper {
    margin: 0 auto;
    max-width: 920px !important;
    height: 58vw !important;
  }
  .markdown {
    margin: 40px 0 0 0 !important;
  }
  .sidebar {
    margin: 80px 0 0 0;
    width: 350px;
    padding: 20px 10vw;
  }
}
@media screen and (max-width: $media-query-small-max-width) {
  .entry__detail {
    width: 95%;
  }
  .image-wrapper {
    height: 60vw !important;
    border-radius: 15px;
  }
  .markdown {
    margin: 30px 0 0 0 !important;
  }
  .sidebar {
    margin: 60px 0 0 0;
    padding: 20px 30px;
    width: 75vw;
  }
}
</style>
