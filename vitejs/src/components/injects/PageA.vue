<script>
  import { computed } from 'vue';
  import PageB from './PageB.vue';
  export default {
    components: {
      PageB
    },
    provide() {
      return {
        user: 'John Doex',
        todoLength: this.todos.length, 
        todoLengthReactive: computed(() => this.todos.length), // 响应式    
      }
    },
    data() {
      return {
        content: '',
        todos: ['Feed a cat', 'Buy tickets'],
      }
    },
    methods: {
      add() {
        this.todos.push(this.content);
      }
    }
  }
</script>

<template>
  <br>
  <br>

  <input v-model="content" />
  <button @click="add">添加</button>

  <ul>
    <li v-for="(item, index) of todos" :key="index">{{ item }}</li>
  </ul>

  <div>
    <page-b></page-b>
  </div>
</template>