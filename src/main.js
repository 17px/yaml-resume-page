import Vue from "vue";
import App from "./App.vue";
import yaml from "js-yaml";
import axios from "@/util/request";
import "font-awesome/css/font-awesome.css";
import "@/assets/less/common.less";

Vue.prototype.$Y = yaml;
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
