<template>
  <el-row>
    <el-button>Default</el-button>
    <el-button autofocus>Default(Autofocus)</el-button>
  </el-row>

  <el-row>
    <el-button type="primary">Primary</el-button>
    <el-button type="primary" autofocus>Primary(Autofocus)</el-button>
  </el-row>

  <p>注：一个页面只会有一个标签元素自动聚焦</p>

  <br>
  <br>
  <h4>auto-insert-space</h4>
  <el-button auto-insert-space>这是一个按钮</el-button>
</template>

  <style lang="less" scoped>
.el-row {
  margin-bottom: 20px;
  &::last-child {
    margin-bottom: 0;
  }
}
</style>