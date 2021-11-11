<script>
  import { reactive, toRefs } from "vue";
  export default {
    setup() {
      const book = reactive({
        author: 'Vue Team',
        year: '2020',
        title: 'Vue 3 Guide',
        description: 'You are reading this book right now ;)',
        price: 'free'        
      });

      // let { author, title } = book;
      // console.log(author, '  ', title);
      // author = 'Elen You';
      // title = 'Vite';

      let { author, title } = toRefs(book);
      console.log(author.value, '  ', title.value);
      
      author.value = 'Nicholas Lee';
      title.value = 'Vite';
      console.log(book.author, '  ', book.title);

      return {}
    }
  }
</script>

<template></template>