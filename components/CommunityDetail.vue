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
    props:["items"]
}
</script>

<style lang="scss" scoped>
.main-area{
    margin: 200px 6.25% 0 6.25%;
}
.title{
    font-family: 'Inter';
    font-style: Regular;
    font-size: $font-size-other-title;
    color: $base-font-color;
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
</style>