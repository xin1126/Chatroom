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
            <div class="ml-10" v-if="change !== Object.keys(item).join('')">
              <i
                v-if="privateRoom.indexOf(Object.keys(item).join('')) >= 0"
                class="fas fa-lock mr-2"
              ></i>
              <button
                class="
                  text-sm
                  bg-gray-700
                  hover:bg-gray-900
                  text-white
                  rounded-lg
                  p-2
                "
                @click="
                  enterRoom(
                    Object.keys(item).join(''),
                    privateRoom.indexOf(Object.keys(item).join(''))
                  )
                "
              >
                進入房間
              </button>
            </div>
            <div class="ml-4" v-else>
              <div class="flex mb-1">
                <input
                  class="pl-2 rounded-l-lg text-black"
                  type="text"
                  placeholder="請輸入密碼"
                  v-model="privatePassword"
                />
                <button
                  class="
                    text-sm
                    bg-gray-700
                    hover:bg-gray-900
                    text-white
                    rounded-r-lg
                    p-2
                  "
                  @click="enterPrivateRoom(Object.keys(item).join(''))"
                >
                  確認
                </button>
              </div>

              <p v-show="warn" class="text-red-500">
                <i class="fas fa-exclamation-triangle mr-1"></i>密碼錯誤
              </p>
            </div>
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
          @click="privateView = true"
        >
          建立私人房間
        </button>
      </div>
      <div
        v-show="privateView"
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
      >
        <div class="bg-gray-700 p-3 rounded-lg text-center">
          <label for="password" class="mb-1 text-white block"
            ><i class="fas fa-lock mr-1"></i>設定房間密碼</label
          >
          <input
            class="mb-2 pl-2 rounded"
            type="text"
            id="password"
            placeholder="請輸入密碼"
            v-model="password"
          />
          <div>
            <button
              class="
                bg-gray-900
                dark:bg-gray-500
                dark:hover:bg-gray-600
                hover:bg-gray-800
                text-white
                rounded-lg
                px-2
                mr-2
              "
              @click="privateView = false"
            >
              取消
            </button>
            <button
              class="
                bg-gray-900
                dark:bg-gray-500
                dark:hover:bg-gray-600
                hover:bg-gray-800
                text-white
                rounded-lg
                px-2
              "
              @click="router.push('/private')"
            >
              建立房間
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { name, database, password } from '../compositionApi/role';

export default {
  setup() {
    const router = useRouter();
    const data = ref([]);
    const privateRoom = ref([]);
    const change = ref('');
    const privatePassword = ref('');
    const searchView = ref(false);
    const privateView = ref(false);
    const warn = ref(false);
    let privateRoomTotal;

    const enterRoom = (id, status) => {
      if (status < 0) {
        router.push(`/room/${id}`);
      } else {
        change.value = id;
      }
      warn.value = false;
      privatePassword.value = '';
    };

    const searchClosure = (e) => {
      if (e.target.nodeName === 'DIV' || e.target.nodeName === 'I') {
        searchView.value = false;
        change.value = '';
      }
    };

    const enterPrivateRoom = (id) => {
      privateRoomTotal.forEach((item) => {
        if (Object.keys(item).join('') === id) {
          if (Object.values(item).join('') === privatePassword.value) {
            router.push(`/room/${id}`);
          } else {
            warn.value = true;
          }
        }
      });
    };

    onMounted(() => {
      if (name.value) {
        database.ref('publicRoom').on('value', (snapshot) => {
          if (!snapshot.val()) {
            data.value = [];
            return;
          }
          if (Object.entries(snapshot.val()).pop()[1] !== 1) {
            data.value = Object.entries(snapshot.val()).map((item) => ({ [item[0]]: Object.keys(Object.values(item[1])[0]).join('') }));
          }
        });
        database.ref('privateRoom').on('value', (snapshot) => {
          if (snapshot.val()) {
            privateRoom.value = Object.entries(snapshot.val()).map((item) => Object.keys(item[1])[0]);
            privateRoomTotal = Object.values(snapshot.val());
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
      privateView,
      password,
      privateRoom,
      change,
      enterPrivateRoom,
      privatePassword,
      warn,
    };
  },
};
</script>
