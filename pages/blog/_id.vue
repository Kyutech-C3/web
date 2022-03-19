<template>
  <div class="blog">
    <div class="blog_page">
      <div class="blog_top">
        <img :src="blog_item.fields.thumbnail.fields.file.url" class="img" />
        <div class="title-wrapper">
          <div class="title">{{ blog_item.fields.title }}</div>
          <div class="tags">
            <nuxt-link
              v-for="(tag, index) in blog_item.fields.tags"
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
        {{ dateFormatter(blog_item.sys.updatedAt) }}
      </div>
      <markdown-view :markdown-text="blog_item.fields.body" />
    </div>
    <sidebar :blogs="recent_blog" class="sidebar" />
  </div>
</template>

<script>
import Vue from 'vue'
import MarkdownView from '~/components/MarkdownView.vue'
import Sidebar from '~/components/Sidebar.vue'
import Tag from '~/components/Tag.vue'
import sdkClient from '~/plugins/contentful.js'

export default Vue.extend({
  components: {
    MarkdownView,
    Sidebar,
    Tag,
  },
  async asyncData({ env, params }) {
    return Promise.all([
      await sdkClient.getEntry(params.id),
      await sdkClient.getEntries({ content_type: 'blog', limit: 3 }),
    ]).then(([blog, recentBlog]) => {
      return {
        blog_item: blog,
        recent_blog: recentBlog.items,
      }
    })
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
})
</script>

<style lang="scss" scoped>
.blog {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: $base-font-color;
  padding: 40px 0;
}
.blog_page {
  width: 63vw;
  max-width: 1000px;
  margin-left: 5vw;
}
.blog_top {
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
  .blog_page {
    width: 90%;
    margin: 0;
  }
  .blog_top {
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
  .blog_page {
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
