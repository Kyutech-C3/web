<template>
  <div class="page">
    <base-breadcrumbs class="detail-breadcrumbs" />
    <div class="page-name">{{ pageName }}</div>
    <div class="page-content">
      <div class="entry-detail">
        <div class="image-wrapper">
          <img
            type="image"
            :src="img + '?fm=webp&q=50'"
            class="img"
            loading="lazy"
          />
        </div>
        <div class="title">{{ title }}</div>
        <div class="tags">
          <div>タグ：</div>
          <nuxt-link
            v-for="(tag, index) in tags"
            :key="index"
            :to="`/${type}?tag=${tag.fields.name}`"
            class="link"
          >
            <tag :tag="tag.fields.name" class="tag" />
          </nuxt-link>
        </div>
        <div class="users-wrapper">
          <div>ユーザー：</div>
          <users :users="users" :color="'black'" class="users" />
        </div>
        <div class="date">更新日：{{ dateFormatter }}</div>
        <markdown-view :markdown-text="body" />
      </div>
      <sidebar :blogs="recentBlog" :type="type" class="sidebar" />
    </div>
  </div>
</template>

<script>
import MarkdownView from '~/components/MarkdownView.vue'
import Sidebar from '~/components/Sidebar.vue'
import Tag from '~/components/Tag.vue'
import Users from '~/components/Users.vue'

export default {
  components: {
    MarkdownView,
    Sidebar,
    Tag,
    Users,
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
    dateFormatter() {
      const splitFullDate = this.updatedAt.split('T')
      const splitDate = splitFullDate[0].split('-')
      const splitTime = splitFullDate[1].split(':')
      return `${splitDate[0]}年${splitDate[1]}月${splitDate[2]}日 ${
        splitTime[0]
      }:${splitTime[1]}:${splitTime[2].split('.')[0]}`
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  padding: 10px 0 80px 0;
}
.page-content {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: $base-font-color;
}
.entry-detail {
  width: 63vw;
  max-width: 1000px;
  margin-left: 5vw;
}
.page-name {
  font-size: $font-size-other-title;
  color: $base-font-color;
  margin: 0 7vw 2vw 7vw;
}
.detail-breadcrumbs {
  margin: 0 7vw;
}
.image-wrapper {
  position: relative;
  box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  width: 100%;
  height: 40vw;
  max-height: 600px;
  overflow: hidden;
}
.title {
  overflow-wrap: break-word;
  font-size: $font-size-other-contents-title;
  width: 100%;
  margin: 30px 0 0 0;
  font-weight: bold;
}
.tags,
.users-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.tags,
.users-wrapper,
.date {
  margin-top: 10px;
}
.link {
  text-decoration: none;
  color: $black;
}
.tag {
  margin: 0 3px;
  cursor: pointer;
  --height: 25px;
  color: $gray;
}
.users-wrapper div,
.tags div,
.date {
  font-size: $font-size-other-contents-description;
  width: fit-content;
}
.users {
  justify-content: flex-start;
  width: 100%;
}
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
.markdown {
  font-size: $font-size-other-contents-description;
  margin: 40px 7% 0 7%;
}
.sidebar {
  margin-left: 3vw;
  width: 300px;
}

@media screen and (max-width: 1285px) {
  .entry-detail {
    width: 90%;
    margin: 0;
  }
  .image-wrapper {
    margin: 0 auto;
    max-width: 920px;
    height: 58vw;
  }
  .markdown {
    margin: 40px 0 0 0;
  }
  .sidebar {
    margin: 80px 0 0 0;
    width: 350px;
    padding: 20px 10vw;
  }
}
@media screen and (max-width: $media-query-small-max-width) {
  .entry-detail {
    width: 95%;
  }
  .image-wrapper {
    height: 60vw;
    border-radius: 15px;
  }
  .markdown {
    margin: 30px 0 0 0;
  }
  .sidebar {
    margin: 60px 0 0 0;
    padding: 20px 30px;
    width: 75vw;
  }
}
</style>
