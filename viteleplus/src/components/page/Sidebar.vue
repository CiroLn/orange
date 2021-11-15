<template>
  <el-menu :default-active="defaultActive" router>
    <SideBasic />
    <SideForm />
    <SideData />
    <SideNav />
    <SideFeedback />
    <SideOthers />
  </el-menu>
</template>

<script setup>
import SideBasic from './side/SideBasic.vue';
import SideForm from './side/SideForm.vue';
import SideData from './side/SideData.vue';
import SideNav from './side/SideNav.vue';
import SideFeedback from './side/SideFeedback.vue';
import SideOthers from './side/SideOthers.vue';

import { useRoute } from 'vue-router';
import { ref } from 'vue-demi';

const route = useRoute();
const defaultActive = ref(null); // TODO: 第一次 route.path 的值为 '/' 问题

setTimeout(() => {
  console.log('path: ', route.path);
  defaultActive.value = route.path;
}, 1000);
</script>