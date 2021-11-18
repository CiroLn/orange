<template>One</template>

<script>

export default {
  beforeRouteEnter(to, from) {
    console.log('-------beforeRouteEnter-------');
    console.log('to: ', to);
    console.log('from: ', from);
  },
  beforeRouteUpdate(to, from) {
    console.log('-------beforeRouteUpdate-------');
    console.log('to: ', to);
    console.log('from: ', from);
  },
  beforeRouteLeave(to, from) {
    console.log('-------beforeRouteLeave-------');
    console.log('to: ', to);
    console.log('from: ', from);
  },    
}
</script>
