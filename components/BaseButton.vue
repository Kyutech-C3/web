<template>
  <nuxt-link
    :to="to"
    class="link"
    :class="{
      'animation to-left': animation === 'toLeft',
      'animation to-right': animation === 'toRight',
      'animation right-to-right': animation === 'rightToRight',
    }"
  >
    <div class="frame">
      <slot></slot>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
      default() {
        return ''
      },
    },
    animation: {
      type: String,
      required: false,
      default() {
        return ''
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.link {
  height: 100%;
  color: $gray;
  text-decoration: none;
  font-family: $font-family-contens;
  font-size: $font-size-button;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-color: $gray;
  border-radius: 500px;
}
.animation {
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: 0.5s;
}
.animation::before {
  content: '';
  width: 120%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  background: $gray;
  border: 1px solid;
  border-color: $gray;
  border-radius: 500px;
  transition: transform ease 0.5s;
}
.to-left::before {
  transform: translateX(100%);
}
.to-right::before {
  transform: translateX(-100%);
}
.right-to-right::before {
  transform-origin: 100% 50%;
  transform: scaleX(0);
}
.animation:hover {
  color: #fff;
}
.to-left:hover::before {
  transform: translateX(10%);
}
.to-right:hover::before {
  transform: translateX(10%);
}
.right-to-right:hover::before {
  transform-origin: 0% 50%;
  transform: scaleX(1);
}
</style>
