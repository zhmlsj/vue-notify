import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home.vue";
import List from "../components/List.vue";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/",
      component: Home,
      name: Home
    },
    {
      path: "/list",
      component: List,
      name: List
    }
  ]
});

export default router;
