import { ref } from 'vue';

export const numAvatar = ref(1);

export const gender = ref('man');

export const name = ref('');

export const imgUrl = ref('');

export default () => {
  const getImg = () => {
    const path = `/src/assets/img/${gender.value}${numAvatar.value}.png`;
    const modules = import.meta.globEager('/src/assets/img/*.png');
    imgUrl.value = modules[path].default;
  };

  const updateAvatar = (num) => {
    numAvatar.value = num;
    getImg();
  };

  const updateGender = (str) => {
    gender.value = str;
    getImg();
  };

  return {
    updateAvatar,
    updateGender,
    getImg,
  };
};
