<template>
  <div>
    <h4>{{ title }}</h4>

  </div>
</template>

<script>
  import { ref, reactive } from "@vue/reactivity";
  import { h } from "@vue/runtime-core";
  export default {
    props: {
      title: {
        type: String,
        default: 'Composition',
      },
    },
    setup(props, { expose }) {
      const counter = ref(100);
      const book = reactive({'name': 'Vue3 Guide', 'price': 66});

      const increment = () => {
        counter.value++;
      }
      // 提供父组件使用
      expose({
        increment
      });

      return () => h('div', [book.name, '  ', book.price, '  ', counter.value]);
    }    
  }
</script>