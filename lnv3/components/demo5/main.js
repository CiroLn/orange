const app = Vue.createApp({
  methods: {
    showChange(event) {
      console.log(event.target.value);
    }
  }  
});
app.component('date-pick', {
  template: `
    <select>
      <option value="1">Yesterday</option>
      <option value="2">Today</option>
      <option value="3">Tomorrow</option>
    </select>    
  `,
  created() {
    console.log('$attrs --> ', this.$attrs);
  },
});

app.mount('#app');