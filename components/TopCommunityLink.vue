<template>
  <div class="community">
    <div class="img-wrapper" :class="{ 'order-2': id % 2 === 1 }">
      <img :src="community.field.image" />
    </div>
    <div class="introduction" :class="{ 'order-1': id % 2 === 1 }">
      <div class="name">
        {{ community.field.name }}
      </div>
      <div class="about">
        <markdown-view
          :markdown-text="community.field.about"
          class="markdown"
        />
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
import MarkdownView from '@/components/MarkdownView.vue'

export default {
  components: {
    BaseButton,
    MarkdownView,
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
  height: 28vw;
  max-height: 540px;
}
.img-wrapper {
  height: 100%;
  width: 60%;
  position: relative;
}
.img-wrapper img {
  object-fit: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  box-shadow: 3px 3px 5px 5px rgba(100, 100, 100, 0.2);
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
}
.name {
  font-size: $font-size-contents-title;
  width: 100%;
}
.about {
  font-size: $font-size-contents-description;
  font-family: $font-family-contens;
  padding-left: 20px;
  margin-bottom: 20px;
  height: 55%;
  width: 100%;
  overflow: hidden;
  position: relative;
}
.about::before {
  background: linear-gradient(to top, #ffffff 0%, #ffffff00 100%);
  position: absolute;
  bottom: 0;
  content: '';
  height: 1.5em;
  width: 100%;
}
.community-link {
  height: 15%;
  width: 65%;
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
  }
  .img-wrapper {
    position: absolute;
    bottom: 13vw;
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
  .about {
    height: fit-content;
    padding-bottom: 58vw;
    padding-left: 0;
    text-align: left;
  }
  .about::before {
    content: none;
  }
  .community-link {
    height: 8vw;
    width: 50%;
  }
}
@media screen and (min-width: $media-query-min-width) {
}
</style>
