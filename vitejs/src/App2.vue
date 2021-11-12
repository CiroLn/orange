<script setup>
  // import ComA from './components/slots/ComA.vue';
  // import ComB from './components/slots/ComB.vue';
  // import ComC from './components/slots/ComC.vue';
  // import PageA from './components/injects/PageA.vue';
  // import PageHome from './components/keepalive/PageHome.vue';
  // import PageHome from './components/refs/PageHome.vue';
  // import PageHome from './components/setup/PageHome.vue';
  import PageHome from './components/teleport/PageHome.vue';
</script>

<template>
  <page-home></page-home>
  <!-- <page-a></page-a> -->
<!-- 
  <com-b>
    <template #header>
      <h1>Here is a page title.</h1>
    </template>
    <template #default>
      <div>Here is a page main.</div>
    </template>
    <template #footer>
      <p>Here's some contact info</p>
    </template>
  </com-b>  -->

  <!-- 
  <com-c>
    <template v-slot:idx="slotProp1">
      <i class="fa fa-check">🐕 &nbsp;&nbsp;</i>
      <strong>{{ slotProp1.idx }} -- </strong>
    </template>
    <template v-slot:default="slotProp2">      
      <span>{{ slotProp2.item }}</span>      
    </template>
  </com-c> 
  -->

  <!-- <ComA action="remove">Edit todo - {{ action }}</ComA> -->
  <!--   
  <com-b>
    <template v-slot:header>
      <h1>Here is a page title.</h1>
    </template>
    <template v-slot:default>
      <div>Here is a page main.</div>
    </template>
    <template v-slot:footer>
      <p>Here's some contact info</p>
    </template>
  </com-b> 
  -->

</template>


