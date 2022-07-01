<template>
  <div class="card-list">
    <card
      v-for="(card_item, i) in cardItems"
      :key="i"
      :id="card_item.sys.id"
      :title="card_item.fields.title"
      :author="card_item.fields.user"
      :tags="card_item.fields.tags"
      :description="card_item.fields.digest"
      :card_image="card_item.fields.thumbnail.fields.file.url"
      :date="card_item.sys.updatedAt"
      :entryType="entryType"
    />
  </div>
</template>

<script>
import Card from '@/components/card/Card.vue'

export default {
  components: { Card },
  props: {
    cardItems: {
      type: Array,
      required: true,
    },
    entryType: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.card-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(315px, 1fr));
  row-gap: 38px;
  column-gap: 26px;
}
</style>
