<template>
  <nuxt-link :to="'/user/' + id" class="user">
    <div class="icon-wrapper">
      <img :src="icon" class="icon" />
    </div>
    <div class="name" v-if="showName">{{ name }}</div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
      default() {
        return ''
      },
    },
    name: {
      type: String,
      required: true,
      default() {
        return ''
      },
    },
    icon: {
      type: String,
      required: true,
      default() {
        return ''
      },
    },
    showName: {
      type: Boolean,
      required: true,
      default() {
        return true
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.user {
  height: 25px;
  padding: 3px 10px 3px 5px;
  box-shadow: 0px 2px 8px #00000033;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-color: $white;
  text-decoration: none;
  color: $white;
}
.user:hover {
  border-color: $gray;
}
.icon-wrapper {
  height: 100%;
  width: auto;
  margin: 0 5px 0 0;
}
.icon-wrapper img {
  object-fit: cover;
  border-radius: 100%;
  width: 100%;
  height: 100%;
}
.name {
  font-size: 15px;
  text-decoration: none;
  font-family: $font-family-contens;
}
</style>
