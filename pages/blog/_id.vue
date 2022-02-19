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
        {{ blog_item.sys.updatedAt }}
      </div>
      <markdown-view :markdown-text="blog_item.fields.body" />
    </div>
    <sidebar :blogs="blogs" class="sidebar" />
  </div>
</template>

<script>
import MarkdownView from '~/components/MarkdownView.vue'
import Sidebar from '~/components/Sidebar.vue'
import Tag from '~/components/Tag.vue'
import sdkClient from '~/plugins/contentful.js'

export default {
  components: {
    MarkdownView,
    Sidebar,
    Tag,
  },
  async asyncData({ env }) {
    return Promise.all([
      await sdkClient.getEntry('66O1WYPMRra7vRT0oScSv0'),
      await sdkClient.getEntries({ content_type: 'blog' }),
    ]).then((blog, recentBlog) => {
      // eslint-disable-next-line no-console
      console.log(blog)
      return {
        blog_item: blog[0],
        recent_blog: recentBlog,
      }
    })
  },
  data() {
    return {
      title: 'defaultTitle',
      img: 'https://simo-c3.github.io/image_url/CG.png',
      date: '2021/21/21',
      markdownText:
        '# hoge <br> hogehogehoge<br>asssdfha;hdfa;iusegduiayfoiuashydoiucfaoiybhcuoiayuisdafadsjkhfjkdhsakjh cauh',
      blogs: [
        {
          img: 'https://simo-c3.github.io/image_url/CG.png',
          title: 'hoge',
          date: '2021/12/21 12:12:33',
        },
        {
          img: 'https://simo-c3.github.io/image_url/CG.png',
          title: 'hoge',
          date: '2021/12/21 12:12:33',
        },
        {
          img: 'https://simo-c3.github.io/image_url/CG.png',
          title: 'hoge',
          date: '2021/12/21 12:12:33',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.blog {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: $base-font-color;
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
  padding: 50px 0;
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

@media screen and (max-width: 1225px) {
  .blog_page {
    width: 90%;
    margin: 0;
  }
  .blog_top {
    height: 50vw;
  }
  .title-wrapper {
    padding: 30px 0;
  }
  .title {
    width: 50%;
  }
  .markdown {
    margin: 100px 0 0 0;
  }
  .sidebar {
    margin: 0;
    width: 60vw;
  }
}
@media screen and (max-width: $media-query-small-max-width) {
  .blog_page {
    width: 95%;
  }
  .title-wrapper {
    padding: 20px 0;
  }
  .title {
    width: 60%;
  }
  .markdown {
    margin: 40px 0 0 0;
  }
  .sidebar {
    width: 70vw;
  }
}
</style>
