<template>
  <div
    class="
      flex
      items-center
      justify-center
      py-3
      dark:bg-red-600
      bg-gray-700
      text-white
      font-black
      absolute
      w-full
    "
  >
    <button
      class="bg-gray-500 hover:bg-gray-800 text-white rounded-lg p-2"
      @click="switchColor"
    >
      切換
    </button>
    <h1 class="text-3xl">匿名聊天室</h1>
    <div v-if="view" class="flex items-center ml-60">
      <img :src="imgUrl" alt="avatar" class="w-[40px] h-[50px]" />
      <div class="pl-1">{{ name }}</div>
    </div>
  </div>
  <RouterView />
</template>

<script>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { name, imgUrl } from '../compositionApi/role';

export default {
  setup() {
    const route = useRoute();
    const view = ref(false);
    const dom = document.body;

    const switchColor = () => {
      dom.classList.toggle('dark');
    };

    watch(route, () => {
      view.value = route.path === '/chatroom';
    });

    return {
      name,
      view,
      imgUrl,
      switchColor,
    };
  },
};
</script>
