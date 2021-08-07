<template>
  <div class="flex justify-center items-center h-screen">
    <div class="bg-gray-700 p-10 flex">
      <div class="mr-6">
        <h2 class="text-white text-center text-3xl font-black mb-1">Welcome</h2>
        <p class="text-white text-center">匿名聊天室</p>
        <img :src="imgUrl" alt="avatar" class="mx-auto" />
        <div class="flex justify-evenly mb-5">
          <button
            class="bg-blue-700 hover:bg-blue-900 text-white rounded-lg p-2"
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
        <input
          type="text"
          placeholder="輸入暱稱"
          class="rounded-l-lg p-2"
          v-model="name"
        />
        <button
          class="bg-gray-500 hover:bg-gray-800 text-white rounded-r-lg p-2"
          @click="enterChatroom"
        >
          進入聊天室
        </button>
      </div>
      <div class="flex flex-wrap gender">
        <img
          v-for="(item, index) in imgs"
          :key="item"
          :src="item"
          :alt="gender"
          class="gender ml-5 cursor-pointer"
          @click="updateAvatar(index + 1)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import role, {
  numAvatar, gender, name, imgUrl,
} from '../compositionApi/role';

export default {
  setup() {
    const imgs = ref([]);
    const router = useRouter();
    const {
      updateAvatar, updateGender, getImg,
    } = role();

    const enterChatroom = () => {
      if (name.value !== '') {
        router.push('/chatroom');
      } else {
        alert('不得為空');
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

    onMounted(() => {
      getImg();
      getImgs();
    });

    return {
      numAvatar,
      gender,
      name,
      imgUrl,
      imgs,
      updateAvatar,
      updateGender,
      enterChatroom,
    };
  },
};
</script>

<style lang="scss">
.gender {
  width: 450px;
  img {
    width: 130px;
    height: 150px;
    &:hover {
      transition: 0.5s;
      transform: scale(1.1, 1.1);
    }
  }
}
</style>
