import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import mock from './mock-data.js'

let data = {
  restaurants: mock,
  favorites: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
