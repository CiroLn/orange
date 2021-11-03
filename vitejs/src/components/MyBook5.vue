<template>
  <div></div>
</template>

<script>
import { ref, reactive, toRefs, readonly } from "@vue/reactivity";

export default {
  props: {
    title: {
      type: String,
      default: 'Composition',
    },
  },
  setup(props) {
    const book = reactive({
      author: 'Vue Team',
      year: '2020',
      title: 'Vue 3 Guide',
      description: 'You are reading this book right now ;)',
      price: 'free'
    })

    // let { author, title } = book
    // author = 'Evan You';
    let { author, title } = toRefs(book);
    author.value = 'Evan You';
    console.log(author.value, '-----', title.value);
    console.log(book);

    const copy = readonly(book);
    copy.author.value = 'Nicholas'; // 报错
    console.log('copy: ', copy);
  }
}
</script>