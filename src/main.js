import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
//import router from './router'
//import store from './store'


// Configs
Vue.config.devtools = true
Vue.config.productionTip = false
Vue.use(VueAxios, axios);

new Vue({
  //router,
  //store,
  render: h => h(App),
}).$mount('#app')
