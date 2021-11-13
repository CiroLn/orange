<template>
  <el-menu router>
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
    </el-sub-menu>
  </el-menu>
</template>