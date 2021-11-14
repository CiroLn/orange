export default [
  {
    path: '/link/basic',
    name: 'RouteLinkBasic',
    component: () => import('../components/link/LinkBasic.vue')
  },
  {
    path: '/link/one',
    name: 'RouteLinkOne',
    component: () => import('../components/link/LinkOne.vue')
  },
  {
    path: '/link/two',
    name: 'RouteLinkTwo',
    component: () => import('../components/link/LinkTwo.vue')
  },
  {
    path: '/link/three',
    name: 'RouteLinkThree',
    component: () => import('../components/link/LinkThree.vue')
  }
]