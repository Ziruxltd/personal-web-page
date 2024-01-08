import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/random-list",
    name: "random-list",
    component: function () {
      return import("../views/RandomListView.vue");
    },
  },
  {
    path: "/random-dices",
    name: "random-dices",
    component: function () {
      return import("../views/RandomDicesView.vue");
    },
  },
  {
    path: "/poc",
    name: "poc",
    component: function () {
      return import("../components/AmountInput.vue");
    },
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
