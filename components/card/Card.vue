<template>
  <nuxt-link :to="entryURL" class="card-link">
    <article class="article">
      <div class="thumbnail-wrapper">
        <img
          :src="`${cardImage}?fm=webp&q=50&w=500`"
          alt="thumbnail"
          title="thumbnail"
          class="thumbnail"
        />
        <div v-if="isNew" class="new-ravel">New</div>
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
              :key="tag.sys.name"
              :tag="tag.fields.name"
            />
          </div>
        </div>
        <div class="user-wrapper">
          <users :users="author" class="user" />
        </div>
        <div class="description">{{ description }}</div>
        <div class="date">
          <div>作成日：{{ dateFormatter(createdAt) }}</div>
          <div>更新日：{{ dateFormatter(updatedAt) }}</div>
        </div>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
import Tag from '~/components/commons/Tag.vue'
import Users from '~/components/card/Users.vue'

export default {
  components: {
    Tag,
    Users,
  },
  props: {
    id: {
      type: String,
      required: true,
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
    cardImage: {
      type: String,
      required: true,
    },
    createdAt: {
      type: String,
      required: true,
    },
    updatedAt: {
      type: String,
      required: true,
    },
    entryType: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      style: true,
      isHoverFlag: false,
    }
  },
  computed: {
    entryURL() {
      return `/${this.entryType}/${this.id}`
    },
    isNew() {
      const now = this.$dayjs()
      const dayDiff = now.diff(this.createdAt, 'day')
      return dayDiff < 1
    },
  },
  methods: {
    dateFormatter(date) {
      let defaultFormat = 'MM月DD日 HH:mm:ss'
      const now = this.$dayjs()
      const secondDiff = now.diff(date, 'second')
      if (secondDiff < 60) {
        return secondDiff + ' 秒前'
      }
      const minuteDiff = Math.floor(now.diff(date, 'minute'))
      if (minuteDiff < 60) {
        return minuteDiff + ' 分前'
      }
      const hourDiff = Math.floor(now.diff(date, 'hour'))
      if (hourDiff < 6) {
        return hourDiff + ' 時前'
      }

      if (now.format('YYYY') !== this.$dayjs(date).format('YYYY')) {
        defaultFormat = 'YYYY年' + defaultFormat
      }
      return this.$dayjs(date).format(defaultFormat)
    },
  },
}
</script>

<style lang="scss" scoped>
.new-ravel {
  color: red;
  font-size: medium;
  font-weight: bold;
  position: absolute;
  left: 0px;
  top: 20px;
  z-index: 40;
  border-radius: 0 7px 7px 0;
  background-color: #fffc;
  padding: 2px 10px;
  -webkit-filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.2));
  -moz-filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.2));
  -ms-filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.2));
  filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.2));
}
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
