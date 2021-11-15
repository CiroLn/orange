<template>
  <h4>字符串 或 数字类型的分隔符</h4>
  <el-space :size="size" spacer="|">
    <div v-for="i in 6" :key="i">
      <el-button>button {{ i }}</el-button>
    </div>
  </el-space>
  <br>
  <br>
  <h4>分隔符还可以是 VNode 类型</h4>

  <el-space :size="size" :spacer="spacer">
    <div v-for="i in 6" :key="i">
      <el-button> button {{ i }} </el-button>
    </div>
  </el-space>


</template>

<script setup lang="ts">
import { ref, h } from 'vue-demi';
import { ElDivider } from 'element-plus'

const size = ref(20);
const spacer = h(ElDivider, { direction: 'vertical'});
</script>
