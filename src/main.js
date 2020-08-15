import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const bus = new Vue() // eslint-disable-line

new Vue({
  render: h => h(App),
}).$mount('#app')
