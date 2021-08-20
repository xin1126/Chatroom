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
import { useRouter, useRoute } from 'vue-router';
import { name } from '../compositionApi/role';
import {
  data, firebase, getEnterRoomFirebaseData, ws, routeId,
} from '../compositionApi/firebaseData';

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();

    onMounted(() => {
      if (name.value) {
        routeId.value = route.params.id;
        firebase.value = true;
        getEnterRoomFirebaseData();
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
