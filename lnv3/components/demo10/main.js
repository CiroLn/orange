
const MyComponent = {
  props: {
    firstName: {
      type: String,
      // default: 'Nicholas'
    },
    lastName: {
      type: String,
      // default: 'Lee'
    }
  },
  emits: ['update:firstName', 'update:lastName'],
  template: `
    <br />
    <br />
    <strong>FirstName</strong>: <input :value="firstName" @input="$emit('update:firstName', $event.target.value)" />
    <br />
    <br />
    <strong>LastName</strong>: <input :value="lastName" @input="$emit('update:lastName', $event.target.value)" />
    <br />
    <br />
    <p>{{ firstName }} {{ lastName }}</p>    
  `
};

const vm = Vue.createApp({
  components: {
    MyComponent
  },
  data() {
    return {
      firstName: 'Nicholas',
      lastName: 'Lee'
    }
  }
});
vm.mount('#app');