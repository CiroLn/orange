<template>
  <el-sub-menu index="5">
    <template #title>
      <el-icon><Dessert/></el-icon>
      <span>Feedback 反馈组件</span>
    </template>
    <el-sub-menu index="5-1">
      <template #title>
        <span>Alert 提示</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="5-2">
      <template #title>
        <span>Dialog 弹出框</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="5-3">
      <template #title>
        <span>Drawer 抽屉</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="5-4">
      <template #title>
        <span>Loading 加载</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="5-5">
      <template #title>
        <span>Message 消息提示</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="5-6">
      <template #title>
        <span>Message Box 消息弹出框</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="5-7">
      <template #title>
        <span>Notification 通知</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="5-8">
      <template #title>
        <span>Pop Confirm 弹出确认框</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="5-9">
      <template #title>
        <span>Popover 弹出框</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="5-10">
      <template #title>
        <span>Tooltip 文字提示</span>
      </template>
    </el-sub-menu>    
  </el-sub-menu>
</template>

<script setup>
  import { Dessert } from '@element-plus/icons';
</script>