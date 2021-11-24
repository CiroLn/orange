export default [
  {
    path: '/elplus',
    redirect: '/border/styles',
  },  
  {
    path: '/border/styles',
    name: 'RouteBorderStyles',
    component: () => import('@/components/basic/border/BorderStyles.vue')
  },
  {
    path: '/border/radius',
    name: 'RouteBorderRadius',
    component: () => import('@/components/basic/border/BorderRadius.vue')
  },
  {
    path: '/border/shadow',
    name: 'RouteBorderShadow',
    component: () => import('@/components/basic/border/BorderShadow.vue')
  }, 
]