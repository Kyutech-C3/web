<template>
  <nuxt-link
    :to="'/author/' + id"
    class="user"
    :class="[`${color}-style`, { shadow: shadow }]"
  >
    <div class="icon-wrapper">
      <img :src="icon" class="icon" />
    </div>
    <div v-if="showName" class="name">{{ name }}</div>
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
    color: {
      type: String,
      required: true,
    },
    shadow: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.user {
  height: var(--user-height);
  padding: 2px 10px 2px 2px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  text-decoration: none;
}
.white-style {
  border-color: $white;
  color: $white;
}
.black-style {
  border-color: $light-gray;
  color: $gray;
}
.shadow {
  box-shadow: 0px 2px 8px #00000033;
}
.user:hover {
  border-color: $gray;
}
.icon-wrapper {
  height: var(--img-height);
  width: var(--img-height);
  margin: 0 5px 0 0;
  position: relative;
  overflow: hidden;
  border-radius: 100%;
  background-color: $white;
}
.icon-wrapper img {
  height: 100%;
  width: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.name {
  width: max-content;
  font-size: 15px;
  text-decoration: none;
  font-family: $font-family-contens;
}
</style>
