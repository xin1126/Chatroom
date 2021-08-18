<template>
  <div class="flex flex-col items-center sm:mt-20 mt-10 mx-3">
    <div class="flex mb-10">
      <div class="flex flex-col items-center sm:mr-24 mr-6">
        <img
          class="max-w-28 h-32 mb-2"
          src="@/assets/img/internet.png"
          alt=""
        />
        <button
          type="button"
          class="
            text-lg
            sm:text-2xl
            bg-gray-700
            dark:bg-gray-500
            dark:hover:bg-gray-600
            hover:bg-gray-900
            text-white
            rounded-lg
            p-2
          "
          @click="router.push('/chatroom')"
        >
          公開頻道
        </button>
      </div>
      <div class="flex flex-col items-center mr-3">
        <img class="w-28 h-32 mb-2" src="@/assets/img/search.png" alt="" />
        <button
          type="button"
          class="
            text-lg
            sm:text-2xl
            bg-gray-700
            dark:bg-gray-500
            dark:hover:bg-gray-600
            text-white
            rounded-lg
            p-2
            mb-2
          "
          :class="
            !data.length
              ? ['disabled:opacity-50', 'cursor-default']
              : 'hover:bg-gray-900'
          "
          :disabled="!data.length"
          @click="searchView = true"
        >
          搜尋房間
        </button>
        <div class="text-white dark:text-black">
          {{
            data.length ? `(目前共有${data.length}間)` : '(目前無人建立房間)'
          }}
        </div>
      </div>
      <div
        v-show="searchView"
        class="
          absolute
          top-0
          left-0
          w-full
          h-full
          flex
          justify-center
          items-center
          bg-white/25
        "
        @click="searchClosure"
      >
        <ul class="bg-gray-600 rounded-lg px-3 pt-3">
          <li
            class="
              flex
              items-center
              justify-between
              border-bottom border-gray-900
              pb-2
              text-white
            "
          >
            <span class="text-gray-600">1</span
            ><span class="text-lg">搜尋房間</span>
            <i class="fas fa-times cursor-pointer hover:text-gray-800"></i>
          </li>
          <li
            class="flex justify-between items-center mb-3 text-white"
            v-for="item in data"
            :key="item"
          >
            房主：{{ Object.values(item).join('') }}
            <button
              class="
                text-sm
                bg-gray-700
                hover:bg-gray-900
                text-white
                rounded-lg
                ml-6
                p-2
              "
              @click="enterRoom(Object.keys(item).join(''))"
            >
              進入房間
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex">
      <div class="flex flex-col items-center sm:mr-16 mr-4">
        <img class="max-w-40 h-32 mb-2" src="@/assets/img/party.png" alt="" />
        <button
          type="button"
          class="
            text-lg
            sm:text-2xl
            bg-gray-700
            dark:bg-gray-500
            dark:hover:bg-gray-600
            hover:bg-gray-900
            text-white
            rounded-lg
            p-2
          "
          @click="router.push('/public')"
        >
          建立公開房間
        </button>
      </div>
      <div class="flex flex-col items-center">
        <img
          class="max-w-28 h-32 mb-2"
          src="@/assets/img/password.png"
          alt=""
        />
        <button
          type="button"
          class="
            text-lg
            sm:text-2xl
            bg-gray-700
            dark:bg-gray-500
            dark:hover:bg-gray-600
            hover:bg-gray-900
            text-white
            rounded-lg
            p-2
          "
        >
          建立私人房間
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { name, database } from '../compositionApi/role';

export default {
  setup() {
    const router = useRouter();
    const data = ref([]);
    const searchView = ref(false);
    const enterRoom = (id) => {
      router.push(`/room/${id}`);
    };
    const searchClosure = (e) => {
      if (e.target.nodeName === 'DIV' || e.target.nodeName === 'I') {
        searchView.value = false;
      }
    };
    onMounted(() => {
      if (name.value) {
        database.ref('publicRoom').on('value', (snapshot) => {
          if (!snapshot.val()) return;
          if (Object.entries(snapshot.val()).pop()[1] !== 1) {
            data.value = Object.entries(snapshot.val()).map((item) => ({ [item[0]]: Object.keys(Object.values(item[1])[0]).join('') }));
          }
        });
      } else {
        router.push('/');
      }
    });
    return {
      router,
      data,
      enterRoom,
      searchView,
      searchClosure,
    };
  },
};
</script>
