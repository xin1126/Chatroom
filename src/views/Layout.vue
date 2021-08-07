<template>
  <div
    class="
      flex
      items-center
      justify-center
      py-3
      bg-gray-700
      text-white
      font-black
      absolute
      w-full
    "
  >
    <h1 class="text-3xl">Chatroom</h1>
    <div v-if="view" class="flex items-center ml-60">
      <img :src="`/src/assets/img/${gender}${numAvatar}.png`" alt="" />
      <div class="pl-1">{{ name }}</div>
    </div>
  </div>
  <RouterView />
</template>

<script>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { numAvatar, gender, name } from '../compositionApi/role';

export default {
  setup() {
    const route = useRoute();
    const view = ref(false);
    watch(route, () => {
      view.value = route.path === '/chatroom';
    });
    return {
      numAvatar,
      gender,
      name,
      view,
    };
  },
};
</script>

<style scoped lang="scss">
img {
  width: 40px;
  height: 50px;
}
</style>
