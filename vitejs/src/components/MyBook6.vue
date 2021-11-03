<template>
  <div></div>
</template>

<script>
import { ref, reactive, toRefs, readonly, computed } from "@vue/reactivity";

export default {
  props: {
    title: {
      type: String,
      default: 'Composition',
    },
  },
  setup(props) {
    /* 
    const count = ref(1);
    const pluscount = computed(() => count.value + 1);
    console.log(pluscount.value);

    count.value += 2;
    console.log(pluscount.value);

    pluscount.value += 4; // computed value is readonly
    console.log(pluscount.value);
    */

    const count = ref(1);
    const plusOne = computed({
      get() {
        return count.value + 1;
      },
      set(val) {
        count.value = val - 1;
      }
    });

    console.log(plusOne.value);

    plusOne.value = 10;

    console.log(count.value);
  }
}
</script>