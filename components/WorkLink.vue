<template>
  <div class="work-link">
    <a href="https://toybox.compositecomputer.club" target="_blank">
      <font-awesome-icon
        :icon="['fas', 'arrow-up-right-from-square']"
        class="outside-link-icon"
      />
      <span>作品を見る</span>
    </a>
    <div class="work-link-bg">
      <div class="work-link-bg-img-wrapper">
        <img
          v-for="(work, index) in [...works]"
          :key="index"
          :src="work.thumbnail"
          :title="work.title"
          lazy
        />
      </div>
      <div class="work-link-bg-img-wrapper">
        <img
          v-for="(work, index) in [...works]"
          :key="index"
          :src="work.thumbnail"
          :title="work.title"
          lazy
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    works: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      title: 'C3について',
      description: '',
      areas_data: [
        {
          name: 'GAME',
          link: '/community/21AY3pJOP214Gsw1d9u6cD',
          icon: 'gamepad',
        },
        {
          name: '3DCG',
          link: '/community/5Ay58j7CHdYFqKShRbr5tD',
          icon: 'cubes',
        },
        {
          name: 'HACK',
          link: '/community/39t5DaMrgq579LDvqWGKZK',
          icon: 'laptop-code',
        },
        {
          name: '2DCG',
          link: '/community/1q0aXzj2r1O0pC5soNRQok',
          icon: 'palette',
        },
        {
          name: 'MUSIC',
          link: '/community/1q0aXzj2r1O0pC5soNRQok',
          icon: 'music',
        },
      ],
    }
  },
  created() {
    this.description = this.c3_introduction_digest
  },
}
</script>

<style lang="scss" scoped>
.work-link {
  width: 100%;
  min-height: 270px;
  height: 55vw;
  max-height: 470px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  border-radius: 20px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
  }

  a {
    font-size: 2.5rem;
    color: $base-font-color;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 100px;
    z-index: 1;
    color: white;
    font-weight: bold;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease;
    position: relative;

    &::after {
      position: absolute;
      bottom: -2px;
      left: 0;
      content: '';
      width: 100%;
      height: 2px;
      background: $white;
      transform: scale(0, 1);
      transform-origin: center top;
      transition: transform 0.3s;
      border-radius: 2px;
    }

    &:hover::after {
      transform: scale(1, 1);
    }

    .outside-link-icon {
      margin-right: 2px;
      font-size: 1.5rem;
    }
  }

  &-bg {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    gap: 10px;
    padding: 5px 0;

    &-img-wrapper {
      width: 2090px;
      height: 100%;
      gap: 10px;
      z-index: 0;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      animation: bg-img-scroll 10s linear infinite;
      justify-content: center;
      margin-bottom: -5px;
      overflow: hidden;

      img {
        flex-grow: 1;
        object-fit: cover;
        min-width: 135px;
        width: 25vw;
        max-width: 200px;
        border-radius: 5px;
        user-select: none;
        pointer-events: none;
      }
    }
  }
}

@keyframes bg-img-scroll {
  100% {
    transform: translateX(calc(-2100px));
  }
}
</style>
