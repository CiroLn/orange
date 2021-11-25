import { createRouter, createWebHashHistory } from "vue-router";
import elplus from './elplus';
import cherry from "./cherry";
import grape from "./grape";

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
  ...elplus,
  ...cherry,
  ...grape,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;