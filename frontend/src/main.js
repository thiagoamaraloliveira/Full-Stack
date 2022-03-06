import "font-awesome/css/font-awesome.css";
import Vue from "vue";

import App from "./App";

import "./config/bootstrap";
import store from "./config/store";
import router from "./config/router";

Vue.config.productionTip = false;

//TEMPORARIO !!
require("axios").defaults.headers.common["Authorization"] =" bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlRoaWFnbyBPbGl2ZWlyYSIsImVtYWlsIjoidGhpYWdvQGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2NDY1OTQ4NTIsImV4cCI6MTY0Njg1NDA1Mn0.gG8Zi7kUXdyTDDS6cHHb_Zcd9dDrwxepwfGk6UxK8Lo"

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
