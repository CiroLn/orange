<template>
  <el-menu router>
    <el-sub-menu index="1">
      <template #title>
        <span>Basic 基础组件</span>
      </template>
      <el-sub-menu index="1-1">
        <template #title><span>Border 边框</span></template>
        <el-menu-item index="/border/styles">
          <!-- <router-link to="/border/styles">边框样式</router-link> -->
          边框样式
        </el-menu-item>
        <el-menu-item index="/border/radius">
          <!-- <router-link to="/border/radius">圆角</router-link> -->
          圆角
        </el-menu-item>
        <el-menu-item index="/border/shadow">
          <!-- <router-link to="/border/shadow">阴影</router-link> -->
          阴影
        </el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>