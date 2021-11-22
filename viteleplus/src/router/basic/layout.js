export default [
  {
    path: '/layout/basic',
    name: 'RouteLayoutBasic',
    component: () => import('../../components/basic/layout/LayoutBasic.vue')
  },
  {
    path: '/layout/one',
    name: 'RouteLayoutOne',
    component: () => import('../../components/basic/layout/LayoutOne.vue')
  },
  {
    path: '/layout/two',
    name: 'RouteLayoutTwo',
    component: () => import('../../components/basic/layout/LayoutTwo.vue')
  },
  {
    path: '/layout/three',
    name: 'RouteLayoutThree',
    component: () => import('../../components/basic/layout/LayoutThree.vue')
  },
  {
    path: '/layout/four',
    name: 'RouteLayoutFour',
    component: () => import('../../components/basic/layout/LayoutFour.vue')
  },
  {
    path: '/layout/five',
    name: 'RouteLayoutFive',
    component: () => import('../../components/basic/layout/LayoutFive.vue')
  }
]