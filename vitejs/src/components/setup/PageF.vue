<template>
  <div v-for="(item, i) in list" :ref="el => { if (el) divs[i] = el }">{{ item }}</div>
  
</template>

<script>
  import { ref, reactive, onBeforeUpdate, onMounted } from "vue";
  export default {
    setup() {
      const list = reactive(['aa', 'bb', 'cc']);
      const divs = ref([]);

      onBeforeUpdate(() => {
        divs.value = [];
      });
      onMounted(() => {
        console.log('list: ', list[0]);
        
        console.log('divs: ', divs.value[0]);
      });
      return {
        list,
        divs,
      }
    }
  }
</script>