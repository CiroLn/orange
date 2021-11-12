<template>
  <el-container style="height: 100%;">
    <el-header><Header /></el-header>
    <el-container>
      <el-aside width="200px"><Sidebar /></el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer><Footer/></el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script setup>
  import Header from './components/page/Header.vue';
  import Sidebar from './components/page/Sidebar.vue';
  import Footer from './components/page/Footer.vue';
</script>

<style lang="less" scoped>
  .el-header {
    padding: 0;
  }
</style>


