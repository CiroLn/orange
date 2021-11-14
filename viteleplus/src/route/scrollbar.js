export default [
  {
    path: '/scrollbar/basic',
    name: 'RouteSbarBasic',
    component: () => import('../components/scrollbar/SbarBasic.vue')
  },
  {
    path: '/scrollbar/one',
    name: 'RouteSbarOne',
    component: () => import('../components/scrollbar/SbarOne.vue')
  },
  {
    path: '/scrollbar/two',
    name: 'RouteSbarTwo',
    component: () => import('../components/scrollbar/SbarTwo.vue')
  },
  {
    path: '/scrollbar/three',
    name: 'RouteSbarThree',
    component: () => import('../components/scrollbar/SbarThree.vue')
  }
]