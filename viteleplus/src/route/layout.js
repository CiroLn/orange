export default [
  {
    path: '/layout/basic',
    name: 'RouteLayoutBasic',
    component: () => import('../components/layout/LayoutBasic.vue')
  },
  {
    path: '/layout/one',
    name: 'RouteLayoutOne',
    component: () => import('../components/layout/LayoutOne.vue')
  },
  {
    path: '/layout/two',
    name: 'RouteLayoutTwo',
    component: () => import('../components/layout/LayoutTwo.vue')
  },
  {
    path: '/layout/three',
    name: 'RouteLayoutThree',
    component: () => import('../components/layout/LayoutThree.vue')
  },
  {
    path: '/layout/four',
    name: 'RouteLayoutFour',
    component: () => import('../components/layout/LayoutFour.vue')
  },
  {
    path: '/layout/five',
    name: 'RouteLayoutFive',
    component: () => import('../components/layout/LayoutFive.vue')
  }
]