import { ref } from 'vue';

export const numAvatar = ref(1);

export const gender = ref('man');

export const name = ref('');

export default () => {
  const updateAvatar = (num) => { numAvatar.value = num; };
  const updateGender = (str) => { gender.value = str; };
  return {
    updateAvatar,
    updateGender,
  };
};
