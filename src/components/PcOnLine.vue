<template>
  <div
    class="
      w-[180px]
      h-onLine
      mt-3
      bg-gray-700
      dark:bg-white
      dark:shadow-md
      rounded-lg
      hidden
      md:block
    "
  >
    <p class="text-center mt-3 text-white dark:text-gray-600">
      線上人數：{{ Object.values(onLine).length }}
    </p>
    <ul class="pl-3">
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
        {{ Object.keys(item).join('') }}
        <div
          class="w-[12px] h-[12px] bg-green-500 rounded-full ml-auto mr-3"
        ></div>
      </li>
    </ul>
  </div>
</template>

<script>
import { onLine } from '../compositionApi/firebaseData';

export default {
  setup() {
    return {
      onLine,
    };
  },
};
</script>

<style lang="scss">
.h-onLine {
  height: calc(100vh - 100px);
}
</style>
