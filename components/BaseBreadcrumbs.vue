<template>
  <div class="breadcrumbs">
    <div v-for="(breadcrumb, index) in breadcrumbs" :key="index">
      <nuxt-link
        :to="breadcrumb.url"
        class="link"
        :class="{ 'is-disabled': breadcrumbs.length === index + 1 }"
      >
        {{ breadcrumb.text }}
      </nuxt-link>
      <span v-if="breadcrumbs.length !== index + 1">/</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('breadcrumbs', ['breadcrumbs']),
    jsonld() {
      const items = this.breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@id': item.url,
          name: item.text,
        },
      }))
      return {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items,
      }
    },
  },
  head() {
    const hid = `jsonld-${this._uid}`
    return {
      script: [
        {
          hid,
          type: 'application/ld+json',
          innerHTML: JSON.stringify(this.jsonld, null, 2),
        },
      ],
      __dangerouslyDisableSanitizers: ['script'],
      __dangerouslyDisableSanitizersByTagID: {
        [hid]: 'innerHTML',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  align-items: center;
  font-size: $font-size-other-contents-other;
}
.link {
  color: $base-font-color;
  text-decoration: none;
  margin: 0 3px;
}
.link:hover {
  text-decoration: underline;
}
.is-disabled {
  pointer-events: none;
  color: $black;
}
</style>
