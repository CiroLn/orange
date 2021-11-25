<template>
  <!-- <keep-alive> -->
    <component :is="activeSide"></component>
  <!-- </keep-alive> -->
</template>

<script setup>
import SideElplus from './side-elplus/index.vue';
import SideGraffiti from './side-graffiti/index.vue';
import SidePicslide from './side-picslide/index.vue';

import { computed } from 'vue-demi';
import { useStore } from 'vuex';

const store = useStore();

const activeSide = computed(() => {
  console.log('-----activeSide----');
  const pageTab = store.state.pageTab || window.localStorage.getItem('pageTab'); // 执行 `store.state.pageTab` 才会触发响应
  switch (pageTab) {
    case 'elplus':
      return SideElplus;
    case 'graffiti':
      return SideGraffiti;
    case 'picslide':
      return SidePicslide;
    default:
      return SideElplus
  }
});

// TODO: 第一次 route.path 的值为 '/' 问题（路由是微任务？？）
// setTimeout(() => {
//   console.log('path: ', route.path);
//   defaultActive.value = route.path;
// }, 1000);

</script>