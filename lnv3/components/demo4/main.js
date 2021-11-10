const vm = Vue.createApp({});
vm.component('date-pick', {
  template: `
    <div class="date-pick">
      <input type="datetime-local" />
    </div>
  `
});

vm.mount('#app');