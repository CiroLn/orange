const app = Vue.createApp({});
app.component('custom-layout', {
  // template: `
  //   <header>...</header>
  //   <main>...</main>
  //   <footer>...</footer>
  // `,
  template: `
    <header>...</header>
    <main v-bind="&attrs">...</main>
    <footer>...</footer>
  `  
})

app.mount('#app');