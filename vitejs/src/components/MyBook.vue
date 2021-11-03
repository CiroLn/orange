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
    const count = ref(1);
    const plusOne = computed(() => count.value + 1, {
      onTrack(e) {
        console.log('onTrack: ', e);
      },
      onTrigger(e) {
        console.log('onTrigger: ', e);
      }
    });

    console.log(plusOne.value);
    count.value++;
  }
}
</script>