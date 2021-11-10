const vm = Vue.createApp({});
vm.component('date-pick', {
  emits: {
    click: null,
    submit: ({email, password}) => {
      if(email && password) {
        return true;
      }else {
        console.warn('Invalid submit event payload!');
        return false;
      }
    },
  },
  template: `
    <div class="date-pick">
      <input type="datetime-local" />
      <button >提交</button>
    </div>
  `,
  methods: {
    submitForm(email, password) {
      this.$emit('submit', {email, password});
    }
  }
});

vm.mount('#app');