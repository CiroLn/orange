<template>
  <el-scrollbar height="auto">
    <div class="flex-content">
      <p v-for="item in 50" :key="item" class="scrollbar-demo-item">{{ item }}</p>
    </div>
  </el-scrollbar>
</template>

<style lang="less" scoped>
.flex-content {
  display: flex;
}
.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-danger-lighter);
  color: var(--el-color-danger);
}
</style>