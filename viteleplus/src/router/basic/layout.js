export default [
  {
    path: '/layout/basic',
    name: 'RouteLayoutBasic',
    component: () => import('@/views/elplus/basic/layout/LayoutBasic.vue')
  },
  {
    path: '/layout/one',
    name: 'RouteLayoutOne',
    component: () => import('@/views/elplus/basic/layout/LayoutOne.vue')
  },
  {
    path: '/layout/two',
    name: 'RouteLayoutTwo',
    component: () => import('@/views/elplus/basic/layout/LayoutTwo.vue')
  },
  {
    path: '/layout/three',
    name: 'RouteLayoutThree',
    component: () => import('@/views/elplus/basic/layout/LayoutThree.vue')
  },
  {
    path: '/layout/four',
    name: 'RouteLayoutFour',
    component: () => import('@/views/elplus/basic/layout/LayoutFour.vue')
  },
  {
    path: '/layout/five',
    name: 'RouteLayoutFive',
    component: () => import('@/views/elplus/basic/layout/LayoutFive.vue')
  }
]