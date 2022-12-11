<template>
  <nuxt-link :to="`/${type}/${id}`" class="sidebar-card">
    <div class="img-wp"><img :src="`${img}?fm=webp&q=20`" /></div>
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
    type: {
      type: String,
      required: true,
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
.img-wp {
  position: relative;
  overflow: hidden;
  height: 100%;
}
.img-wp img {
  position: absolute;
  height: 100%;
  object-fit: cover;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.sidebar-card div {
  width: 50%;
  padding: 7px 10px;
}
</style>
