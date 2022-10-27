import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// const routes = [{ path: '/', exact: true, redirect: '/login' }];
const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default-layout'),
    children: [
      {
        path: '', // ganti pathnya ke route yang sebenarnya
        component: () => import('@/pages'), // ganti component sesuai yang dibuat
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
