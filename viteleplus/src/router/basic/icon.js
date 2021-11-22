export default [
  {
    path: '/icon/one',
    name: 'RouteIconOne',
    component: () => import('../../components/basic/icon/IconOne.vue')
  },
  {
    path: '/icon/two',
    name: 'RouteIconTwo',
    component: () => import('../../components/basic/icon/IconTwo.vue')
  },
]