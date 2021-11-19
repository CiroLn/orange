<template>
  <el-sub-menu index="6">
    <template #title>
      <el-icon><ColdDrink/></el-icon>
      <span>Others 其它</span>
    </template>
    <el-sub-menu index="6-1">
      <template #title>
        <span>Backtop 回到顶部</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="6-2">
      <template #title>
        <span>Divider 分割线</span>
      </template>
    </el-sub-menu>   
  </el-sub-menu>
</template>

<script setup>
  import { ColdDrink } from '@element-plus/icons';
</script>