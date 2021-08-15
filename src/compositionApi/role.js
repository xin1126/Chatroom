import { ref } from 'vue';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDQCnpajHGn044fhUzlCIV8vFpKnUDD_Uc',
  authDomain: 'chatroom-b8117.firebaseapp.com',
  databaseURL: 'https://chatroom-b8117-default-rtdb.firebaseio.com',
  projectId: 'chatroom-b8117',
  storageBucket: 'chatroom-b8117.appspot.com',
  messagingSenderId: '257245235656',
  appId: '1:257245235656:web:76e8eb1d59fec2237018fd',
  measurementId: 'G-VFB5ZW9LHY',
};
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();

export const gender = ref('man');

export const name = ref('');

export const imgUrl = ref('');

export const checked = ref('');

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
