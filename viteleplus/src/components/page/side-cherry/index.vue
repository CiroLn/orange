<template>
  <el-menu :default-active="defaultActive" router>
    <el-menu-item index="/cherry/page1">图播</el-menu-item>
    <el-menu-item index="/cherry/page2">涂鸦面板</el-menu-item>
    <el-menu-item index="/cherry/page3">文件下载</el-menu-item>
    <el-menu-item index="/cherry/page4">二维码</el-menu-item>
    <el-menu-item index="/cherry/page5">动画</el-menu-item>
  </el-menu>
</template>

<script setup>
const defaultActive = '/cherry/page1';
</script>