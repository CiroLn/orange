export default [
  {
    path: '/graffiti',
    redirect: '/graffiti/page1'
  },    
  {
    path: '/graffiti/page1',
    name: 'RouteGraffitiPage1',
    component: () => import('@/views/graffiti/page1.vue')
  },
  {
    path: '/graffiti/page2',
    name: 'RouteGraffitiPage2',
    component: () => import('@/views/graffiti/page2.vue')
  },
  {
    path: '/graffiti/page3',
    name: 'RouteGraffitiPage3',
    component: () => import('@/views/graffiti/page3.vue')
  }, 
  {
    path: '/graffiti/page4',
    name: 'RouteGraffitiPage4',
    component: () => import('@/views/graffiti/page4.vue')
  },
  {
    path: '/graffiti/page5',
    name: 'RouteGraffitiPage5',
    component: () => import('@/views/graffiti/page5.vue')
  },    
]