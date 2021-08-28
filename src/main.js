import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import VueCookies from 'vue-cookies'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

Vue.use(VueCookies);