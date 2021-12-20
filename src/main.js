import Vue from "vue";
import App from "./App.vue";

import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  beforeCreate() {
    this.$store.commit("INITIALISE_STORE");
  },
  render: (h) => h(App),
}).$mount("#app");
