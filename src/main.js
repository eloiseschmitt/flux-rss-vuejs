import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import moment from 'moment'
//import router from './router'
import store from './store'


// Configs
Vue.config.devtools = true
Vue.config.productionTip = false
Vue.use(VueAxios, axios);
Vue.use(moment)

/*** ICI */

// Filtre format de la date en FR
Vue.filter('formatDate', function (value) {
  if (value) {
      return moment(String(value)).format('DD/MM/YYYY')
  }
})

new Vue({
  //router,
  store,
  render: h => h(App),
}).$mount('#app')
