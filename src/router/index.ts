import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
const CategoriesView = () => import("@/views/category/categories-view.vue");
const CategoryJoke = () => import("@/views/category/category-joke.vue");

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "CategoriesView",
    component: CategoriesView,
  },
  {
    path: "/joke/:category",
    name: "CategoryJoke",
    component: CategoryJoke,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
