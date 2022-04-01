<template>
  <nuxt-link :to="'/blog/' + entryId" class="item-link">
    <div class="item-title-wrapper">
      <span class="item-title">{{ entryTitle }}</span>
      <span class="item-date">{{ dateFormatter(entryDate) }}</span>
    </div>
    <div class="item-contents">{{ entryContents }}</div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    entryId: {
      type: String,
      required: true,
      default() {
        return ''
      },
    },
    entryTitle: {
      type: String,
      required: true,
      default() {
        return ''
      },
    },
    entryContents: {
      type: String,
      required: true,
      default() {
        return ''
      },
    },
    entryDate: {
      type: String,
      required: true,
      default() {
        return ''
      },
    },
  },
  methods: {
    dateFormatter(date) {
      date = new Date(date)
      return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    },
  },
}
</script>

<style lang="scss" scoped>
.item-link {
  text-decoration: none;
  color: $base-font-color;
  display: block;
}
.item-title-wrapper {
  display: flex;
  align-items: flex-end;
}
.item-title {
  font-size: $font-size-other-contents-title;
}
.item-date {
  font-size: $font-size-other-contents-other;
  margin: 0 2vw;
}
.item-contents {
  margin: 0.5vw 0;
  overflow-wrap: break-word;
  font-size: $font-size-other-contents-description;
}
</style>
