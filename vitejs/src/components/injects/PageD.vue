<script>
  export default {
    inject: ['user', 'todoLength', 'todoLengthReactive'],
    created() {
      console.log(`Injected property: ${this.user}`);
    },
  }
</script>

<template>
  <p>
    {{ todoLength }}
  </p>
  <p>
    {{ todoLengthReactive }}
  </p>
  <div>
    {{ user }}
  </div>  
</template>