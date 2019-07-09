import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import yaml from "js-yaml";
import 'font-awesome/css/font-awesome.css'
import '@/assets/less/common.less'

Vue.prototype.$Y = yaml;
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
