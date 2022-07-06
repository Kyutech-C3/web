<template>
  <div class="profile">
    <div class="icon-wrapper">
      <img :src="image" alt="icon" />
    </div>
    <div class="name">{{ name }}</div>
    <div class="introduction">{{ introduction }}</div>
    <div class="links">
      <a
        v-for="(link, i) in linksInfo"
        :key="i"
        :href="link.url"
        target="_blank"
        class="contents"
      >
        <font-awesome-icon
          v-if="link.icon !== ''"
          :icon="link.icon"
          class="link"
        />
        <img
          v-if="link.img !== ''"
          :src="link.img"
          alt="link"
          class="link-img"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linksBaseInfo: [
        {
          text: 'toybox',
          url: '',
          icon: 'box-open',
          img: '',
        },
        {
          text: 'twitter',
          url: '',
          icon: '',
          img: require('@/assets/image/twitter.png'),
        },
        {
          text: 'github',
          url: '',
          icon: ['fab', 'github'],
          img: '',
        },
        {
          text: 'qiita',
          url: '',
          icon: '',
          img: require('@/assets/image/qiita.png'),
        },
        {
          text: 'zenn',
          url: '',
          icon: '',
          img: require('@/assets/image/zenn.png'),
        },
        {
          text: 'homepage',
          url: '',
          icon: ['fas', 'home'],
          img: '',
        },
      ],
      linksInfo: [],
    }
  },
  props: {
    id: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    introduction: {
      type: String,
      required: true,
    },
    links: {
      type: Object,
      required: false,
    },
  },
  created() {
    for (const linkBase of this.linksBaseInfo) {
      if (linkBase.text in this.links) {
        linkBase.url = this.links[linkBase.text]
        this.linksInfo.push(linkBase)
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.profile {
  width: 100%;
  margin: 0 auto;
  padding: 80px 0;
  border: 1px solid;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-color: $light-gray;
  box-shadow: 0px 2px 8px #00000033;
}
.icon-wrapper {
  height: 30vw;
  max-height: 200px;
  min-height: 150px;
  width: 30vw;
  max-width: 200px;
  min-width: 150px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  border-radius: 100%;
  background-color: $white;
  box-shadow: 0 0 10px 0 $light-gray;
}
.icon-wrapper img {
  height: 100%;
  width: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  user-select: none;
}
.name {
  font-size: $font-size-other-contents-title;
  margin-bottom: 20px;
  position: relative;
  // border-bottom: solid 3px $through-light-blue;
}
.name::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  width: 80%;
  height: 2px;
  background-color: $through-light-blue;
  border-radius: 10px;
}
.introduction {
  width: 40%;
  margin-bottom: 50px;
  font-size: $font-size-other-contents-description;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  white-space: normal;
  overflow: hidden;
  -webkit-box-orient: vertical;
}
.links {
  width: 80%;
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, 60px);
  row-gap: 20px;
  column-gap: 20px;
}
.contents {
  width: min-content;
  height: min-content;
  color: $gray;
  text-decoration: none;
}
.contents:hover {
  color: $black;
}
.link,
.link-img {
  height: 30px;
  user-select: none;
}
.link {
  width: 30px;
}
.link-img {
  width: auto;
}
img.link-img {
  -webkit-filter: invert(47%) sepia(8%) saturate(26%) hue-rotate(314deg)
    brightness(90%) contrast(86%);
  -moz-filter: invert(47%) sepia(8%) saturate(26%) hue-rotate(314deg)
    brightness(90%) contrast(86%);
  -ms-filter: invert(47%) sepia(8%) saturate(26%) hue-rotate(314deg)
    brightness(90%) contrast(86%);
  -o-filter: invert(47%) sepia(8%) saturate(26%) hue-rotate(314deg)
    brightness(90%) contrast(86%);
  filter: invert(47%) sepia(8%) saturate(26%) hue-rotate(314deg) brightness(90%)
    contrast(86%);
}
img.link-img:hover {
  -webkit-filter: none;
  -moz-filter: none;
  -ms-filter: none;
  -o-filter: none;
  filter: none;
}
@media screen and (max-width: $media-query-standard-max-width) {
  .links {
    width: 100%;
  }
  .link,
  .link-img {
    height: 40px;
  }
  .link {
    width: 40px;
  }
}
@media screen and (max-width: $media-query-s-small-max-width) {
  .profile {
    border-radius: 30px;
  }
  .introduction {
    width: 80%;
  }
  .links {
    row-gap: 10px;
    column-gap: 10px;
  }
  .link,
  .link-img {
    height: 35px;
  }
  .link {
    width: 35px;
  }
}
</style>
