export default [
  {
    path: '/link/basic',
    name: 'RouteLinkBasic',
    component: () => import('../../components/basic/link/LinkBasic.vue')
  },
  {
    path: '/link/one',
    name: 'RouteLinkOne',
    component: () => import('../../components/basic/link/LinkOne.vue')
  },
  {
    path: '/link/two',
    name: 'RouteLinkTwo',
    component: () => import('../../components/basic/link/LinkTwo.vue')
  },
  {
    path: '/link/three',
    name: 'RouteLinkThree',
    component: () => import('../../components/basic/link/LinkThree.vue')
  }
]