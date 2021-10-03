<template>
  <div class="header">
    <div class="header-wrapper" :style="headerStyles">
      <div class="header-container center">
        <div class="left-contents center">
          <div @click="showContents = !showContents">
            <font-awesome-icon :icon="showContents ? 'times' : 'bars'" />
          </div>
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/61457046?s=200&v=4"
            />
          </div>
        </div>
        <div class="right-contents center">
          <div class="contact">
            <nuxt-link to="/contact">
              <font-awesome-icon icon="envelope-open-text" />
              <div>お問い合わせ</div>
            </nuxt-link>
          </div>
          <div class="language-wrapper center">
            <font-awesome-icon icon="globe-americas" />
            <div class="language center">
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
        <div v-show="showContents" class="main-container">
          <div class="contents-wrapper center">
            <ul v-for="(contents, i) in allContents" :key="i">
              <li v-for="(content, j) in contents" :key="j">
                <nuxt-link v-if="i != 2" :to="content.link">
                  <font-awesome-icon :icon="content.icon" />
                  <div>{{ content.text }}</div>
                </nuxt-link>
                <a v-else :href="content.link">
                  <font-awesome-icon :icon="content.icon" />
                  <div>{{ content.text }}</div>
                </a>
              </li>
            </ul>
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
      showContents: false,
      isChangedLanguage: false,
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
            link: '/community/0',
            icon: 'gamepad',
          },
          {
            text: 'CG',
            link: '/community/1',
            icon: 'cubes',
          },
          {
            text: 'HACK',
            link: '/community/2',
            icon: 'laptop-code',
          },
          {
            text: 'MEDIA_ART',
            link: '/community/3',
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
  computed: {
    headerStyles() {
      if (this.showContents) {
        return {
          '--height': '300px',
        }
      } else {
        return {
          '--height': '90px',
        }
      }
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
}
.header-wrapper {
  width: 95%;
  height: var(--height);
  margin: auto;
  box-shadow: 0px 2px 8px #00000033;
  border-radius: 60px;
}

// ヘッダー部分
.header-container {
  height: 90px;
  padding: 0 50px;
  justify-content: space-between;
  font-size: $font-size-header;

  .left-contents {
    svg {
      width: 40px;
      height: 100%;
      margin: auto;
      margin-right: 60px;
      cursor: pointer;
    }
    img {
      height: 70px;
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
  height: 200px;

  .contents-wrapper {
    height: 100%;
    padding: 0 50px;
    justify-content: space-around;
    border-top: solid 1px $light-gray;

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
}

.center {
  display: flex;
  align-items: center;
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
