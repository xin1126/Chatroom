<template>
  <div class="flex justify-center">
    <div
      class="
        w-[180px]
        mt-3
        bg-gray-700
        dark:bg-white
        dark:shadow-md
        rounded-lg
        hidden
        md:block
      "
      :style="{ height: `${height - 100}px` }"
    >
      <p class="text-center mt-3 text-white dark:text-gray-600">
        線上人數：{{ onLine.length }}
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
    <div
      class="
        flex
        justify-center
        items-center
        flex-col
        bg-gray-500
        dark:bg-gray-200
        p-3
      "
    >
      <div
        ref="scroll"
        class="
          w-full
          sm:w-[500px]
          max-h-[750px]
          scroll
          overflow-y-auto overflow-x-hidden
          bg-gray-700
          dark:bg-white
          rounded-t-lg
          p-4
        "
        :class="checked ? ['scroll-track', 'scroll-thumb'] : 'scroll'"
        :style="{ height: `${height - 180}px` }"
      >
        <div
          class="
            md:hidden
            onLine
            flex
            justify-between
            bg-gray-800
            dark:bg-gray-300
            px-3
            py-2
          "
        >
          <p class="text-white dark:text-gray-600">
            線上人數：{{ onLine.length }}
          </p>
          <!-- <button
            class="
              bg-gray-500
              hover:bg-gray-600
              text-white text-sm
              flex
              rounded-lg
              px-2
              py-1
            "
          >
            查看線上用戶
          </button> -->
        </div>
        <ul class="message">
          <template v-for="item in data" :key="item[0]">
            <li
              v-if="
                tempId.indexOf(item[0]) < 0 &&
                Object.values(item[1])[0].content !== ''
              "
              class="flex break-all mb-8"
            >
              <img
                class="w-[40px] h-[50px]"
                :src="Object.values(item[1])[0].img"
                alt="avatar"
              />
              <div class="ml-1">
                <div class="text-white dark:text-gray-500 mb-1 relative">
                  {{ Object.keys(item[1]).join('') }}
                  <span
                    class="absolute w-52 bottom-1 ml-2 text-gray-400 text-xs"
                    >{{
                      new Date(Object.values(item[1])[0].date).toLocaleString()
                    }}{{
                      Object.values(item[1])[0].edit ? '(已編輯)' : ''
                    }}</span
                  >
                </div>
                <div
                  class="
                    relative
                    bg-gray-500
                    text-white text-lg
                    px-3
                    py-1
                    ml-2
                    rounded-lg
                  "
                >
                  <i class="fas fa-2x fa-caret-left absolute text-gray-500"></i>
                  {{ Object.values(item[1])[0].content }}
                </div>
              </div>
            </li>
            <li
              v-else-if="
                tempId.indexOf(item[0]) >= 0 &&
                Object.values(item[1])[0].content !== ''
              "
              class="text-right break-all mb-8"
            >
              <span class="mr-2 text-gray-400 text-xs"
                >{{ new Date(Object.values(item[1])[0].date).toLocaleString()
                }}{{ Object.values(item[1])[0].edit ? '(已編輯)' : '' }}</span
              >
              <div
                v-if="editInput !== item[0]"
                class="
                  inline-block
                  relative
                  bg-blue-900
                  text-white text-lg
                  px-3
                  py-1
                  mb-2
                  rounded-lg
                "
              >
                <i class="fas fa-2x fa-caret-right absolute text-blue-900"></i>
                {{ Object.values(item[1])[0].content }}
              </div>
              <input
                v-else
                type="text"
                class="
                  mb-2
                  py-1
                  pl-2
                  rounded-lg
                  dark:border-2 dark:border-gray-500
                "
                v-model="editMessage"
              />
              <div
                class="text-sm text-red-500 mb-2"
                v-show="verify && editInput === item[0]"
              >
                <i
                  v-show="
                    editMessage === '' ||
                    editMessage === Object.values(item[1])[0].content
                  "
                  class="fas fa-exclamation-triangle"
                ></i>
                {{
                  editMessage === Object.values(item[1])[0].content
                    ? '尚未編輯新留言'
                    : editMessage === ''
                    ? '編輯留言不可為空'
                    : ''
                }}
              </div>
              <div class="flex justify-end">
                <button
                  class="
                    bg-gray-500
                    hover:bg-gray-800
                    text-white text-sm
                    flex
                    rounded-lg
                    px-2
                    py-1
                    mr-3
                  "
                  @click="
                    editData(item[0], Object.values(item[1])[0].content, true)
                  "
                >
                  {{ editInput !== item[0] ? '編輯' : '取消' }}
                </button>
                <button
                  v-if="editInput !== item[0]"
                  class="
                    bg-gray-500
                    hover:bg-gray-800
                    text-white text-sm
                    rounded-lg
                    px-2
                    py-1
                  "
                  @click="removeMessage(item[0])"
                >
                  收回
                </button>
                <button
                  v-else
                  class="
                    bg-green-600
                    hover:bg-green-900
                    text-white text-sm
                    rounded-lg
                    px-2
                    py-1
                  "
                  @click="
                    editData(item[0], Object.values(item[1])[0].content, false)
                  "
                >
                  確認
                </button>
              </div>
            </li>
            <li v-else class="text-center mb-6">
              <span
                class="bg-gray-400 px-2 py-1 text-sm text-gray-100 rounded-lg"
                >{{ Object.keys(item[1]).join('') }}已收回訊息</span
              >
            </li>
          </template>
        </ul>
      </div>
      <div
        class="
          flex
          justify-center
          max-w-[500px]
          w-full
          bg-gray-800
          dark:bg-gray-300
          dark:shadow-lg
          p-5
          rounded-b-lg
        "
      >
        <input
          type="text"
          :placeholder="str"
          v-model="message"
          @keydown.enter="addData()"
          class="rounded-l-lg p-2 w-full"
        />
        <button
          @click="addData"
          class="
            bg-gray-500
            hover:bg-gray-700
            text-white
            rounded-r-lg
            px-3
            py-1
          "
        >
          <i class="far fa-paper-plane text-xl"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ref, watch, onMounted, onUnmounted,
} from 'vue';
import { useRouter } from 'vue-router';
import {
  name, imgUrl, checked, database,
} from '../compositionApi/role';

