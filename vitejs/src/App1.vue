<script>
  import MyBook from "./components/books/MyBook.vue";

  export default {
    components: {
      MyBook
    },

    methods: {
      hiChild() {
        this.$refs.mbook.increment();
      }
    }

  }
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <button @click="hiChild">按钮</button>
  </div>
  <br>
  <br>
  <my-book ref="mbook"></my-book>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
