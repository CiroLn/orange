<template>
  <div ref="root">This is a root element.</div>
  
</template>

<script>
  import { ref, watchEffect } from "vue";
  export default {
    setup() {
      const rootEle = ref(null);

      watchEffect(() => {
        console.log('-------- watchEffect -------');
        console.log(rootEle.value);
      },{
        flush: 'post'
      });

      return {
        root: rootEle
      }
    }
  }
</script>