<template>
  <div class="box">
    <div class="logo"></div>
    <el-menu mode="horizontal">
      <el-menu-item index="1">
        <template #title>
          <el-icon><Apple /></el-icon>
          <span>Element Plus</span>
        </template>
      </el-menu-item>
      <el-menu-item index="2">
        <template #title>
          <el-icon><Cherry /></el-icon>
          <span>项目一</span>
        </template>        
      </el-menu-item>
      <el-menu-item index="3">
        <template #title>
          <el-icon><Grape /></el-icon>
          <span>项目二</span>
        </template>        
      </el-menu-item>
      <el-menu-item index="4">
        <template #title>
          <el-icon><Orange /></el-icon>
          <span>项目三</span>
        </template>        
      </el-menu-item>
      <el-menu-item index="5">
        <template #title>
          <el-icon><Eleme /></el-icon>
          <span>项目四</span>
        </template>        
      </el-menu-item>
      <el-menu-item index="6">
        <template #title>
          <el-icon><Food /></el-icon>
          <span>项目二</span>
        </template>        
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { Apple, Cherry, Grape, Orange, Eleme, Food } from '@element-plus/icons';
</script>

<style lang="less" scoped>
.box {
  display: flex;
  .logo {
    padding: 4px 8px;
    width: var(--my-nav-width);
    height: 60px;
    background-image: url("../../assets/logo.svg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-clip: padding-box;
  }
  .el-menu {
    flex: 1;
  }
}
</style>