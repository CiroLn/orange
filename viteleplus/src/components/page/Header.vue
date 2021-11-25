<template>
  <div class="box">
    <div class="logo"></div>
    <el-menu mode="horizontal" :default-active="defaultActive">
      <el-menu-item index="elplus" @click="menuClick">
        <template #title>
          <el-icon><Apple /></el-icon>
          <span>Element Plus</span>
        </template>
      </el-menu-item>
      <el-menu-item index="graffiti" @click="menuClick">
        <template #title>
          <el-icon><Cherry /></el-icon>
          <span>涂鸦</span>
        </template>        
      </el-menu-item>
      <el-menu-item index="picslide" @click="menuClick">
        <template #title>
          <el-icon><Grape /></el-icon>
          <span>图播</span>
        </template>        
      </el-menu-item>
      <el-menu-item index="4" @click="menuClick">
        <template #title>
          <el-icon><Orange /></el-icon>
          <span>项目三</span>
        </template>        
      </el-menu-item>
      <el-menu-item index="5" @click="menuClick">
        <template #title>
          <el-icon><Eleme /></el-icon>
          <span>项目四</span>
        </template>        
      </el-menu-item>
      <el-menu-item index="6" @click="menuClick">
        <template #title>
          <el-icon><Food /></el-icon>
          <span>项目二</span>
        </template>        
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { Apple, Cherry, Grape, Orange, Eleme, Food } from '@element-plus/icons';
import { ROOT_MUTAIONS } from '@/store/mutation-types';

const store = useStore();
const router = useRouter();
const defaultActive = window.localStorage.getItem('pageTab') || store.state.pageTab;

function menuClick(v) {
  const pageTab = v.index;
  router.push(`/${pageTab}`); // 已配置相关重定向路由
  store.commit(ROOT_MUTAIONS.PAGE_TAB_CHANGE, pageTab);
  window.localStorage.setItem('pageTab', pageTab);
}

</script>

<style lang="less" scoped>
.box {
  display: flex;
  .logo {
    padding: 4px 8px;
    // width: var(--el-aside-width);
    width: 300px;
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