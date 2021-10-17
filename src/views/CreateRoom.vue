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
import { onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { name } from '../compositionApi/role';
import { data, firebase, ws } from '../compositionApi/firebaseData';

export default {
  setup() {
    const router = useRouter();
    if (!name.value) {
      router.push('/');
    }

    onUnmounted(() => {
      firebase.value = false;
      if (ws.value.readyState === 1) {
        ws.value.close();
      }
    });

    return {
      name,
      data,
    };
  },
};
</script>
