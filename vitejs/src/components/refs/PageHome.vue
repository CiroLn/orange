<script>
  import PageA from './PageA.vue';

  export default {
    components: {
      PageA
    },
    created() {
      // this.$refs.apage.inputFocus();
      console.log('parent created');
    },
    mounted() {
      console.log('parent mounted');
      this.$refs.apage.inputFocus();
    }
  }
</script>

<template>
  <page-a ref="apage"></page-a>
</template>