export default [
  {
    path: '/scrollbar/basic',
    name: 'RouteSbarBasic',
    component: () => import('@/views/elplus/basic/scrollbar/SbarBasic.vue')
  },
  {
    path: '/scrollbar/one',
    name: 'RouteSbarOne',
    component: () => import('@/views/elplus/basic/scrollbar/SbarOne.vue')
  },
  {
    path: '/scrollbar/two',
    name: 'RouteSbarTwo',
    component: () => import('@/views/elplus/basic/scrollbar/SbarTwo.vue')
  },
  {
    path: '/scrollbar/three',
    name: 'RouteSbarThree',
    component: () => import('@/views/elplus/basic/scrollbar/SbarThree.vue')
  }
]