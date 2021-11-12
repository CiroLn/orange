export default [
  {
    path: '/border/styles',
    name: 'border-styles',
    component: () => import('../components/border/Styles.vue')
  },
  {
    path: '/border/radius',
    name: 'border-radius',
    component: () => import('../components/border/Radius.vue')
  },
  {
    path: '/border/shadow',
    name: 'border-shadow',
    component: () => import('../components/border/Shadow.vue')
  }, 
]