<template>
  <el-sub-menu index="2">
    <template #title>
      <el-icon><IceTea/></el-icon>
      <span>Form表单组件</span>
    </template>
    <el-sub-menu index="2-1">
      <template #title>
        <span>Cascader 级联选择器</span>
      </template>
      <el-menu-item index="/csd/basic">基础用法</el-menu-item>
      <el-menu-item index="/csd/one">有禁用选项</el-menu-item>
      <el-menu-item index="/csd/two">可清空</el-menu-item>
      <el-menu-item index="/csd/three">仅显示最后一级</el-menu-item>
      <el-menu-item index="/csd/four">多选</el-menu-item>
      <el-menu-item index="/csd/five">选择任意一级选项</el-menu-item>
      <el-menu-item index="/csd/six">动态加载</el-menu-item>
      <el-menu-item index="/csd/seven">可搜索</el-menu-item>
      <el-menu-item index="/csd/eight">自定义节点内容</el-menu-item>
      <el-menu-item index="/csd/nine">级联面板</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2-2">
      <template #title>
        <span>Checkbox 多选框</span>
      </template>
      <el-menu-item index="/cbox/basic">基础用法</el-menu-item>
      <el-menu-item index="/cbox/one">禁用状态</el-menu-item>
      <el-menu-item index="/cbox/two">多选框组</el-menu-item>
      <el-menu-item index="/cbox/three">中间状态</el-menu-item>
      <el-menu-item index="/cbox/four">可选项目数量的限制</el-menu-item>
      <el-menu-item index="/cbox/five">按钮样式</el-menu-item>
      <el-menu-item index="/cbox/six">带有边框</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2-3">
      <template #title>
        <span>Color Picker 取色器</span>
      </template>
      <el-menu-item index="/cpicker/basic">基础用法</el-menu-item>
      <el-menu-item index="/cpicker/one">选择透明度</el-menu-item>
      <el-menu-item index="/cpicker/two">预定义颜色</el-menu-item>
      <el-menu-item index="/cpicker/three">选择尺寸</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2-4">
      <template #title>
        <span>Date Picker 日期选择器</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="2-5">
      <template #title>
        <span>DateTime Picker 日期选择器</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="2-6">
      <template #title>
        <span>Date Picker 日期时间选择器</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="2-7">
      <template #title>
        <span>Form 表单</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="2-8">
      <template #title>
        <span>Input 输入框</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="2-9">
      <template #title>
        <span>Input Number 数字输入框</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="2-10">
      <template #title>
        <span>Radio 单选框</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="2-11">
      <template #title>
        <span>Rate 评分</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="2-12">
      <template #title>
        <span>Select 选择器</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="2-13">
      <template #title>
        <span>Virtualized Select 虚拟化选择器</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="2-14">
      <template #title>
        <span>Slider 滑块</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="2-15">
      <template #title>
        <span>Switch 开关</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="2-16">
      <template #title>
        <span>Time Picker 时间选择器</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="2-17">
      <template #title>
        <span>Time Select 时间选择</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="2-18">
      <template #title>
        <span>Transfer 穿梭框</span>
      </template>
    </el-sub-menu>
    <el-sub-menu index="2-19">
      <template #title>
        <span>Upload 上传器</span>
      </template>
    </el-sub-menu>
  </el-sub-menu>
</template>

<script setup>
  import { IceTea } from '@element-plus/icons';
</script>