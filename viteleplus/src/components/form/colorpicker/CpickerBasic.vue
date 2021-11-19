<template>
  <div class="demo-color-block">
    <span class="demonstration">With default value</span>
    <el-color-picker v-model="color1" @change="colorChange"/>
  </div>
  <div class="demo-color-block">
    <span class="demonstration">With no default value</span>
    <el-color-picker v-model="color2" @change="colorChange"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const color1 = ref('#409EFF')
    const color2 = ref(null)
    const colorChange = (v) => {
      console.log(v);
    }
    return {
      color1,
      color2,
      colorChange,
    }
  },
})
</script>

<style lang="less" scoped>
.demo-color-block {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  .demonstration {
    margin-right: 16px;
  }
}
</style>
