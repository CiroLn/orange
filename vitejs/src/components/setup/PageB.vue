<script>
  import { ref, reactive } from 'vue';
  export default {
    setup() {
      const books = reactive([ref('Vue 3 Guide')]);
      console.log(books[0].value);

      const map = reactive(new Map([['count', ref(10)]]));
      console.log(map.get('count').value);
      return {}
    }
  }
</script>

<template></template>