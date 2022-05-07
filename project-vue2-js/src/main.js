import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

Vue.config.productionTip = false

const app = new Vue({
  router: router,
  render: h => h(App),
})
// app.use(VueRouter)
app.$mount('#app')
