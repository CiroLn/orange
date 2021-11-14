<template>
  <div style="margin-bottom: 24px;">
    <el-button @click="add">Add Item</el-button>
    <el-button @click="onDelete">Delete Item</el-button>
  </div>
  <el-scrollbar style="height: auto;" max-height="400px">
    <p v-for="item in count" :key="item" class="scrollbar-demo-item">{{ item }}</p>
  </el-scrollbar>
</template>

<script setup lang="ts">

import { ref } from 'vue-demi'

const count = ref(3);
const add = () => {
  count.value++;
}
const onDelete = () => {
  if (count.value > 0) {
    count.value--;
  }
}

</script>

<style lang="less" scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 0 24px 24px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);

  &:last-child {
    // 两点没有效果
    margin-bottom: 0;
  }
}
</style>
