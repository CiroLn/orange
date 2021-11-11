<script>
  export default {
    data() {
      return {
        items: ['Feed a cat', 'Buy milk'],
      }
    }
  }
</script>

<template>
  <ul>
    <li v-for="(item, index) of items">
      <slot name="idx" :idx="index"></slot>
      <slot :item="item"></slot>
    </li>
  </ul>
</template>