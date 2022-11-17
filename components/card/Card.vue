<template>
  <nuxt-link :to="entryURL" class="card-link">
    <article class="article">
      <div class="thumbnail-wrapper">
        <img
          :src="`${card_image}?fm=webp&q=20`"
          alt="thumbnail"
          title="thumbnail"
          class="thumbnail"
        />
      </div>
      <div v-if="isHoverFlag" class="tag_viewer1"></div>
      <div class="content">
        <div class="title">{{ title }}</div>
        <div class="tag_wrap">
          <div
            class="tag"
            @mouseover="isHoverFlag = true"
            @mouseleave="isHoverFlag = false"
          >
            <Tag
              v-for="tag in tags"
              extraSmall
              outline
              :tag="tag.fields.name"
              :key="tag.sys.name"
            />
          </div>
        </div>
        <div class="user-wrapper">
          <users :users="author" class="user" />
        </div>
        <div class="description">{{ description }}</div>
        <div class="date">{{ dateFormatter }}</div>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
import Tag from '~/components/Tag.vue'
import Users from '~/components/card/Users.vue'

export default {
  data() {
    return {
      style: true,
      isHoverFlag: false,
    }
  },
  props: {
    id: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: Array,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    card_image: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    entryType: {
      type: String,
      required: true,
    },
  },
  components: {
    Tag,
    Users,
  },
  computed: {
    entryURL() {
      return `/${this.entryType}/${this.id}/`
    },
    dateFormatter() {
      const nowDate = new Date()
      const splitFullDate = this.date.split('T')
      const splitDate = splitFullDate[0].split('-')
      const splitTime = splitFullDate[1].split(':')
      if (
        nowDate.getFullYear() === +splitDate[0] &&
        nowDate.getMonth() + 1 === +splitDate[1] &&
        nowDate.getDate() === +splitDate[2]
      ) {
        if (
          nowDate.getHours() === +splitTime[0] &&
          nowDate.getMinutes() === +splitTime[1]
        ) {
          return `${nowDate.getSeconds() - +splitTime[2].split('.')[0]} 秒前`
        } else if (nowDate.getHours() === +splitTime[0]) {
          return `${nowDate.getMinutes() - +splitTime[1]} 分前`
        } else {
          return `${nowDate.getFullYear() - +splitTime[0]} 時間前`
        }
      } else {
        return `${splitDate[0]}年${splitDate[1]}月${splitDate[2]}日 ${
          splitTime[0]
        }:${splitTime[1]}:${splitTime[2].split('.')[0]}`
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.card-link {
  text-decoration: none;
  color: #000000;
}
.article {
  height: 440px;
  border-radius: 20px;
  box-shadow: 0 0 10px 0 $light-gray;
  transition: 0.3s;
  cursor: pointer;
  overflow: hidden;
}
.article:hover {
  box-shadow: 0 0 20px 2px $light-gray;
}
.content {
  position: relative;
  height: 200px;
  padding: 10px 15px 10px 15px;
  overflow: hidden;
}
.thumbnail-wrapper {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 220px;
}
.thumbnail {
  height: 100%;
  position: absolute;
  object-fit: cover;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.title {
  font-size: 22px;
  margin-bottom: 7px;
  font-weight: bold;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.tag_wrap {
  overflow: hidden;
  overflow-x: auto;
  cursor: default;
  margin-right: 3px;
  margin-bottom: 4px;
}
.tag_wrap::-webkit-scrollbar {
  height: 3px;
}

.tag_wrap::-webkit-scrollbar-thumb {
  background: $light-gray;
  border-radius: 3px;
}

.tag_wrap::-webkit-scrollbar-track {
  background: rgba(221, 221, 221, 0.219);
}
.tag {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-right: 3px;
  margin-bottom: 1px;
  ---height: 18px;
}
.user-wrapper {
  width: 100%;
  --user-height: 20px;
  --img-height: 20px;
  overflow: hidden;
  overflow-x: auto;
  cursor: default;
  margin-right: 3px;
  margin-bottom: 4px;
}
.user-wrapper::-webkit-scrollbar {
  height: 3px;
}

.user-wrapper::-webkit-scrollbar-thumb {
  background: #99d8ffa4;
  border-radius: 3px;
}

.user-wrapper::-webkit-scrollbar-track {
  background: rgba(221, 221, 221, 0.219);
}
.user {
  margin-right: 3px;
  margin-bottom: 2px;
}
.description {
  position: relative;
  font-size: 12px;
  margin-top: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  white-space: normal;
  overflow: hidden;
  -webkit-box-orient: vertical;
}
.date {
  position: absolute;
  bottom: 15px;
  right: 15px;
}
</style>
