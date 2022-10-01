<template>
  <div class="sidebar">
    <div class="sidebar-title">最近の投稿</div>
    <sidebar-card
      v-for="(blog, idx) in blogs"
      :id="blog.sys.id"
      :key="idx"
      :img="blog.fields.thumbnail.fields.file.url"
      :type="type"
      class="sidebar-card"
    >
      {{ blog.fields.title }}
    </sidebar-card>
  </div>
</template>

<script>
import SidebarCard from '~/components/SidebarCard.vue'

export default {
  components: { SidebarCard },
  props: {
    blogs: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
    type: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.sidebar {
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.3);
  height: fit-content;
}
.sidebar-title {
  margin: 5px 10px;
  font-size: $base_font_size * 2;
}
.sidebar-card {
  margin: 10px 0;
  font-size: $base_font_size * 1.5;
  cursor: pointer;
}
</style>
