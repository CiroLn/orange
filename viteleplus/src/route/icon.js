export default [
  {
    path: '/icon/one',
    name: 'RouteIconOne',
    component: () => import('../components/icon/IconOne.vue')
  },
  {
    path: '/icon/two',
    name: 'RouteIconTwo',
    component: () => import('../components/icon/IconTwo.vue')
  },
]