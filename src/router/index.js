import Vue from "vue";
import VueRouter from "vue-router";
import Panel from "../components/Panel/Panel.vue";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Panel,
    children: [
      {
        path: "",
        component: Dashboard
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
