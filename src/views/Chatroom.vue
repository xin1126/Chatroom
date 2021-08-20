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
import { data, getFirebaseData, ws } from '../compositionApi/firebaseData';

export default {
  setup() {
    const router = useRouter();

    onMounted(() => {
      if (name.value) {
        getFirebaseData();
      } else {
        router.push('/');
      }
    });

    onUnmounted(() => {
      if (ws.value.readyState === 1) {
        ws.value?.close();
      } else {
        setTimeout(() => {
          ws.value?.close();
        }, 1500);
      }
    });

    return {
      name,
      data,
    };
  },
};
</script>
