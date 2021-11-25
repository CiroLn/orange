export default [
  {
    path: '/grape',
    redirect: '/grape/page1'
  },  
  {
    path: '/grape/page1',
    name: 'RoutegrapePage1',
    component: () => import('@/views/grape/page1.vue')
  },
  {
    path: '/grape/page2',
    name: 'RoutegrapePage2',
    component: () => import('@/views/grape/page2.vue')
  },
  {
    path: '/grape/page3',
    name: 'RoutegrapePage3',
    component: () => import('@/views/grape/page3.vue')
  }, 
  {
    path: '/grape/page4',
    name: 'RoutegrapePage4',
    component: () => import('@/views/grape/page4.vue')
  }, 
  {
    path: '/grape/page5',
    name: 'RoutegrapePage5',
    component: () => import('@/views/grape/page5.vue')
  },   
]