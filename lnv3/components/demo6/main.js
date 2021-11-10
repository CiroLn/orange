const vm = Vue.createApp({
  methods: {
    clickHandle() {
      
    }
  }
});
vm.component('date-pick', {
  inheritAttrs: false,
  template: `
    <div class="date-pick">
      <input type="datetime-local" v-bind="$attrs" />
    </div>
  `
});

vm.mount('#app');