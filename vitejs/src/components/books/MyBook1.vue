<template>
  <div>
    <h4>{{ title }}</h4>
    <div>
      <p>书名: {{ book.name }}</p>
      <p>单价: {{ book.price }}</p>
      <p>数量: {{ counter }} 元</p>
    </div>
  </div>
</template>

<script>
  import { toRefs, ref, reactive } from "@vue/reactivity";

  export default {
    props: {
      title: {
        type: String,
        default: 'Composition',
      },
    },
    setup(props, context) {
      // console.log(props.title);
      // const { title } = toRefs(props);
      // console.log('11', title.value);
      // console.log('context: ', context);

      const counter = ref(100);
      const book = reactive({'name': 'Vue3 Guide', 'price': 66});
      console.log('counter: ', counter.value);
      console.log('book: ', book);

      return {
        counter,
        book
      }
    }    
  }
</script>