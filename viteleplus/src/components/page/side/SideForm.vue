<template>
  <el-sub-menu index="2">
    <template #title><span>Form表单组件</span></template>
    <el-sub-menu index="2-1">
      <template #title><span>Cascader 级联选择器</span></template>
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
      <template #title><span>Checkbox 多选框</span></template>
      <el-menu-item index="/cbox/basic">基础用法</el-menu-item>
      <el-menu-item index="/cbox/one">禁用状态</el-menu-item>
      <el-menu-item index="/cbox/two">多选框组</el-menu-item>
      <el-menu-item index="/cbox/three">中间状态</el-menu-item>
      <el-menu-item index="/cbox/four">可选项目数量的限制</el-menu-item>
      <el-menu-item index="/cbox/five">按钮样式</el-menu-item>
      <el-menu-item index="/cbox/six">带有边框</el-menu-item>
    </el-sub-menu>  
    <el-sub-menu index="2-3">
      <template #title><span>Color Picker 取色器</span></template>
      <el-menu-item index="/cpicker/basic">基础用法</el-menu-item>
      <el-menu-item index="/cpicker/one">选择透明度</el-menu-item>
      <el-menu-item index="/cpicker/two">预定义颜色</el-menu-item>
      <el-menu-item index="/cpicker/three">选择尺寸</el-menu-item>
    </el-sub-menu>        
  </el-sub-menu>
</template>