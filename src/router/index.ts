import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
const JokesView = () => import("@/views/joke/Jokes-view.vue");

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "jokesView",
    component: JokesView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
