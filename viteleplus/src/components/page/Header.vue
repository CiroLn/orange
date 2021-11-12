<template>
  <div class="box">
    <div class="logo"></div>
    <el-menu mode="horizontal">
      <el-menu-item>Processing Center</el-menu-item>
      <el-menu-item>Processing Center</el-menu-item>
      <el-menu-item>Processing Center</el-menu-item>
      <el-menu-item>Processing Center</el-menu-item>
      <el-menu-item>Processing Center</el-menu-item>
    </el-menu>    
  </div>

</template>

<style lang="less" scoped>
  .box{
    display: flex;
    .logo {
      padding: 4px 8px;
      width: 200px;
      height: 60px;
      background-image: url('../../assets/logo.svg');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-clip: padding-box;
    }
    .el-menu {
      flex: 1;
    }
  }
</style>