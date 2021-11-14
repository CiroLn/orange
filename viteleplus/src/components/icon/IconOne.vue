<template>
  <p>
    with extra class
    <b>is-loading</b>, your icon is able to rotate 360 deg in 2
    seconds, you can also override this
  </p>
  <div class="box">
    <el-icon :size="20">
      <edit />
    </el-icon>
    <el-icon color="#409EFC" class="no-inherit">
      <share />
    </el-icon>
    <el-icon>
      <delete />
    </el-icon>
    <el-icon class="is-loading">
      <loading />
    </el-icon>
    <el-button type="primary">
      <el-icon style="vertical-align: middle;">
        <search />
      </el-icon>
      <span style="vertical-align: middle;">Search</span>
    </el-button>
  </div>
</template>

<script setup>
import { Edit, Share, Delete, Loading, Search } from '@element-plus/icons';
</script>

<style lang="less" scoped>
.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

