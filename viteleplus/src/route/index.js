import { createRouter, createWebHashHistory } from "vue-router";
import border from './border';
import button from './button';
import container from "./container";
import icon from "./icon";
import layout from "./layout";
import link from "./link";
import scrollbar from "./scrollbar";

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
  ...container,
  ...icon,
  ...layout,
  ...link,
  ...scrollbar
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;