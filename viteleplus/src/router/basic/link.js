export default [
  {
    path: '/link/basic',
    name: 'RouteLinkBasic',
    component: () => import('@/views/elplus/basic/link/LinkBasic.vue')
  },
  {
    path: '/link/one',
    name: 'RouteLinkOne',
    component: () => import('@/views/elplus/basic/link/LinkOne.vue')
  },
  {
    path: '/link/two',
    name: 'RouteLinkTwo',
    component: () => import('@/views/elplus/basic/link/LinkTwo.vue')
  },
  {
    path: '/link/three',
    name: 'RouteLinkThree',
    component: () => import('@/views/elplus/basic/link/LinkThree.vue')
  }
]