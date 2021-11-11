<script>
  export default {
    created() {
      console.log('child created');
    },
    mounted() {
      console.log('child mounted');
      // this.inputFocus();
    },
    methods: {
      inputFocus() {
        this.$refs.phone.focus();
      }
    }
  }
</script>

<template>
  <input ref="phone" placeholder="telephone number" />
</template>

