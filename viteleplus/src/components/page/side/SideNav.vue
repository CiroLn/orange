<template>
  <el-sub-menu index="4">
    <template #title>
      <el-icon><IceDrink/></el-icon>
      <span>Navigation 导航</span>
    </template>
    <el-sub-menu index="4-1">
      <template #title>
        <span>Affix 固钉</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="4-2">
      <template #title>
        <span>Breadcrumb 面包屑</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="4-3">
      <template #title>
        <span>Dropdown 下拉菜单</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="4-4">
      <template #title>
        <span>Menu 菜单</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="4-5">
      <template #title>
        <span>Page Header 页头</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="4-6">
      <template #title>
        <span>Steps 步骤条</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="4-7">
      <template #title>
        <span>Tabs 标签页</span>
      </template>
    </el-sub-menu>
  </el-sub-menu>
</template>

<script setup>
  import { IceDrink } from '@element-plus/icons';
</script>