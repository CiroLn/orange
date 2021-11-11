<script>
  import PageA from './PageA.vue';
  import PageB from './PageB.vue';
  import PageC from './PageC.vue';

  export default {
    components: {
      PageA,
      PageB,
      PageC,
    },
    data() {
      return {
        picked: ''
      }
    }
  }
</script>

<template>
  <div>
    <input type="radio" id="one" value="page-a" v-model="picked" />
    <label for="one">Page A</label>
    <br/>
    <br/>
    <input type="radio" id="two" value="page-b" v-model="picked" />
    <label for="two">Page B</label>
    <br/>    
    <br/>    
    <input type="radio" id="three" value="page-c" v-model="picked" />
    <label for="three">Page C</label>
    <br/>    
    <br/>    
  </div>
  <p>
    Picked: {{ picked }}
  </p>
  <br>
  <keep-alive>
    <component :is="picked"></component>
  </keep-alive>
</template>