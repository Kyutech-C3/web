<template>
    <div class="main-area">
        <div class="title">
            {{items.title}}
        </div>
        <img class="img" :src="items.img">
        <div class="description">
            {{items.description}}
        </div>
    </div>
</template>

<script>
export default {
    props: {
      items: {
        type: Object,
        required: true,
        default() {
          return {}
        }
      }
    }
}
</script>

<style lang="scss" scoped>
.main-area{
    width: 87.5%;
    margin: 170px 6.25% 0 6.25%;
}
.title{
    font-family: 'Inter';
    font-style: Regular;
    font-size: $font-size-other-title;
    color: $base-font-color;
    overflow-wrap: break-word;
}
.img{
    margin: 60px 0;
    width: 100%;
    border-radius: 20px;
    box-shadow: 8px 8px 8px #00000029;
}
.description{
    font-family: '游ゴシック';
    font-style: Regular;
    font-size: $font-size-other-contents-description;
    color: $base-font-color;
}
@media screen and (max-width: $media-query-small-max-width) {
    .title{
        font-size: 60px;
    }
}
@media screen and (max-width: 450px) {
    .title{
        font-size: 40px;
    }
}
</style>
