<template>
  <div
    class="
      md:hidden
      w-full
      sm:w-[500px]
      flex
      justify-between
      bg-gray-800
      dark:bg-gray-300
      rounded-t-lg
      px-3
      py-2
    "
  >
    <p class="text-white dark:text-gray-600">
      線上人數：{{ Object.values(onLine).length }}
    </p>
    <button
      type="button"
      class="
        bg-gray-500
        hover:bg-gray-600
        text-white text-sm
        flex
        rounded-lg
        px-2
        py-1
      "
      @click="onLineHeight = !onLineHeight"
    >
      查看線上用戶
    </button>
    <div
      class="
        absolute
        right-6
        top-16
        bg-gray-500
        rounded-lg
        z-10
        overflow-hidden
      "
      :class="{ 'h-0': onLineHeight }"
    >
      <ul class="pl-3 pt-2">
        <li
          class="flex items-center mb-2 text-white dark:text-gray-600"
          v-for="item in onLine"
          :key="item"
        >
          <img
            class="w-[30px] h-[40px] mr-1"
            :src="Object.values(item).join('')"
            alt=""
          />
          <p class="pr-2">
            {{ Object.keys(item).join('') }}
          </p>
          <div
            class="w-[12px] h-[12px] bg-green-500 rounded-full mr-3 ml-auto"
          ></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { onLine } from '../compositionApi/firebaseData';

export default {
  setup() {
    const onLineHeight = ref(true);
    return {
      onLine,
      onLineHeight,
    };
  },
};
</script>
