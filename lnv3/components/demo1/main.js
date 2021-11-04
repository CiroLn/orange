const vm = Vue.createApp({});
vm.component('component-a', {
  data() {
    return {
      name: 'ComponentA',
      count: 0,
    }
  },
  template: `
    <div>
      <button @click="count++">{{ name }}: {{ count }}</button>
    </div>`
});
vm.component('component-b', {
  data() {
    return {
      count: 0,
    }
  },
  props: ['title'],
  template: `
    <div>
      <button @click="count++">{{ title }}: {{ count }}</button>
    </div>`  
});
vm.component('component-c', {
  data() {
    return {
      name: 'ComponentC',
      count: 0,
    }
  },
  template: `
    <div>
      <button @click="count++">{{ name }}: {{ count }}</button>
    </div>`  
});

vm.mount('#app');