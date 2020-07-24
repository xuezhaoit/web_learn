// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import store from './store'
console.log(store);


Vue.config.productionTip = false

Vue.prototype.myAxios= axios
// axios.get('localhost:8081/list').then(res=>{
//   console.log('成功');
  
// },rej=>{
//   console.log('失败');
  
// })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
