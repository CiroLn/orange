const vm = Vue.createApp({
  data() {
    return {
      bookTitle: 'Vue3'
    }
  },
});
vm.component('my-component', {
  props: {
    modelValue: String
  },
  emits: ['update:modelValue'],
  template: `
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"></input>
  `
});

vm.mount('#app');