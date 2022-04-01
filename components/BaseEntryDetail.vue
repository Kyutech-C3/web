<template>
  <div class="page">
    <base-breadcrumbs class="detail-breadcrumbs" />
    <div class="page-name">{{ pageName }}</div>
    <div class="page-content">
      <div class="entry-detail">
        <div class="entry-top">
          <img :src="img" class="img" />
          <div class="title-wrapper">
            <div class="title">{{ title }}</div>
            <div class="tags">
              <nuxt-link
                v-for="(tag, index) in tags"
                :key="index"
                :to="'/blog?tag=' + tag.fields.name"
                class="link"
              >
                <tag :tag="tag.fields.name" class="tag" />
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="date">
          {{ dateFormatter(updatedAt) }}
        </div>
        <markdown-view :markdown-text="body" />
      </div>
      <sidebar :blogs="recentBlog" class="sidebar" />
    </div>
  </div>
</template>

<script>
import MarkdownView from '~/components/MarkdownView.vue'
import Sidebar from '~/components/Sidebar.vue'
import Tag from '~/components/Tag.vue'

export default {
  components: {
    MarkdownView,
    Sidebar,
    Tag,
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
  },
  methods: {
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
.page {
  padding: 40px 0;
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
.entry-top {
  position: relative;
  box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  width: 100%;
  height: 38vw;
  max-height: 600px;
  overflow: hidden;
}
.title-wrapper {
  position: absolute;
  padding: 30px 0;
  width: 100%;
  background-color: $through-light-blue;
  color: $white;
}
.title {
  text-align: center;
  overflow-wrap: break-word;
  font-size: $font-size-other-contents-title;
  width: 40%;
  margin: 0 auto;
}
.tags {
  display: flex;
  justify-content: center;
  margin-top: 15px;
  font-size: $font-size-other-contents-other;
}
.link {
  text-decoration: none;
  color: $white;
}
.tag {
  margin: 0 3px;
  cursor: pointer;
}
.img {
  display: block;
  width: 100%;
  position: absolute;
  object-fit: cover;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.date {
  text-align: right;
  font-size: 20px;
  padding: 10px 30px;
}

.markdown {
  font-size: $font-size-other-contents-description;
  margin: 100px 7% 0 7%;
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
  .entry-top {
    height: 50vw;
  }
  .title-wrapper {
    padding: 20px 0;
  }
  .title {
    width: 50%;
  }
  .markdown {
    margin: 100px 0 0 0;
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
  .title-wrapper {
    padding: 15px 0;
  }
  .title {
    width: 60%;
  }
  .markdown {
    margin: 40px 0 0 0;
  }
  .sidebar {
    margin: 60px 0 0 0;
    padding: 20px 30px;
    width: 75vw;
  }
}
</style>