export default {
  setup() {
    const data = ref('');
    const onLine = ref('');
    const message = ref('');
    const editInput = ref('');
    const editMessage = ref('');
    const height = ref('');
    const scroll = ref('');
    const str = ref('請輸入留言');
    const verify = ref(false);
    const router = useRouter();
    const tempId = ref(JSON.parse(localStorage.getItem(name.value)) || []);
    let ws;

    const addData = () => {
      if (message.value !== '') {
        const addMessage = {};
        addMessage[name.value] = {
          img: imgUrl.value,
          content: message.value,
          date: new Date().getTime(),
          edit: false,
        };
        message.value = '';
        database.ref('chatroom').push().set(addMessage);
        const content = [...data.value].pop()[0];
        tempId.value.push(content);
        localStorage.setItem(name.value, JSON.stringify(tempId.value));
      } else {
        str.value = str.value === '請輸入留言' ? '尚未輸入留言' : '請輸入留言';
      }
    };

    const editData = (id, strMessage, status) => {
      if (status) {
        editInput.value = editInput.value !== '' ? '' : id;
        editMessage.value = editMessage.value !== '' ? '' : strMessage;
        verify.value = false;
      } else {
        verify.value = true;
        if (strMessage === editMessage.value || editMessage.value === '') return;
        const newData = {};
        newData[name.value] = {
          img: imgUrl.value,
          content: editMessage.value,
          date: new Date().getTime(),
          edit: true,
        };
        database.ref('chatroom').child(id).set(newData);
        editInput.value = '';
        editMessage.value = '';
      }
    };

    const removeMessage = (id) => {
      const newData = {};
      newData[name.value] = {
        content: '',
      };
      database.ref('chatroom').child(id).set(newData);
    };

    watch(data, () => {
      setTimeout(() => {
        scroll.value.scrollTop = scroll.value?.scrollHeight + 2000;
      }, 450);
    });

    onMounted(() => {
      if (name.value) {
        height.value = (window.innerHeight);
        const onLineData = {};
        onLineData[name.value] = imgUrl.value;
        database.ref('onLine').push().set(onLineData);
        ws = new WebSocket('ws://fierce-savannah-16080.herokuapp.com/');
        database.ref().on('value', (snapshot) => {
          data.value = Object.entries(snapshot.val().chatroom);
          onLine.value = Object.entries(snapshot.val().onLine).map((item) => item[1]);
        });
      } else {
        router.push('/');
      }
    });

    onUnmounted(() => {
      ws?.close();
    });

    return {
      name,
      data,
      onLine,
      str,
      height,
      addData,
      message,
      tempId,
      editData,
      editInput,
      editMessage,
      removeMessage,
      verify,
      checked,
      scroll,
    };
  },
};
</script>

<style lang="scss">
.fa-caret-left {
  left: -8px;
  top: 0;
}

.fa-caret-right {
  right: -10px;
  top: 0;
}

.scroll::-webkit-scrollbar-track {
  background-color: #374151;
}

.scroll-track::-webkit-scrollbar-track {
  background-color: white;
}

.scroll::-webkit-scrollbar {
  width: 10px;
}

.scroll::-webkit-scrollbar-thumb {
  background-color: #60656d;
}

.scroll-thumb::-webkit-scrollbar-thumb {
  background-color: #9ca3af;
}

.message > li {
  &:last-child {
    margin: 0;
  }
}

.onLine {
  margin: -16px -16px 5px;
}
</style>
