<template>
  <div class="header">
    <div class="header-wrapper">
      <div class="header-container y-center">
        <div class="left-contents y-center">
          <font-awesome-icon
            :icon="isShowContents ? 'times' : 'bars'"
            @click="showContents()"
          />
          <img
            type="image/webp"
            src="@/assets/image/s_logo.webp"
            class="logo"
          />
        </div>
        <div v-if="!isMobile" class="right-contents y-center">
          <div class="contact">
            <nuxt-link to="/contact" class="disable">
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
          :class="{ 'add-height': isMobile }"
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
                  :class="{ 'add-line-spacing': isMobile, disable: j === 0 }"
                >
                  <font-awesome-icon
                    :icon="content.icon"
                    :class="{ 'font-awesome-size': isMobile, disable: j === 0 }"
                  />
                  <div :class="{ disable: j === 0 }">{{ content.text }}</div>
                </a>
              </li>
            </ul>
          </div>
          <div v-if="isMobile" class="line"></div>
          <div v-if="isMobile" class="bottom-contents y-center x-center">
            <div class="contact">
              <nuxt-link to="/contact" class="disable">
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
            text: 'Toybox',
            link: '/',
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
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
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
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
}
.header-wrapper {
  width: 95%;
  background-color: $white;
  margin: auto;
  box-shadow: 0px 2px 8px #00000033;
  border-radius: 45px;
}

// ヘッダー部分
.header-container {
  height: 90px;
  padding: 0 50px;
  justify-content: space-between;
  font-size: $font-size-header;

  .left-contents {
    height: inherit;
    svg {
      width: 40px;
      height: 100%;
      margin: auto;
      margin-right: min(7vw, 60px);
      cursor: pointer;
    }
    img {
      height: 60%;
    }
  }
  .right-contents {
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

.logo {
  height: 60%;
  width: auto;
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

@media screen and (max-width: $media-query-s-small-max-width) {
  .header-wrapper {
    border-radius: 30px;
    .header-container {
      height: 60px;
      .left-contents svg {
        width: 30px;
      }
    }
  }
  .main-container .contents-wrapper {
    padding: 20px 30px 0 30px;
  }
}

// transition
.v-enter-active {
  transition: opacity 1s;
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
</style>
