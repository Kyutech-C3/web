<template>
  <div class="blog_page">
    <div class="blog_top">
      <div class="wrapper">
        <div class="title">{{ blog_item.fields.title }}</div>
        <img :src="blog_item.fields.thumbnail.fields.file.url" class="img" />
        <div class="date">
          {{ blog_item.sys.updatedAt }}
        </div>
      </div>
    </div>
    <markdown-view :markdown-text="blog_item.fields.body" />
  </div>
</template>

<script>
import MarkdownView from '~/components/MarkdownView.vue'
import sdkClient from '@/plugins/contentful.js'

export default {
  components: {
    MarkdownView,
  },
  async asyncData({ env }) {
    return Promise.all([
      await sdkClient.getEntry('66O1WYPMRra7vRT0oScSv0'),
    ]).then((blog) => {
      // eslint-disable-next-line no-console
      console.log(blog[0].fields.thumbnail.fields)
      return {
        blog_item: blog[0],
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
    }
  },
}
</script>

<style lang="scss" scoped>
.blog_page {
  width: 65%;
  margin: 0 auto;
}
.blog_top {
  width: 100%;
  padding: 40px 0 40px 0;
  box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.3);
  border-radius: 20px;
}
.wrapper {
  width: 70%;
  margin: 0 auto;
}
.title {
  font-size: $font-size-other-title;
  font-weight: bold;
  overflow-wrap: break-word;
}
.img {
  width: 100%;
  height: auto;
  margin: 20px 0 20px 0;
}
.date {
  text-align: right;
  font-size: $font-size-other-contents-date;
}

.markdown {
  font-size: $font-size-other-contents-description;
  margin: 0 7% 0 7%;
}
</style>
