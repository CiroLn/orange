export default [
  {
    path: '/btn/basic',
    name: 'RouteBtnBasic',
    component: () => import('@/views/elplus/basic/button/BtnBasic.vue')
  },
  {
    path: '/btn/disabled',
    name: 'RouteBtnDisabled',
    component: () => import('@/views/elplus/basic/button/BtnDisabled.vue')
  },
  {
    path: '/btn/text',
    name: 'RouteBtnText',
    component: () => import('@/views/elplus/basic/button/BtnText.vue')
  },
  {
    path: '/btn/icon',
    name: 'RouteBtnIcon',
    component: () => import('@/views/elplus/basic/button/BtnIcon.vue')
  },
  {
    path: '/btn/group',
    name: 'RouteBtnGroup',
    component: () => import('@/views/elplus/basic/button/BtnGroup.vue')
  },
  {
    path: '/btn/loading',
    name: 'RouteBtnLoading',
    component: () => import('@/views/elplus/basic/button/BtnLoading.vue')
  },
  {
    path: '/btn/size',
    name: 'RouteBtnSize',
    component: () => import('@/views/elplus/basic/button/BtnSize.vue')
  },
  {
    path: '/btn/auto',
    name: 'RouteBtnAuto',
    component: () => import('@/views/elplus/basic/button/BtnAuto.vue')
  },
]