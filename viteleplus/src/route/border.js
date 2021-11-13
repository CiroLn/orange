export default [
  {
    path: '/border/styles',
    name: 'RouteBorderStyles',
    component: () => import('../components/border/BorderStyles.vue')
  },
  {
    path: '/border/radius',
    name: 'RouteBorderRadius',
    component: () => import('../components/border/BorderRadius.vue')
  },
  {
    path: '/border/shadow',
    name: 'RouteBorderShadow',
    component: () => import('../components/border/BorderShadow.vue')
  }, 
]