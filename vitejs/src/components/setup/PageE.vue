<template>
  <div ref="root">This is a root element.</div>
  <br/>
  <input v-model="apple" />
  <p>{{ apple }}</p>
</template>

<script>
  import { ref, onMounted } from "vue";
  export default {
    setup() {
      const ele = ref(null);
      const apple = ref('apple');
      onMounted(() => {
        console.log('root: ', ele.value);
      });
      return {
        root: ele,
        apple,
      }
    }
  }
</script>