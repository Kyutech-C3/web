<template>
  <div class="main-area">
    <div class="title">
      {{ title }}
    </div>
    <div class="img-wrapper">
      <img class="img" :src="img" />
    </div>
    <markdown-view :markdown-text="description" class="markdown" />
  </div>
</template>

<script>
import MarkdownView from '~/components/MarkdownView.vue'

export default {
  components: {
    MarkdownView,
  },
  props: {
    title: {
      type: String,
      required: true,
      default() {
        return ''
      },
    },
    img: {
      type: String,
      required: true,
      default() {
        return ''
      },
    },
    description: {
      type: String,
      required: true,
      default() {
        return ''
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.title {
  font-size: $font-size-other-title;
  color: $base-font-color;
  overflow-wrap: break-word;
}
.img-wrapper {
  width: 65%;
  height: 30vw;
  margin: 60px auto;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 8px 8px 8px #00000029;
}
.img {
  display: block;
  width: 100%;
  height: auto;
}
.markdown {
  font-size: $font-size-other-contents-description;
}
@media screen and (max-width: $media-query-small-max-width) {
  .title {
    font-size: 60px;
  }
}
@media screen and (max-width: 450px) {
  .title {
    font-size: 40px;
  }
  .img-wrapper {
    width: 85%;
    height: 60vw;
    margin-top: 20px;
    margin-bottom: 50px;
  }
}
</style>
