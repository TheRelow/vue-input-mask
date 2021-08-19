import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import inputMask from '@/directives/vue-input-mask'

Vue.directive('input-mask', inputMask)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
