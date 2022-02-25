<template>
  <nuxt-link :to="'/blog/'+id" class="sidebar-card">
    <img :src="img" />
    <div><slot></slot></div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
      default() {
        return ''
      },
    },
    id: {
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
.sidebar-card {
  display: flex;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 130px;
  text-decoration: none;
  color: $base-font-color;
}
.sidebar-card img {
  width: 50%;
  height: auto;
  object-fit: cover;
}
.sidebar-card div {
  width: 50%;
  padding: 7px 10px;
}
</style>
