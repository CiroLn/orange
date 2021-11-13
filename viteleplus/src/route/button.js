export default [
  {
    path: '/btn/basic',
    name: 'RouteBtnBasic',
    component: () => import('../components/button/BtnBasic.vue')
  },
  {
    path: '/btn/disabled',
    name: 'RouteBtnDisabled',
    component: () => import('../components/button/BtnDisabled.vue')
  },
  {
    path: '/btn/text',
    name: 'RouteBtnText',
    component: () => import('../components/button/BtnText.vue')
  },
  {
    path: '/btn/icon',
    name: 'RouteBtnIcon',
    component: () => import('../components/button/BtnIcon.vue')
  },
  {
    path: '/btn/group',
    name: 'RouteBtnGroup',
    component: () => import('../components/button/BtnGroup.vue')
  },
  {
    path: '/btn/loading',
    name: 'RouteBtnLoading',
    component: () => import('../components/button/BtnLoading.vue')
  },
  {
    path: '/btn/size',
    name: 'RouteBtnSize',
    component: () => import('../components/button/BtnSize.vue')
  },
  {
    path: '/btn/auto',
    name: 'RouteBtnAuto',
    component: () => import('../components/button/BtnAuto.vue')
  },
]