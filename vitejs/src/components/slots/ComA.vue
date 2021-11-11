<script>
  export default {
    props: {
      action: String
    },
    created() {
      console.log('action: ', this.action);
    }
  }
</script>

<template>
  <button class="btn-primay">
    <slot>Add todo</slot>
  </button>
</template>