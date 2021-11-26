<template>
  <el-menu :default-active="defaultActive" router>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><IceCream/></el-icon>
        <span>文件系统</span>
      </template>   
      <el-sub-menu index="1-proom">
        <template #title>
          <span>Practice Room</span>
        </template>
        <el-menu-item index="/cherry/files/ps/p1">Place-001</el-menu-item>   
        <el-menu-item index="/cherry/files/ps/p2">Place-002</el-menu-item>   
        <el-menu-item index="/cherry/files/ps/p3">Place-003</el-menu-item>   
        <el-menu-item index="/cherry/files/ps/p4">Place-004</el-menu-item>   
        <el-menu-item index="/cherry/files/ps/p5">Place-005</el-menu-item>   
        <el-menu-item index="/cherry/files/ps/p6">Place-006</el-menu-item>   
        <el-menu-item index="/cherry/files/ps/p7">Place-007</el-menu-item>   
        <el-menu-item index="/cherry/files/ps/p8">Place-008</el-menu-item>   
        <el-menu-item index="/cherry/files/ps/p9">Place-009</el-menu-item>   
        <el-menu-item index="/cherry/files/ps/p10">Place-010</el-menu-item>   
      </el-sub-menu>
    </el-sub-menu>
    
    <el-menu-item index="/cherry/page2">涂鸦面板</el-menu-item>
    <el-menu-item index="/cherry/page3">文件下载</el-menu-item>
    <el-menu-item index="/cherry/page4">二维码</el-menu-item>
    <el-menu-item index="/cherry/page5">动画</el-menu-item>
  </el-menu>
</template>


<script setup>
  import { IceCream } from '@element-plus/icons';

  const defaultActive = '/cherry/page1';
</script>