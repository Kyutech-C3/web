<template>
  <div class="community-wrapper">
    <div class="community">
      <div class="img-wrapper" :class="{ 'order-2': id % 2 === 1 }">
        <img :src="community.image" />
      </div>
      <div class="introduction" :class="{ 'order-1': id % 2 === 1 }">
        <div class="name">
          {{ community.name }}
        </div>
        <div class="about">
          {{ community.about }}
        </div>
        <div class="link-wrapper">
          <nuxt-link :to="'/community/' + community.id" class="link">
            <div class="frame">詳しく見る</div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    community: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
    id: {
      type: Number,
      required: true,
      default() {
        return 0
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.community-wrapper {
  position: relative;
  padding-top: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.community {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  width: 100%;
}
.img-wrapper {
  height: 100%;
  width: 60%;
  position: relative;
}
.img-wrapper img {
  object-fit: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  box-shadow: 3px 3px 5px 5px rgba(100, 100, 100, 0.2);
}
.introduction {
  color: $base-font-color;
  width: 40%;
  height: 100%;
  padding-left: 50px;
  padding-right: 50px;
}
.name {
  font-size: $font-size-contents-title;
}
.about {
  font-size: $font-size-contents-description;
  font-family: $font-family-contens;
  padding-left: 20px;
  height: 50%;
  overflow-wrap: break-word;
}
.link-wrapper {
  display: flex;
  justify-content: center;
}
.link {
  width: 300px;
  height: 50%;
  line-height: 39px;
  color: $gray;
  text-decoration: none;
  letter-spacing: 0px;
  font-family: $font-family-contens;
  font-size: $font-size-button;
}
.frame {
  width: 240px;
  height: 60px;

  color: $gray;
  border: 1px solid;
  border-color: $gray;
  border-radius: 53px;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
}
.order-1 {
  order: 1;
}
.order-2 {
  order: 2;
}
</style>
