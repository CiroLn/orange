export default [
  {
    path: '/scrollbar/basic',
    name: 'RouteSbarBasic',
    component: () => import('../../components/basic/scrollbar/SbarBasic.vue')
  },
  {
    path: '/scrollbar/one',
    name: 'RouteSbarOne',
    component: () => import('../../components/basic/scrollbar/SbarOne.vue')
  },
  {
    path: '/scrollbar/two',
    name: 'RouteSbarTwo',
    component: () => import('../../components/basic/scrollbar/SbarTwo.vue')
  },
  {
    path: '/scrollbar/three',
    name: 'RouteSbarThree',
    component: () => import('../../components/basic/scrollbar/SbarThree.vue')
  }
]