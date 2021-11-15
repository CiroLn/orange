export default [
  {
    path: '/ctn/one',
    name: 'RouteCtnOne',
    component: () => import('../../components/basic/container/CtnOne.vue')
  },
  {
    path: '/ctn/two',
    name: 'RouteCtnTwo',
    component: () => import('../../components/basic/container/CtnTwo.vue')
  },
  {
    path: '/ctn/three',
    name: 'RouteCtnThree',
    component: () => import('../../components/basic/container/CtnThree.vue')
  },
  {
    path: '/ctn/four',
    name: 'RouteCtnFour',
    component: () => import('../../components/basic/container/CtnFour.vue')
  },
  {
    path: '/ctn/five',
    name: 'RouteCtnFive',
    component: () => import('../../components/basic/container/CtnFive.vue')
  },
  {
    path: '/ctn/six',
    name: 'RouteCtnSix',
    component: () => import('../../components/basic/container/CtnSix.vue')
  },
  {
    path: '/ctn/seven',
    name: 'RouteCtnSeven',
    component: () => import('../../components/basic/container/CtnSeven.vue')
  },
  {
    path: '/ctn/eight',
    name: 'RouteCtnEight',
    component: () => import('../../components/basic/container/CtnEight.vue')
  },
]