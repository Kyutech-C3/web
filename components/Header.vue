<template>
  <div ref="header" class="header">
    <div class="header-wrapper">
      <div class="header-container y-center">
        <div class="header-container__left y-center">
          <font-awesome-icon
            :icon="isShowContents ? 'times' : 'bars'"
            @click="showContents()"
          />
          <img
            type="image/webp"
            src="@/assets/image/s_logo.webp"
            class="logo"
            alt="logo"
          />
        </div>
        <div v-if="!isMobile" class="header-container__right y-center">
          <div class="contact">
            <nuxt-link to="/contact/" class="disable">
              <font-awesome-icon icon="envelope-open-text" class="disable" />
              <div class="disable">お問い合わせ</div>
            </nuxt-link>
          </div>
          <div class="language-wrapper y-center">
            <font-awesome-icon icon="globe-americas" class="disable" />
            <div class="language y-center">
              <a
                :class="{ selected: !isChangedLanguage }"
                @click="isChangedLanguage = false"
              >
                JP
              </a>
              <div>/</div>
              <a
                class="disable"
                :class="{ selected: isChangedLanguage }"
                @click="isChangedLanguage = true"
              >
                EN
              </a>
            </div>
          </div>
        </div>
      </div>
      <transition>
        <div
          v-show="isShowContents"
          class="main-container"
          :class="[
            { 'add-height': isMobile },
            [isShowContents ? 'show' : 'hide'],
          ]"
        >
          <div class="contents-wrapper y-center">
            <ul v-for="(contents, i) in allContents" :key="i">
              <li v-for="(content, j) in contents" :key="j">
                <div
                  v-if="i != 2"
                  class="contents"
                  :class="{ 'add-line-spacing': isMobile }"
                  @click="clickContents(content.link)"
                >
                  <font-awesome-icon
                    :icon="content.icon"
                    :class="{ 'font-awesome-size': isMobile }"
                  />
                  <div v-if="isShowContentsTitle">{{ content.text }}</div>
                </div>
                <a
                  v-else
                  :href="content.link"
                  target="_blank"
                  class="contents"
                  :class="{ 'add-line-spacing': isMobile }"
                  :title="content.text"
                >
                  <font-awesome-icon
                    :icon="content.icon"
                    :class="{ 'font-awesome-size': isMobile }"
                  />
                  <div>{{ content.text }}</div>
                  <font-awesome-icon
                    :icon="['fas', 'arrow-up-right-from-square']"
                    class="contents__out-link"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div v-if="isMobile" class="line"></div>
          <div v-if="isMobile" class="bottom-contents y-center x-center">
            <div class="contact">
              <nuxt-link to="/contact/" class="disable">
                <font-awesome-icon icon="envelope-open-text" class="disable" />
                <div v-if="isShowContentsTitle" class="disable">
                  お問い合わせ
                </div>
              </nuxt-link>
            </div>
            <div class="language-wrapper y-center">
              <font-awesome-icon icon="globe-americas" class="disable" />
              <div class="language y-center">
                <a
                  :class="{ selected: !isChangedLanguage }"
                  @click="isChangedLanguage = false"
                >
                  JP
                </a>
                <div>/</div>
                <a
                  class="disable"
                  :class="{ selected: isChangedLanguage }"
                  @click="isChangedLanguage = true"
                >
                  EN
                </a>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowContents: false,
      isChangedLanguage: false,
      isMobile: true,
      isShowContentsTitle: true,
      width: 0,
      headerHeight: 0,
      allContents: [
        [
          {
            text: 'HOME',
            link: '/',
            icon: 'home',
          },
          {
            text: 'お知らせ',
            link: '/news',
            icon: 'info-circle',
          },
          {
            text: 'C3について',
            link: '/about',
            icon: 'users',
          },
          {
            text: 'ブログ',
            link: '/blog',
            icon: 'file-alt',
          },
        ],
        [
          {
            text: 'GAME',
            link: '/community/21AY3pJOP214Gsw1d9u6cD',
            icon: 'gamepad',
          },
          {
            text: 'CG',
            link: '/community/5Ay58j7CHdYFqKShRbr5tD',
            icon: 'cubes',
          },
          {
            text: 'HACK',
            link: '/community/39t5DaMrgq579LDvqWGKZK',
            icon: 'laptop-code',
          },
          {
            text: 'MEDIA_ART',
            link: '/community/1q0aXzj2r1O0pC5soNRQok',
            icon: 'palette',
          },
        ],
        [
          {
            text: 'ToyBox',
            link: 'https://toybox.compositecomputer.club/',
            icon: 'box-open',
          },
          {
            text: 'Twitter',
            link: 'https://twitter.com/c3_kyutech',
            icon: ['fab', 'twitter'],
          },
          {
            text: 'GitHub',
            link: 'https://github.com/Kyutech-C3',
            icon: ['fab', 'github'],
          },
          {
            text: 'Youtube',
            link: 'https://www.youtube.com/channel/UCeRY2jujVBYRqmilrCZytFw',
            icon: ['fab', 'youtube'],
          },
        ],
      ],
    }
  },
  mounted() {
    this.initHeaderHeight()
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('resize', this.initHeaderHeight)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('resize', this.initHeaderHeight)
  },
  methods: {
    initHeaderHeight() {
      this.$emit('change-header-height')
      this.headerHeight = this.$refs.header.getBoundingClientRect().height
    },
    showContents() {
      this.isShowContents = !this.isShowContents
      this.$emit('masked-screen')
    },
    closeHeader() {
      this.isShowContents = false
    },
    clickContents(to) {
      this.$router.push(to)
      this.isShowContents = false
      this.$emit('masked-screen')
    },
    handleResize() {
      this.width = window.innerWidth
      if (this.width < 1000) {
        this.isMobile = true

        if (this.width < 600) {
          this.isShowContentsTitle = false
        } else {
          this.isShowContentsTitle = true
        }
      } else {
        this.isMobile = false
        this.isShowContentsTitle = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.disable {
  pointer-events: none;
  color: $light-gray !important;
}
// ヘッダー全体
.header {
  max-width: 1500px;
  width: 100%;
  position: fixed;
  top: var(--header-top);
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
}
.header-wrapper {
  position: relative;
  width: 95%;
  background-color: $white;
  margin: auto;
  box-shadow: 0px 2px 8px #00000033;
  border-radius: max(min(6vw, 45px), 25px);
}

// ヘッダー部分
.header-container {
  position: relative;
  max-height: var(--header-max-height);
  height: var(--header-height);
  min-height: var(--header-min-height);
  padding: 0 max(min(7vw, 50px), 25px);
  justify-content: space-between;
  font-size: $font-size-header;

  &__left {
    svg {
      width: 40px;
      max-height: calc(var(--header-max-height) * 0.6);
      height: calc(var(--header-height) * 0.6);
      min-height: calc(var(--header-min-height) * 0.6);
      margin-right: min(5vw, 50px);
      cursor: pointer;
    }
    .logo {
      max-height: calc(var(--header-max-height) * 0.6);
      height: calc(var(--header-height) * 0.6);
      min-height: calc(var(--header-min-height) * 0.6);
      width: auto;
    }
  }
  &__right {
    svg {
      font-size: 28px;
      margin-right: 15px;
    }
    .contact {
      font-size: 24px;
      margin-right: 30px;

      div {
        color: $base-font-color;
      }
    }
    .language {
      width: 132px;
      height: 48px;
      font-size: 24px;
      justify-content: center;
      box-shadow: 0px 2px 8px #00000033;
      border-radius: 60px;

      .selected {
        color: $light-blue !important;
        border-bottom: solid $light-blue;
      }
      div {
        color: $base-font-color;
        margin: 0 7px;
      }
    }
  }
}

// ヘッダー展開時の中身
.main-container {
  padding: 0 0 20px 0;
  overflow: hidden;

  .contents-wrapper {
    padding: 20px 50px 0 50px;
    justify-content: space-around;
    border-top: solid 1px $light-gray;

    .contents {
      height: 30px;
      display: flex;
      align-items: center;
      color: $base-font-color;
      cursor: pointer;
      position: relative;

      &__out-link {
        font-size: xx-small;
      }
    }
    .contents::after {
      position: absolute;
      bottom: -4px;
      left: 0;
      content: '';
      width: 100%;
      height: 2px;
      background: $base-font-color;
      transform: scale(0, 1);
      transform-origin: left top;
      transition: transform 0.3s;
    }
    .contents:hover {
      color: $black;

      svg {
        color: $black;
      }
    }
    .contents:hover::after {
      background: $black;
      transform: scale(1, 1);
    }
    .add-line-spacing {
      padding: 1vw 0;
    }
    ul {
      list-style: none;
      padding-left: 0;
    }
    li {
      padding-bottom: 10px;
      font-size: 20px;
    }
    svg {
      font-size: 20px;
      width: 25px;
      margin-right: 10px;
    }
  }
  .bottom-contents {
    padding: 0 17vw;
    justify-content: space-around;
    svg {
      font-size: 28px;
      margin-right: 15px;
    }
    .contact {
      font-size: 20px;
      margin-left: 15px;
      margin-right: 15px;

      div {
        color: $base-font-color;
      }
    }
    .language {
      width: 120px;
      height: 40px;
      font-size: 20px;
      justify-content: center;
      box-shadow: 0px 2px 8px #00000033;
      border-radius: 60px;

      .selected {
        color: $light-blue !important;
        border-bottom: solid $light-blue;
      }
      div {
        color: $base-font-color;
        margin: 0 7px;
      }
    }
  }
  .line {
    content: '';
    margin: 0 auto 20px auto;
    width: 70%;
    height: 0.5px;
    border: solid $light-gray;
    border-width: 0.5px;
  }
}

.font-awesome-size {
  width: 30px !important;
  height: 30px;
}

.y-center {
  display: flex;
  align-items: center;
}

.x-center {
  justify-content: center;
}

a,
a:visited {
  text-decoration: none;
  color: $base-font-color;
  display: flex;
  align-items: center;
  cursor: pointer;
}

svg {
  color: $base-font-color;
}

// transition
.v-enter-active {
  transition: opacity 0.5s linear;
}
.v-enter {
  opacity: 0;
}

* {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

@media screen and (max-width: $media-query-s-small-max-width) {
  .main-container .contents-wrapper {
    padding: 20px 30px 0 30px;
  }
}
</style>
