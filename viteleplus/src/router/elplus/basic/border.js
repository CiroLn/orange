export default [
  {
    path: '/elplus',
    redirect: '/border/styles',
  },  
  {
    path: '/border/styles',
    name: 'RouteBorderStyles',
    component: () => import('@/views/elplus/basic/border/BorderStyles.vue')
  },
  {
    path: '/border/radius',
    name: 'RouteBorderRadius',
    component: () => import('@/views/elplus/basic/border/BorderRadius.vue')
  },
  {
    path: '/border/shadow',
    name: 'RouteBorderShadow',
    component: () => import('@/views/elplus/basic/border/BorderShadow.vue')
  }, 
]