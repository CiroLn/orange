import { createRouter, createWebHashHistory } from "vue-router";
import border from './border';
import button from './button';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/Home.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('../components/404.vue')
  },
  ...border,
  ...button,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;