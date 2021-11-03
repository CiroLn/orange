<template>
  <div>
    <h4>{{ title }}</h4>
    <div ref="root">This is a root div.</div>
  </div>
</template>

<script>
  import { ref } from "@vue/reactivity";
  import { onMounted } from "@vue/runtime-core";

  export default {
    props: {
      title: {
        type: String,
        default: 'Composition',
      },
    },
    setup(props) {
      const root = ref(null);
      onMounted(() => {
        console.log(root.value);
      });
      return {
        root
      }
    }  
  }
</script>