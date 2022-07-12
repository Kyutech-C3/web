<template>
  <div class="users">
    <user
      v-for="(user, index) in users"
      :id="user.sys.id"
      :key="index"
      :name="user.fields.name"
      :icon="user.fields.icon.fields.file.url"
      :show-name="true"
      :color="color"
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
    color: {
      type: String,
      required: true,
      default() {
        return 'black'
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.users {
  display: flex;
  width: 60%;
  align-items: center;
  --user-height: 25px;
  --img-height: 20px;
}
.user {
  margin: 0 5px;
}
</style>
