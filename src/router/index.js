import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import State from "@/components/State";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/state/:id",
    name: "State",
    component: State
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
