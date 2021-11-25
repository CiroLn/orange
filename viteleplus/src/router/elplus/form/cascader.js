const modules = import.meta.glob('/src/views/elplus/form/cascader/*.vue');
const pathKey = `/src/views/elplus/form/cascader/`;
const lower = 'csd', upper = 'Csd';


export default [
  {
    path: `/${lower}/basic`,
    name: `Route${upper}Basic`,
    component: modules[`${pathKey}${upper}Basic.vue`], // Vite 不支持在import()方法中动态拼接路径
  },
  {
    path: `/${lower}/one`,
    name: `Route${upper}One`,
    component: modules[`${pathKey}${upper}One.vue`]
  },  
  {
    path: `/${lower}/two`,
    name: `Route${upper}Two`,
    component: modules[`${pathKey}${upper}Two.vue`]
  },
  {
    path: `/${lower}/three`,
    name: `Route${upper}Three`,
    component: modules[`${pathKey}${upper}Three.vue`]
  },
  {
    path: `/${lower}/four`,
    name: `Route${upper}Four`,
    component: modules[`${pathKey}${upper}Four.vue`]
  },  
  {
    path: `/${lower}/five`,
    name: `Route${upper}Five`,
    component: modules[`${pathKey}${upper}Five.vue`]
  },
  {
    path: `/${lower}/six`,
    name: `Route${upper}Six`,
    component: modules[`${pathKey}${upper}Six.vue`]
  },
  {
    path: `/${lower}/seven`,
    name: `Route${upper}Seven`,
    component: modules[`${pathKey}${upper}Seven.vue`]
  },  
  {
    path: `/${lower}/eight`,
    name: `Route${upper}Eight`,
    component: modules[`${pathKey}${upper}Eight.vue`]
  },
  {
    path: `/${lower}/nine`,
    name: `Route${upper}Nine`,
    component: modules[`${pathKey}${upper}Nine.vue`]
  },        
]