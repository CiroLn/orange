<template>
  <div>
    <el-link :underline="false">Without Underline</el-link>
    <el-link>With Underline</el-link>
  </div>
</template>

<style lang="less" scoped>
.el-link {
  margin-right: 16px;
  &::last-child {
    margin-right: 0;
  }
}
</style>