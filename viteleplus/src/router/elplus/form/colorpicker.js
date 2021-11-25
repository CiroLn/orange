const pathKey = `/src/views/elplus/form/colorpicker/`;
const modules = import.meta.glob(`/src/views/elplus/form/colorpicker/*.vue`);
const lower = 'cpicker', upper = 'Cpicker';


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
]