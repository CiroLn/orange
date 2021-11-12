import { createRouter, createWebHashHistory } from "vue-router";
import border from './border';

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
  ...border
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;