import { createRouter, createWebHashHistory } from "vue-router";
import basic from './basic';
import form from './form';
import data from './data';
import nav from './nav';
import feedback from './feedback';
import others from './others';
import graffiti from "./graffiti";
import picslide from "./picslide";

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
  ...basic,
  ...form,
  ...data,
  ...nav,
  ...feedback,
  ...others,
  ...graffiti,
  ...picslide,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;