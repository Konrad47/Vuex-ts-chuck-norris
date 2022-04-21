import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import BootstrapVue, { IconsPlugin } from "bootstrap-vue";
import CategoryJokeService from "./views/category/category-joke.service";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  provide: {
    categoryJokeService: () => new CategoryJokeService(),
  },
  store,
  render: (h) => h(App),
}).$mount("#app");
