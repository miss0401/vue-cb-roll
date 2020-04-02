import Vue from 'vue'
import App from './App.vue'
// import 'lib-flexible'
import Roll from './lib/index'

console.log(Roll, 'roll')

Vue.use(Roll);

new Vue({
  el: '#app',
  render: h => h(App)
})
