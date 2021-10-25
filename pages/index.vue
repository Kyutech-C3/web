<template>
  <div>
    <top-top/>
    <top-about-c-3/>
    <top-about-community/>
    <top-community-link/>
    <top-blog/>
  </div>
</template>

<script>
import TopTop from '~/components/TopTop.vue'
import TopAboutC3 from '~/components/TopAboutC3.vue'
import TopAboutCommunity from '~/components/TopAboutCommunity.vue'
import TopBlog from '~/components/TopBlog.vue'
import TopCommunityLink from '~/components/TopCommunityLink.vue'


export default {
  components: {
    TopAboutCommunity,
    TopAboutC3,
    TopTop,
    TopCommunityLink,
    TopBlog
  }
}
</script>
