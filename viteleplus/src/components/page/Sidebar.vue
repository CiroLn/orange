<template>
  <el-menu :default-active="defaultActive" router>
    <component :is="SideElplus"></component>
  </el-menu>
</template>

<script setup>
import SideElplus from './side-elplus/index.vue';


import { useRoute } from 'vue-router';
import { ref } from 'vue-demi';

const route = useRoute();
const defaultActive = ref(null); // TODO: 第一次 route.path 的值为 '/' 问题

setTimeout(() => {
  console.log('path: ', route.path);
  defaultActive.value = route.path;
}, 1000);

</script>