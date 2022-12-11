<template>
  <div class="main-area">
    <div class="title">
      {{ title }}
    </div>
    <div class="img-wrapper">
      <video
        :poster="require('@/assets/image/loading.webp')"
        preload="metadata"
        webkit-playsinline
        playsinline
        muted
        autoplay
        loop
        name="media"
      >
        <source :src.prop="imgWebm" type="video/webm" />
        <source :src.prop="imgMp4" type="video/mp4" />
        <p>ブラウザーが対応していません</p>
      </video>
    </div>
    <markdown-view :markdown-text="description" class="markdown" />
  </div>
</template>

<script>
import MarkdownView from '~/components/commons/MarkdownView.vue'

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
    imgWebm: {
      type: String,
      required: true,
      default() {
        return ''
      },
    },
    imgMp4: {
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
  position: relative;
  width: 100%;
  max-width: 1500px;
  height: 40vw;
  max-height: 850px;
  margin: 60px auto;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 8px 8px 8px #00000029;
}
.img-wrapper video {
  object-fit: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.markdown {
  font-size: $font-size-other-contents-description;
}
@media screen and (max-width: $media-query-standard-max-width) {
  .img-wrapper {
    height: 55vw;
  }
}
@media screen and (max-width: $media-query-small-max-width) {
  .img-wrapper {
    margin-top: 20px;
    margin-bottom: 50px;
  }
}
</style>
