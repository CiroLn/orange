<script>
  import { ref, reactive } from "@vue/reactivity";

  export default {
    setup() {
      const count = ref(1);
      const apple = ref(5);
      const state = reactive({
        count
      });

      console.log(state.count);
      state.count += 10;

      console.log(count.value);
      console.log(' ----------- ');
      state.count = apple;
      console.log(state.count);
      console.log(count.value);

      return {
        count
      }
    }

    /*
    setup() {
      const count = ref(0);
      console.log(count);
      console.log(count.value);

      count.value++;
      console.log(count);

      return {
        count
      }
    }
    */
  } // the end 

</script>

<template>{{ count }}</template>