export default [
  {
    path: '/picslide',
    redirect: '/picslide/page1'
  },  
  {
    path: '/picslide/page1',
    name: 'RoutePicslidePage1',
    component: () => import('@/views/picslide/page1.vue')
  },
  {
    path: '/picslide/page2',
    name: 'RoutePicslidePage2',
    component: () => import('@/views/picslide/page2.vue')
  },
  {
    path: '/picslide/page3',
    name: 'RoutePicslidePage3',
    component: () => import('@/views/picslide/page3.vue')
  }, 
  {
    path: '/picslide/page4',
    name: 'RoutePicslidePage4',
    component: () => import('@/views/picslide/page4.vue')
  }, 
  {
    path: '/picslide/page5',
    name: 'RoutePicslidePage5',
    component: () => import('@/views/picslide/page5.vue')
  },   
]