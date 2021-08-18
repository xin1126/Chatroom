<template>
  <div
    class="
      max-w-[850px]
      mx-auto
      sm:pt-[150px]
      bg-gray-500
      dark:bg-gray-200
      py-3
    "
  >
    <div
      class="
        grid grid-cols-12
        bg-gray-700
        dark:bg-white
        dark:shadow-md
        lg:p-10
        sm:p-5
        px-3
        pt-5
        mx-3
        rounded-lg
      "
    >
      <div class="sm:col-span-7 col-span-12 sm:mb-0 mb-10">
        <h2
          class="
            text-center text-white
            dark:text-gray-500
            sm:text-3xl
            text-2xl
            font-black
            mb-3
          "
        >
          選擇頭像
        </h2>
        <div class="grid sm:grid-cols-9 grid-cols-10 gap-3">
          <img
            v-for="(item, index) in imgs"
            :key="item"
            :src="item"
            :alt="gender"
            class="
              cursor-pointer
              w-[120px]
              h-[140px]
              sm:col-span-3
              col-span-5
              mx-auto
              hover:scale-110
            "
            @click="updateAvatar(index + 1)"
          />
        </div>
      </div>
      <div class="sm:col-span-5 col-span-12 sm:pb-0 pb-5">
        <h2
          class="
            text-white
            dark:text-gray-500
            text-center
            sm:text-3xl
            text-2xl
            font-black
            mb-1
          "
        >
          基本資料
        </h2>
        <img
          :src="imgUrl"
          alt="avatar"
          class="w-[150px] h-[180px] mx-auto mb-3"
        />
        <div class="flex justify-center mb-5">
          <button
            class="
              bg-blue-700
              hover:bg-blue-900
              text-white
              rounded-lg
              active:ring-4
              p-2
              mr-20
            "
            @click="updateGender('man')"
          >
            男性
          </button>
          <button
            class="bg-red-400 hover:bg-red-600 text-white rounded-lg p-2"
            @click="updateGender('woman')"
          >
            女性
          </button>
        </div>
        <div class="flex justify-center">
          <input
            type="text"
            :placeholder="str"
            class="
              rounded-l-lg
              p-2
              lg:w-max
              sm:w-6/12
              w-7/12
              dark:border-2 dark:border-r-0 dark:border-gray-500
            "
            @keydown.enter="enterChatroom()"
            v-model="name"
          />
          <button
            class="bg-gray-500 text-white rounded-r-lg p-2"
            :class="
              inputName
                ? ['disabled:opacity-50', 'cursor-not-allowed']
                : 'hover:bg-gray-800'
            "
            @click="enterChatroom"
          >
            進入聊天室
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import role, { gender, name, imgUrl } from '../compositionApi/role';

export default {
  setup() {
    const imgs = ref([]);
    const str = ref('請輸入暱稱');
    const inputName = ref(true);
    const router = useRouter();
    const {
      updateAvatar, updateGender, getImg,
    } = role();

    const enterChatroom = () => {
      if (name.value !== '') {
        router.push('/hall');
      } else {
        str.value = str.value === '請輸入暱稱' ? '尚未輸入暱稱' : '請輸入暱稱';
      }
    };

    const getImgs = () => {
      imgs.value = [];
      for (let i = 1; i < 7; i += 1) {
        const path = `/src/assets/img/${gender.value}${i}.png`;
        const modules = import.meta.globEager('/src/assets/img/*.png');
        imgs.value.push(modules[path].default);
      }
    };

    watch(gender, () => getImgs());

    watch(name, () => { inputName.value = name.value === ''; });

    onMounted(() => {
      getImg();
      getImgs();
      name.value = '';
    });

    return {
      gender,
      name,
      inputName,
      imgUrl,
      imgs,
      str,
      updateAvatar,
      updateGender,
      enterChatroom,
    };
  },
};
</script>
