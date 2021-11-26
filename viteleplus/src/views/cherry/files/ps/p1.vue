<template>
  <button @click="mkFile">创建文件</button>
</template>

<script setup>
import { ref, onMounted } from 'vue';

function mkFile() {
  const file = new File(['foofoo'], 'foo.txt', {
    type: 'text/plain'
  });

  console.log('file: ', file);
}

</script>