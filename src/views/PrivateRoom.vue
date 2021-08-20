<template>
  <div class="flex justify-center">
    <PcOnLine />
    <div
      class="
        flex
        justify-center
        items-center
        flex-col
        bg-gray-500
        dark:bg-gray-200
        relative
        p-3
      "
    >
      <MobileOnLine />
      <ChatroomView />
      <AddMessage />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { name } from '../compositionApi/role';
import {
  data, firebase, getRoomFirebaseData, ws,
} from '../compositionApi/firebaseData';

export default {
  setup() {
    const router = useRouter();

    onMounted(() => {
      if (name.value) {
        firebase.value = true;
        getRoomFirebaseData('wss://vast-hollows-31339.herokuapp.com/', true);
      } else {
        router.push('/');
      }
    });

    onUnmounted(() => {
      firebase.value = false;
      ws.value?.close();
    });

    return {
      name,
      data,
    };
  },
};
</script>
