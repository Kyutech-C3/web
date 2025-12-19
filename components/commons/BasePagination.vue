<template>
  <div class="pagination">
    <button
      class="pagination-button"
      :disabled="currentPage <= 1"
      @click="goToPage(currentPage - 1)"
    >
      &lt; 前へ
    </button>

    <div class="pagination-pages">
      <button
        v-for="page in displayPages"
        :key="page"
        class="pagination-page"
        :class="{ active: page === currentPage, ellipsis: page === '...' }"
        :disabled="page === '...'"
        @click="page !== '...' && goToPage(page)"
      >
        {{ page }}
      </button>
    </div>

    <button
      class="pagination-button"
      :disabled="currentPage >= totalPages"
      @click="goToPage(currentPage + 1)"
    >
      次へ &gt;
    </button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    maxDisplayPages: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    displayPages() {
      const pages = []
      const total = this.totalPages
      const current = this.currentPage
      const maxDisplay = this.maxDisplayPages

      if (total <= maxDisplay) {
        for (let i = 1; i <= total; i++) {
          pages.push(i)
        }
      } else {
        const half = Math.floor(maxDisplay / 2)
        let start = current - half
        let end = current + half

        if (start < 1) {
          start = 1
          end = maxDisplay
        }

        if (end > total) {
          end = total
          start = total - maxDisplay + 1
        }

        if (start > 1) {
          pages.push(1)
          if (start > 2) {
            pages.push('...')
          }
        }

        for (let i = start; i <= end; i++) {
          if (i > 0 && i <= total && !pages.includes(i)) {
            pages.push(i)
          }
        }

        if (end < total) {
          if (end < total - 1) {
            pages.push('...')
          }
          pages.push(total)
        }
      }

      return pages
    },
  },
  methods: {
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.$emit('page-change', page)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 20px 0;
}

.pagination-button {
  padding: 8px 16px;
  border: 1px solid $base-font-color;
  background-color: transparent;
  color: $base-font-color;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s, color 0.2s;

  &:hover:not(:disabled) {
    background-color: $base-font-color;
    color: #fff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.pagination-pages {
  display: flex;
  gap: 4px;
}

.pagination-page {
  min-width: 36px;
  height: 36px;
  padding: 0 8px;
  border: 1px solid $base-font-color;
  background-color: transparent;
  color: $base-font-color;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s, color 0.2s;

  &:hover:not(:disabled):not(.active) {
    background-color: $base-font-color;
    color: #fff;
  }

  &.active {
    background-color: $base-font-color;
    color: #fff;
  }

  &.ellipsis {
    border: none;
    cursor: default;
  }
}

@media screen and (max-width: $media-query-small-max-width) {
  .pagination {
    gap: 4px;
  }

  .pagination-button {
    padding: 6px 10px;
    font-size: 12px;
  }

  .pagination-page {
    min-width: 32px;
    height: 32px;
    font-size: 12px;
  }
}
</style>
