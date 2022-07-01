<template>
  <div class="users">
    <user
      v-for="(user, index) in users"
      :id="user.sys.id"
      :key="index"
      :name="user.fields.name"
      :icon="user.fields.icon.fields.file.url"
      :show-name="true"
      :color="'black'"
      :shadow="false"
      class="user"
    />
  </div>
</template>

<script>
import User from '@/components/User.vue'
export default {
  components: {
    User,
  },
  props: {
    users: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.users {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.user {
  margin: 0 5px 0 0;
}
</style>
