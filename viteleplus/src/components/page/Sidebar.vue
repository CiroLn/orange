<template>
  <el-menu :default-active="defaultActive" router>
    <el-sub-menu index="1">
      <template #title>
        <span>Basic 基础组件</span>
      </template>
      <el-sub-menu index="1-1">
        <template #title>
          <span>Border 边框</span>
        </template>
        <el-menu-item index="/border/styles">边框样式</el-menu-item>
        <el-menu-item index="/border/radius">圆角</el-menu-item>
        <el-menu-item index="/border/shadow">阴影</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="1-2">
        <template #title>
          <span>Button 按钮</span>
        </template>
        <el-menu-item index="/btn/basic">基础用法</el-menu-item>
        <el-menu-item index="/btn/disabled">禁用状态</el-menu-item>
        <el-menu-item index="/btn/text">文字按钮</el-menu-item>
        <el-menu-item index="/btn/icon">图标按钮</el-menu-item>
        <el-menu-item index="/btn/group">按钮组</el-menu-item>
        <el-menu-item index="/btn/loading">加载中</el-menu-item>
        <el-menu-item index="/btn/size">各种尺寸</el-menu-item>
        <el-menu-item index="/btn/auto">自动</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="1-3">
        <template #title>
          <span>Container 容器</span>
        </template>
        <el-menu-item index="/ctn/one">上下布局</el-menu-item>
        <el-menu-item index="/ctn/two">上中下布局</el-menu-item>
        <el-menu-item index="/ctn/three">左右布局</el-menu-item>
        <el-menu-item index="/ctn/four">上左右布局</el-menu-item>
        <el-menu-item index="/ctn/five">上左右下布局</el-menu-item>
        <el-menu-item index="/ctn/six">左上下布局</el-menu-item>
        <el-menu-item index="/ctn/seven">左上中下布局</el-menu-item>
        <el-menu-item index="/ctn/eight">实例</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="1-4">
        <template #title>
          <span>Icon 图标</span>
        </template>
        <el-menu-item index="/icon/one">
          结合
          <code>el-icon</code>使用
        </el-menu-item>
        <el-menu-item index="/icon/two">
          直接使用
          <code>SVG</code>图标
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="1-5">
        <template #title>
          <span>Layout 布局</span>
        </template>
        <el-menu-item index="/layout/basic">基础布局</el-menu-item>
        <el-menu-item index="/layout/one">分栏间隔</el-menu-item>
        <el-menu-item index="/layout/two">混合布局</el-menu-item>
        <el-menu-item index="/layout/three">列偏移</el-menu-item>
        <el-menu-item index="/layout/four">对齐方式</el-menu-item>
        <el-menu-item index="/layout/five">响应式布局</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="1-6">
        <template #title>
          <span>Link 链接</span>
        </template>
        <el-menu-item index="/link/basic">基础用法</el-menu-item>
        <el-menu-item index="/link/one">禁用状态</el-menu-item>
        <el-menu-item index="/link/two">下划线</el-menu-item>
        <el-menu-item index="/link/three">图标</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue-demi';

const route = useRoute();
const defaultActive = ref(null); // TODO: 第一次 route.path 的值为 '/' 问题

setTimeout(() => {
  console.log('path: ', route.path);
  defaultActive.value = route.path;
}, 100);
</script>