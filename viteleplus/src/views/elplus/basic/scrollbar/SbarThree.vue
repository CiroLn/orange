<template>
  <el-scrollbar ref="scrollbar" height="400px" always @scroll="scroll" style="height: auto;">
    <div ref="inner">
      <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
    </div>
  </el-scrollbar>

  <el-slider v-model="sliderValue" :max="sliderMax" :format-tooltip="formatTooltip" @input="inputSlider"></el-slider>
</template>

<script setup>
  import { ref, onMounted } from 'vue-demi';

  const sliderMax = ref(0);
  const sliderValue = ref(0);
  const scrollbar = ref(null);
  const inner = ref(null);

  onMounted(() => {
    sliderMax.value = inner.value.clientHeight - 380;
  });

  const inputSlider = (value) => {
    scrollbar.value.setScrollTop(value);
  }
  const scroll = ({ scrollTop }) => {
    sliderValue.value = scrollTop;
  }
  const formatTooltip = (value) => {
    return `${value} px`
  }
</script>

<style lang="less" scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 0 24px 24px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);

  &:last-child {
    // 两点没有效果
    margin-bottom: 0;
  }
}
</style>