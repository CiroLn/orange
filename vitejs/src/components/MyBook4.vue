<template>
  <div>
    <h4>{{ title }}</h4>
    <span>{{ count }}</span>
    <br>
    <button @click="count++">Increment Count</button>
    <!-- <span>{{ nested.count.value }}</span> -->
    <span>&nbsp;&nbsp;</span>
    <button @click="nested.count.value++">Increment Nested</button>
    <br>
    <br>

  </div>
</template>

<script>
  import { ref, reactive } from "@vue/reactivity";
  import { onMounted } from "@vue/runtime-core";

  export default {
    props: {
      title: {
        type: String,
        default: 'Composition',
      },
    },
    setup(props) {
      const count = ref(3);
      // const a = ref(9);
      // const state = reactive({
      //   a
      // });

      // console.log(state.a);
      // state.a += 9;
      // console.log(a.value);
      /* 
      const foo = ref(10);
      const aly = ref(5);
      const bar = reactive({
        tom: foo
      });

      console.log(bar.tom);
      bar.tom += 10;
      console.log(foo.value);

      bar.tom = aly;
      console.log(bar.tom);
      console.log(foo.value);
       */
      
      const books = reactive([ref('Vue3 Guide')]);
      console.log(books[0].value); // 这里需要 .value

      const map = reactive(new Map([['name', ref('Nicholas')]]));
      console.log(map.get('name').value);

      return {
        count,
        nested: {
          count
        }
      }
    }  
  }
</script>