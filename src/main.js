import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import qs from 'qs'
// import vuex from 'vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

const baseURL = '/api'

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    contentType : "application/json;charset=utf-8"
  }
})

axios.defaults.baseURL = '/api'
Vue.prototype.axios = axiosInstance
Vue.config.productionTip = false
Vue.prototype.qs = qs

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')