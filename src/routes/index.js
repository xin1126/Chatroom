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
        path: '/hall',
        component: () => import('../views/Hall.vue'),
      },
      {
        path: '/room',
        component: () => import('../views/CreateRoom.vue'),
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
