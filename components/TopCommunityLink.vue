<template>
  <div class="community">
    <div
      @click="$router.push('/community/' + community.id)"
      class="img-wrapper"
      :class="{ 'order-2': id % 2 === 1 }"
    >
      <video
        :src="community.field.image"
        type="video"
        poster="@/assets/image/loading.webp"
        preload="metadata"
        webkit-playsinline
        playsinline
        muted
        autoplay
        loop
        name="media"
      >
        <p>ブラウザーが対応していません</p>
      </video>
    </div>
    <div class="introduction" :class="{ 'order-1': id % 2 === 1 }">
      <div class="name">
        {{ community.field.name }}
      </div>
      <div class="domain">
        {{ community.field.domain }}
      </div>
      <div class="community-link">
        <base-button
          :to="'/community/' + community.id"
          :animation="changeAnimation(id % 2)"
        >
          詳しく見る
        </base-button>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'

export default {
  components: {
    BaseButton,
  },
  props: {
    community: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
    id: {
      type: Number,
      required: true,
      default() {
        return 0
      },
    },
  },
  methods: {
    changeAnimation(value) {
      if (value === 0) {
        return 'toLeft'
      } else if (value === 1) {
        return 'toRight'
      } else {
        return ''
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.community {
  display: flex;
  justify-content: center;
  height: 32vw;
  max-height: 370px;
}
.img-wrapper {
  height: 100%;
  width: 60%;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 3px 3px 5px 5px rgba(100, 100, 100, 0.2);
  z-index: 10;
}
.img-wrapper video {
  object-fit: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  filter: brightness(80%);
  transition: filter 0.3s ease-out;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.img-wrapper:hover video {
  filter: brightness(110%);
}
.introduction {
  color: $base-font-color;
  width: 40%;
  height: 100%;
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.name {
  font-family: $font-family-title;
  font-size: $font-size-contents-title;
  width: 100%;
  line-height: 120%;
}
.domain {
  font-size: $font-size-contents-description;
  padding-left: 20px;
  margin-top: 15px;
  margin-bottom: 20px;
  height: 55%;
  width: 100%;
  overflow: hidden;
  position: relative;
  text-align: left;
}
.domain::before {
  background: linear-gradient(to top, #ffffff 60%, #ffffff00 100%);
  position: absolute;
  bottom: 0;
  content: '';
  height: 80px;
  width: 100%;
}
.community-link {
  position: absolute;
  height: 60px;
  width: 65%;
  bottom: 10px;
}
.order-1 {
  order: 1;
}
.order-2 {
  order: 2;
}

@media screen and (max-width: $media-query-standard-max-width) {
  .community {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    position: relative;
    max-height: none;
  }
  .img-wrapper {
    position: absolute;
    bottom: 15vw;
    height: 55vw;
    width: 100%;
  }
  .introduction {
    width: 100%;
    height: 100%;
    padding: 0;
  }
  .name {
    width: fit-content;
    margin: 0;
  }
  .domain {
    height: fit-content;
    padding-bottom: 69vw;
    padding-left: 0;
    text-align: center;
  }
  .domain::before {
    content: none;
  }
  .community-link {
    height: 8vw;
    width: 50%;
  }
}
</style>
