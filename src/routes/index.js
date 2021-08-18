import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/Home.vue'),
      },
      {
        path: '/chatroom',
        component: () => import('../views/Chatroom.vue'),
      },
      {
        path: '/hall',
        component: () => import('../views/Hall.vue'),
      },
      {
        path: '/public',
        component: () => import('../views/PublicRoom.vue'),
      },
      {
        path: '/room/:id',
        component: () => import('../views/Room.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
