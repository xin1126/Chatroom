import { ref } from 'vue';

export const gender = ref('man');

export const name = ref('');

export const imgUrl = ref('');

export default () => {
  let numAvatar = 1;
  const getImg = () => {
    const path = `/src/assets/img/${gender.value}${numAvatar}.png`;
    const modules = import.meta.globEager('/src/assets/img/*.png');
    imgUrl.value = modules[path].default;
  };

  const updateAvatar = (num) => {
    numAvatar = num;
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
