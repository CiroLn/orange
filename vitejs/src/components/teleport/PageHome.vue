<script>
  import PageA from './PageA.vue';

  export default {
    components: {
      PageA,
    },
    setup() {
      return {}
    }
  }
</script>

<template>
  <h4>Tootips with Vue 3 Teleport</h4>
  <div class="parent">
    <page-a style="position: relative;"></page-a>
  </div>
</template>