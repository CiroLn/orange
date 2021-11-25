export default [
  {
    path: '/icon/one',
    name: 'RouteIconOne',
    component: () => import('@/views/elplus/basic/icon/IconOne.vue')
  },
  {
    path: '/icon/two',
    name: 'RouteIconTwo',
    component: () => import('@/views/elplus/basic/icon/IconTwo.vue')
  },
]