import Vue from 'vue'

import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { VueSpinners } from '@saeris/vue-spinners'



// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'
require("./store/subscriber")
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueSpinners)

Vue.config.productionTip = false
store.dispatch('auth/attempt',localStorage.getItem('token')).then(() => {


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
})