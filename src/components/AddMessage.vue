<template>
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
      class="bg-gray-500 hover:bg-gray-700 text-white rounded-r-lg px-3 py-1"
    >
      <i class="far fa-paper-plane text-xl"></i>
    </button>
  </div>
</template>

<script>
import { ref } from 'vue';
import {
  name, imgUrl, database, tempId,
} from '../compositionApi/role';
import {
  data, roomId, routeId, ws,
} from '../compositionApi/firebaseData';

export default {
  setup() {
    const str = ref('請輸入留言');
    const message = ref('');

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
        if (ws.value.url.indexOf('fierce-savannah') >= 0) {
          database.ref('chatroom').push().set(addMessage);
        } else if (ws.value.url.indexOf('vast-hollows') >= 0) {
          database.ref('publicRoom').child(roomId.value).push().set(addMessage);
        } else {
          database.ref('publicRoom').child(routeId.value).push().set(addMessage);
        }

        const content = [...data.value].pop()[0];
        tempId.value.push(content);
        localStorage.setItem(name.value, JSON.stringify(tempId.value));
      } else {
        str.value = str.value === '請輸入留言' ? '尚未輸入留言' : '請輸入留言';
      }
    };
    return {
      name,
      data,
      str,
      tempId,
      message,
      addData,
    };
  },
};
</script>
