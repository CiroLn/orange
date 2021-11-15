export default [
  {
    path: '/btn/basic',
    name: 'RouteBtnBasic',
    component: () => import('../../components/basic/button/BtnBasic.vue')
  },
  {
    path: '/btn/disabled',
    name: 'RouteBtnDisabled',
    component: () => import('../../components/basic/button/BtnDisabled.vue')
  },
  {
    path: '/btn/text',
    name: 'RouteBtnText',
    component: () => import('../../components/basic/button/BtnText.vue')
  },
  {
    path: '/btn/icon',
    name: 'RouteBtnIcon',
    component: () => import('../../components/basic/button/BtnIcon.vue')
  },
  {
    path: '/btn/group',
    name: 'RouteBtnGroup',
    component: () => import('../../components/basic/button/BtnGroup.vue')
  },
  {
    path: '/btn/loading',
    name: 'RouteBtnLoading',
    component: () => import('../../components/basic/button/BtnLoading.vue')
  },
  {
    path: '/btn/size',
    name: 'RouteBtnSize',
    component: () => import('../../components/basic/button/BtnSize.vue')
  },
  {
    path: '/btn/auto',
    name: 'RouteBtnAuto',
    component: () => import('../../components/basic/button/BtnAuto.vue')
  },
]