const prefix = `@/components/form/cascader/`;
const lower = 'csd', upper = 'Csd';


export default [
  {
    path: `/${lower}/basic`,
    name: `Route${upper}Basic`,
    component: () => import(`${prefix}${upper}Basic.vue`)
  },
  {
    path: `/${lower}/one`,
    name: `Route${upper}One`,
    component: () => import(`${prefix}${upper}One.vue`)
  },  
  {
    path: `/${lower}/two`,
    name: `Route${upper}One`,
    component: () => import(`${prefix}${upper}Two.vue`)
  },
  {
    path: `/${lower}/three`,
    name: `Route${upper}Three`,
    component: () => import(`${prefix}${upper}Three.vue`)
  },
  {
    path: `/${lower}/four`,
    name: `Route${upper}Four`,
    component: () => import(`${prefix}${upper}Four.vue`)
  },  
  {
    path: `/${lower}/five`,
    name: `Route${upper}Five`,
    component: () => import(`${prefix}${upper}Five.vue`)
  },
  {
    path: `/${lower}/six`,
    name: `Route${upper}Six`,
    component: () => import(`${prefix}${upper}Six.vue`)
  },
  {
    path: `/${lower}/seven`,
    name: `Route${upper}Seven`,
    component: () => import(`${prefix}${upper}Seven.vue`)
  },  
  {
    path: `/${lower}/eight`,
    name: `Route${upper}Eight`,
    component: () => import(`${prefix}${upper}Eight.vue`)
  },
  {
    path: `/${lower}/nine`,
    name: `Route${upper}Nine`,
    component: () => import(`${prefix}${upper}Nine.vue`)
  },        
]