<template>
  <div class="flex justify-center items-center flex-col pt-4 px-3">
    <div
      class="
        style-3
        max-w-[500px]
        sm:max-h-[750px]
        scroll
        overflow-y-auto overflow-x-hidden
        w-full
        bg-gray-700
        dark:bg-white
        rounded-t-lg
        p-4
      "
      :class="checked ? ['scroll-track', 'scroll-thumb'] : 'scroll'"
    >
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
                <span class="absolute w-52 bottom-1 ml-2 text-gray-400 text-xs"
                  >{{ new Date(Object.values(item[1])[0].date).toLocaleString()
                  }}{{ Object.values(item[1])[0].edit ? '(已編輯)' : '' }}</span
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
                <div class="message-left"></div>
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
                message-right
                bg-blue-900
                text-white text-lg
                px-3
                py-1
                mb-2
                rounded-lg
              "
            >
              {{ Object.values(item[1])[0].content }}
            </div>
            <input
              v-else
              type="text"
              class="mb-2 py-1 pl-2 rounded-lg"
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
            <span class="bg-gray-400 px-2 py-1 text-sm text-gray-100 rounded-lg"
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
        py-5
        mb-3
        rounded-b-lg
      "
    >
      <input
        type="text"
        :placeholder="str"
        v-model="message"
        class="rounded-l-lg p-2"
      />
      <button
        @click="addData"
        class="bg-gray-500 hover:bg-gray-800 text-white rounded-r-lg px-3 py-1"
      >
        <i class="far fa-paper-plane text-xl"></i>
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import {
  name, imgUrl, firebaseInit, checked,
} from '../compositionApi/role';

export default {
  setup() {
    const data = ref('');
    const message = ref('');
    const editInput = ref('');
    const editMessage = ref('');
    const str = ref('請輸入留言');
    const verify = ref(false);
    const router = useRouter();
    const url = 'https://xin-api.herokuapp.com/crud-api/';
    const tempId = ref(JSON.parse(localStorage.getItem(name.value)) || []);

    const getData = () => {
      axios
        .get(url)
        .then((res) => {
          if (res.data.result !== null) {
            data.value = Object.entries(res.data.result);
          }
        });
    };

    const addData = () => {
      if (message.value !== '') {
        const addMessage = {};
        addMessage[name.value] = {
          img: imgUrl.value,
          content: message.value,
          date: new Date().getTime(),
          edit: false,
        };
        axios
          .post(url, addMessage)
          .then((res) => {
            data.value = Object.entries(res.data.result);
            message.value = '';
            const content = [...data.value].pop()[0];
            tempId.value.push(content);
            localStorage.setItem(name.value, JSON.stringify(tempId.value));
          });
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
        axios
          .put(`${url}${id}`, newData)
          .then((res) => {
            data.value = Object.entries(res.data.result);
            editInput.value = '';
            editMessage.value = '';
            verify.value = false;
          });
      }
    };

    const removeMessage = (id) => {
      const newData = {};
      newData[name.value] = {
        content: '',
      };
      axios
        .put(`${url}${id}`, newData)
        .then((res) => {
          data.value = Object.entries(res.data.result);
        });
    };

    onMounted(() => {
      if (name.value) {
        setTimeout(() => {
          const db = firebaseInit.database();
          db.ref().on('value', () => {
            getData();
          });
        }, 0);
      } else {
        router.push('/');
      }
    });

    return {
      name,
      data,
      str,
      addData,
      message,
      tempId,
      editData,
      editInput,
      editMessage,
      removeMessage,
      verify,
      checked,
    };
  },
};
</script>

<style scoped lang="scss">
.message-left::before {
  content: '⮜';
  position: absolute;
  color: #6b7280;
  top: 0;
  left: -9px;
}

.message-right::after {
  content: '⮞';
  position: absolute;
  color: #1e3a8a;
  top: 0;
  right: -9px;
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
</style>
