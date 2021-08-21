import { ref } from 'vue';
import {
  database, name, password, imgUrl,
} from './role';

export const data = ref('');

export const onLine = ref('');

export const roomId = ref('');

export const ws = ref('');

export const routeId = ref('');

export const firebase = ref(false);

export const getFirebaseData = () => {
  const onLineData = {};
  const enterChatroom = {};
  onLineData[name.value] = imgUrl.value;
  enterChatroom[name.value] = { content: '', status: true };
  database.ref('chatroom').push().set(enterChatroom)
    .then(() => {
      database.ref('onLine').push().set(onLineData);
    })
    .then(() => {
      ws.value = new WebSocket('wss://fierce-savannah-16080.herokuapp.com/');
    });
  database.ref().on('value', (snapshot) => {
    data.value = Object.entries(snapshot.val().chatroom);
    if (snapshot.val().onLine) {
      onLine.value = Object.entries(snapshot.val().onLine).map((item) => item[1]) || {};
    }
  });
};

export const getRoomFirebaseData = (url, status) => {
  let onLineId;
  const enterChatroom = {};
  const onLineData = {};
  const privateRoom = {};
  database.ref('publicRoom').push().set(1);
  database.ref('publicRoom').once('value', (snapshot) => {
    roomId.value = Object.keys(snapshot.val()).pop();
    enterChatroom[name.value] = { content: '', status: true };
    database.ref('publicRoom').child(roomId.value).push().set(enterChatroom);
    if (status) {
      privateRoom[roomId.value] = password.value;
      database.ref('privateRoom').push().set(privateRoom);
    }
  });
  database.ref('onLinePublicRoom').push().set(1);
  database.ref('onLinePublicRoom').once('value', (snapshot) => {
    onLineId = Object.keys(snapshot.val()).pop();
    onLineData[name.value] = imgUrl.value;
    database.ref('onLinePublicRoom').child(onLineId).push().set(onLineData)
      .then(() => {
        ws.value = new WebSocket(url);
      });
  });

  database.ref().on('value', (snapshot) => {
    if (firebase.value && snapshot.val().publicRoom[roomId.value]) {
      data.value = Object.entries(snapshot.val().publicRoom[roomId.value]);
      if (snapshot.val().onLinePublicRoom?.[onLineId]) {
        onLine.value = Object.entries(snapshot.val().onLinePublicRoom[onLineId]).map((item) => item[1]);
      }
    }
  });
};

export const getEnterRoomFirebaseData = () => {
  let onLineIndex;
  let onLineId;
  const enterChatroom = {};
  const onLineData = {};
  const targetRoom = {};
  database.ref('publicRoom').once('value', (snapshot) => {
    enterChatroom[name.value] = { content: '', status: true };
    database.ref('publicRoom').child(routeId.value).push().set(enterChatroom);
    onLineIndex = Object.keys(snapshot.val()).indexOf(routeId.value);
  });
  database.ref('onLinePublicRoom').once('value', (snapshot) => {
    onLineId = Object.keys(snapshot.val())[onLineIndex];
    onLineData[name.value] = imgUrl.value;
    database.ref('onLinePublicRoom').child(onLineId).push().set(onLineData);
    targetRoom[routeId.value] = onLineId;
    database.ref('targetRoom').push().set(targetRoom)
      .then(() => {
        ws.value = new WebSocket('wss://young-coast-22846.herokuapp.com/');
      });
  });
  database.ref().on('value', (snapshot) => {
    if (firebase.value && snapshot.val().publicRoom[routeId.value]) {
      data.value = Object.entries(snapshot.val().publicRoom[routeId.value]);
      if (snapshot.val().onLinePublicRoom?.[onLineId]) {
        onLine.value = Object.entries(snapshot.val().onLinePublicRoom[onLineId]).map((item) => item[1]) || {};
      }
    }
  });
};
