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
            src="https://avatars.githubusercontent.com/u/61457046?s=200&v=4"
            class="logo"
          />
        </div>
        <div v-if="!isMobile" class="right-contents y-center">
          <div class="contact">
            <nuxt-link to="/contact">
              <font-awesome-icon icon="envelope-open-text" />
              <div>お問い合わせ</div>
            </nuxt-link>
          </div>
          <div class="language-wrapper y-center">
            <font-awesome-icon icon="globe-americas" />
            <div class="language y-center">
              <a
                :class="{ selected: !isChangedLanguage }"
                @click="isChangedLanguage = false"
              >
                JP
              </a>
              <div>/</div>
              <a
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
                  :class="{ 'add-line-spacing': isMobile }"
                >
                  <font-awesome-icon
                    :icon="content.icon"
                    :class="{ 'font-awesome-size': isMobile }"
                  />
                  <div>{{ content.text }}</div>
                </a>
              </li>
            </ul>
          </div>
          <div v-if="isMobile" class="line"></div>
          <div v-if="isMobile" class="bottom-contents y-center x-center">
            <div class="contact">
              <nuxt-link to="/contact">
                <font-awesome-icon icon="envelope-open-text" />
                <div v-if="isShowContentsTitle">お問い合わせ</div>
              </nuxt-link>
            </div>
            <div class="language-wrapper y-center">
              <font-awesome-icon icon="globe-americas" />
              <div class="language y-center">
                <a
                  :class="{ selected: !isChangedLanguage }"
                  @click="isChangedLanguage = false"
                >
                  JP
                </a>
                <div>/</div>
                <a
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
      console.log(this.isMobile)
    },
  },
}
</script>

<style lang="scss" scoped>
// ヘッダー全体
.header {
  width: 100%;
  position: fixed;
  top: 20px;
  left: 0;
  z-index: 10;
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
  width: auto;
  height: 60%;
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
