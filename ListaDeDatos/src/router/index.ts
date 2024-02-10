import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import Home from '@/views/HomeView.vue';

import UpdateData from '@/views/UpdateDataView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Update/:dataId',
    name: 'UpdateData',
    component: UpdateData,
    props: true
  }  
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;
