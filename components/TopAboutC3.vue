<template>
  <div class="area">
    <img
      src="@/assets/image/c3_logo_circled.png"
      alt="C3アイコン"
      class="icon"
    />
    <div class="top">C3について</div>
    <div class="sentence">{{ c3Introduction }}</div>
    <nuxt-link to="/about" class="link">
      <div class="frame">詳しく見る</div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    c3Introduction: {
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
.area {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  height: 480px;
  max-width: 1920px;
}
.icon {
  width: 400px;
  border-radius: 50%;
}

.top {
  margin: 0 0 0 5.2%;
  font-family: $font-family-title;
  height: auto;
  line-height: 160px;
  color: $gray;
  font-size: $font-size-contents-title;
}
.sentence {
  position: relative;
  overflow: hidden;
  margin: 29px 0 0 5.6%;
  width: 51.2%;
  line-height: 45px;
  text-align: left;
  max-height: 200px;
  color: $gray;
  font-size: $font-size-contents-description;
}
.sentence::before {
  background: linear-gradient(to top, #ffffff 0%, #ffffff00 100%);
  position: absolute;
  bottom: 0;
  content: '';
  height: 1.5em;
  width: 100%;
}
.link {
  margin: 28px 0 0 22.7%;
  width: 240px;
  height: 60px;
  line-height: 39px;

  color: $gray;
  text-decoration: none;
  letter-spacing: 0px;
  font-style: Medium;
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

.frame:hover {
  color: $white;
  background-color: $gray;
}

@media screen and (max-width: $media-query-standard-max-width) {
  .area {
    height: auto;
    justify-content: center;
  }

  .top {
    margin: 0 0;
    text-align: center;
    width: 100%;
    height: auto;
    line-height: 115px;
    font-size: $font-size-contents-title;
    order: 1;
  }
  .icon {
    margin: 40px auto 0 auto;
    width: 279px;
    height: 279px;
    order: 2;
  }
  .sentence {
    position: relative;
    margin: 40px 7.5% 0 7.5%;
    width: 85%;
    height: auto;
    max-height: none;
    line-height: 34px;
    text-align: center;
    font-size: $font-size-contents-description;
    order: 3;
  }
  .sentence::before {
    background: linear-gradient(to top, #ffffff 0%, #ffffff00 100%);
    position: absolute;
    bottom: 0;
    content: '';
    height: 1.5em;
    width: 100%;
  }
  .link {
    margin: 15px auto 0 auto;
    font-size: $font-size-button;
    order: 4;
  }
}
</style>
