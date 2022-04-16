<template>
  <div>
    <base-entry-list-item
      v-for="(entry, index) in entryList"
      :key="index"
      :entry-id="entry.id"
      :entry-title="entry.title"
      :entry-date="entry.date"
      :entry-contents="entry.contents"
      :entry-type="entryType"
      class="entry-item"
    />
  </div>
</template>

<script>
import BaseEntryListItem from '@/components/BaseEntryListItem.vue'
export default {
  components: {
    BaseEntryListItem,
  },
  props: {
    entryList: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
    entryType: {
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
.entry-item {
  margin: 0.5vw 0;
  padding: 1.5vw 2vw;
}
.entry-item:hover {
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}
</style>
