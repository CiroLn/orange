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
    </el-sub-menu>
  </el-menu>
</template>