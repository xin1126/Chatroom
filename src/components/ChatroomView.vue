<template>
  <div
    ref="scroll"
    class="
      w-full
      sm:w-[500px]
      h-chatroom
      scroll
      overflow-y-auto overflow-x-hidden
      bg-gray-700
      dark:bg-white
      md:rounded-t-lg
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
            class="mb-2 py-1 pl-2 rounded-lg dark:border-2 dark:border-gray-500"
            v-model="editMessage"
            @keydown.enter="
              editData(item[0], Object.values(item[1])[0].content, false)
            "
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
        <li
          v-else-if="
            Object.values(item[1])[0].content === '' &&
            Object.values(item[1])[0].status
          "
          class="text-center mb-6"
        >
          <span class="bg-gray-400 px-2 py-1 text-sm text-gray-100 rounded-lg"
            >{{ Object.keys(item[1]).join('') }}加入聊天室</span
          >
        </li>
        <li
          v-else-if="
            Object.values(item[1])[0].content === '' &&
            Object.values(item[1])[0].status === false
          "
          class="text-center mb-6"
        >
          <span class="bg-gray-400 px-2 py-1 text-sm text-gray-100 rounded-lg"
            >{{ Object.keys(item[1]).join('') }}離開聊天室</span
          >
        </li>
        <li v-else class="text-center mb-6">
          <span class="bg-gray-400 px-2 py-1 text-sm text-gray-100 rounded-lg"
            >{{ Object.keys(item[1]).join('') }}已收回訊息</span
          >
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import {
  name, imgUrl, checked, database, tempId,
} from '../compositionApi/role';
import { data, roomId, routeId } from '../compositionApi/firebaseData';

export default {
  setup() {
    const editInput = ref('');
    const editMessage = ref('');
    const scroll = ref('');
    const verify = ref(false);
    const route = useRoute();

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
        if (route.path === '/chatroom') {
          database.ref('chatroom').child(id).set(newData);
        } else if (route.path === '/public' || route.path === '/private') {
          database.ref('publicRoom').child(roomId.value).child(id).set(newData);
        } else {
          database.ref('publicRoom').child(routeId.value).child(id).set(newData);
        }
        editInput.value = '';
        editMessage.value = '';
      }
    };

    const removeMessage = (id) => {
      const newData = {};
      newData[name.value] = {
        content: '',
      };
      if (route.path === '/chatroom') {
        database.ref('chatroom').child(id).set(newData);
      } else if (route.path === '/public' || route.path === '/private') {
        database.ref('publicRoom').child(roomId.value).child(id).set(newData);
      } else {
        database.ref('publicRoom').child(routeId.value).child(id).set(newData);
      }
    };

    watch(data, () => {
      setTimeout(() => {
        scroll.value.scrollTop = scroll.value?.scrollHeight + 2000;
      }, 500);
    });

    return {
      data,
      checked,
      tempId,
      verify,
      scroll,
      editInput,
      editMessage,
      editData,
      removeMessage,
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

.h-chatroom {
  height: calc(100vh - 224px);
  @media (min-width: 768px) {
    height: calc(100vh - 180px);
  }
}
</style>
