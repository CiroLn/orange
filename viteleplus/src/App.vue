<template>
  <el-container style="height: 100%;">
    <el-header><Header /></el-header>
    <el-container>
      <el-aside width="var(--my-nav-width)"><Sidebar /></el-aside>
      <el-container class="page-main">
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
  .page-main {
    background-color: #F2F6FC;
  }
  .el-header {
    padding: 0;
  }  
  .el-main {
    margin: 16px;
    background-color: #fff;
  }
  .el-footer {
    background-color: #fff;
  }
</style>


