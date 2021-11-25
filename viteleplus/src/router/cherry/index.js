export default [
  {
    path: '/cherry',
    redirect: '/cherry/page1'
  },    
  {
    path: '/cherry/page1',
    name: 'RoutecherryPage1',
    component: () => import('@/views/cherry/page1.vue')
  },
  {
    path: '/cherry/page2',
    name: 'RoutecherryPage2',
    component: () => import('@/views/cherry/page2.vue')
  },
  {
    path: '/cherry/page3',
    name: 'RoutecherryPage3',
    component: () => import('@/views/cherry/page3.vue')
  }, 
  {
    path: '/cherry/page4',
    name: 'RoutecherryPage4',
    component: () => import('@/views/cherry/page4.vue')
  },
  {
    path: '/cherry/page5',
    name: 'RoutecherryPage5',
    component: () => import('@/views/cherry/page5.vue')
  },    
]