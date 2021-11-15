import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
// app.config.errorHandler = (err, vm, info) => {
//   // console.log('errorHandler: ', err, vm, info);
// }
// app.config.warnHandler = (msg, vm, trace) => {
//   // console.log('warnHandler: ', msg, vm, trace);
// };
app.config.globalProperties.globalFoo = 'globalFoo';

app.mount('#app');

console.log('version: ', app.version);
