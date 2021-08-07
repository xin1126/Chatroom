<template>
  <div class="flex justify-center items-center h-screen">
    <div class="bg-gray-700 p-10">
      <ul class="mb-3">
        <li v-for="item in data" :key="item[0]" class="flex items-center mb-3">
          <img :src="Object.values(item[1])[0].img" alt="" />
          <div>{{ Object.keys(item[1]).join('') }}</div>
          ：
          <div>{{ Object.values(item[1])[0].content }}</div>
        </li>
      </ul>
      <input
        type="text"
        placeholder="輸入留言"
        v-model="message"
        class="rounded-l-lg p-2"
      />
      <button
        @click="addData"
        class="bg-gray-500 hover:bg-gray-800 text-white rounded-r-lg p-2"
      >
        送出留言
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import firebase from 'firebase';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { name, imgUrl } from '../compositionApi/role';

export default {
  setup() {
    const data = ref('');
    const message = ref('');
    const router = useRouter();
    const url = 'https://xin-api.herokuapp.com/crud-api/';
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
      const addMessage = {};
      addMessage[name.value] = {
        img: imgUrl.value,
        content: message.value,
      };
      axios
        .post(url, addMessage)
        .then((res) => {
          data.value = Object.entries(res.data.result);
          message.value = '';
        });
    };

    onMounted(() => {
      if (name.value) {
        firebase.initializeApp({
          databaseURL: 'https://crud-89cd3-default-rtdb.firebaseio.com',
        });
        const db = firebase.database();
        setTimeout(() => {
          db.ref().on('value', () => {
            getData();
          });
        }, 100);
      } else {
        router.push('/');
      }
    });

    return {
      name,
      data,
      addData,
      message,
    };
  },
};
</script>

<style scoped lang="scss">
img {
  width: 40px;
  height: 50px;
}
</style>
