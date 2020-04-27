import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueEditor from "vue2-editor";
import VeeValidate from "vee-validate";
import VueSweetalert2 from "vue-sweetalert2";

Vue.config.productionTip = false;
Vue.use(VueEditor);
Vue.use(VeeValidate);
Vue.use(VueSweetalert2);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
