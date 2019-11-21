import Vue from "vue";
import VueRouter from "vue-router";
import Panel from "../components/Panel/Panel.vue";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Inbox from "../views/Inbox";
import Marks from "../views/Marks";
import Settings from "../views/Settings";
import Contact from "../views/Contact";
import Download from "../views/Download";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Panel,
    children: [
      {
        path: "",
        component: Dashboard
      },
      {
        path: "inbox",
        component: Inbox
      },
      {
        path: "marks",
        component: Marks
      },
      {
        path: "settings",
        component: Settings
      },
      {
        path: "contact",
        component: Contact
      },
      {
        path: "download",
        component: Download
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
