<template>
  <div class="main-area">
    <div class="title">
      {{ title }}
    </div>
    <img class="img" :src="img" />
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
.main-area {
  width: 87.5%;
  margin: 170px 6.25% 0 6.25%;
}
.title {
  font-family: 'Inter';
  font-style: Regular;
  font-size: $font-size-other-title;
  color: $base-font-color;
  overflow-wrap: break-word;
}
.img {
  margin: 60px 0;
  width: 100%;
  border-radius: 20px;
  box-shadow: 8px 8px 8px #00000029;
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
}
</style>
