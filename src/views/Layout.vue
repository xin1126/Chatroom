<template>
  <div
    class="
      w-full
      py-3
      dark:bg-white
      dark:shadow-md
      bg-gray-700
      text-white
      font-black
      mb-2
    "
  >
    <div
      class="max-w-[850px] md:mx-auto flex items-center justify-between mx-3"
    >
      <label for="toggleB" class="flex items-center cursor-pointer">
        <div class="relative">
          <input
            type="checkbox"
            id="toggleB"
            class="sr-only"
            v-model="checked"
          />
          <div
            class="
              block
              bg-gray-600
              dark:bg-gray-100
              dark:shadow-inner
              w-14
              h-8
              rounded-full
            "
          ></div>
          <div
            class="
              dot
              absolute
              left-1
              top-1
              bg-gray-800
              w-6
              h-6
              rounded-full
              transition
            "
          ></div>
        </div>
      </label>
      <h1
        class="sm:text-3xl text-2xl dark:text-gray-500 md:mr-0"
        :class="view ? 'mr-0' : 'mr-10'"
      >
        匿名聊天室
      </h1>
      <div v-if="view" class="flex items-center">
        <img :src="imgUrl" alt="avatar" class="w-[30px] h-[40px]" />
        <div class="pl-1 dark:text-gray-500">{{ name }}</div>
      </div>
      <div v-else class="text-gray-700 dark:text-white">1</div>
    </div>
  </div>
  <RouterView />
</template>

<script>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { name, imgUrl, checked } from '../compositionApi/role';

export default {
  setup() {
    const route = useRoute();
    const view = ref(false);

    watch(route, () => {
      view.value = route.path === '/chatroom';
    });

    watch(checked, () => {
      document.body.classList.toggle('dark');
      document.body.style.backgroundColor = checked.value ? '#E5E7EB' : '#6b7280';
    });

    return {
      name,
      view,
      imgUrl,
      checked,
    };
  },
};
</script>

<style lang="scss">
body {
  background-color: #6b7280;
}

input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #6b7280;
}

.z-bg {
  z-index: -1;
}
</style>
