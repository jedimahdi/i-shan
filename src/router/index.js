import Vue from "vue";
import VueRouter from "vue-router";

import Panel from "../components/Panel/Panel.vue";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import Inbox from "../views/Inbox";
import Sent from "../views/Sent";
import Marks from "../views/Marks";
import Settings from "../views/Settings";
import Contact from "../views/Contact";
import Download from "../views/Download";
import CourseVideos from "../views/CourseVideos";
import Logout from "../views/Logout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Panel,
    children: [
      {
        path: "",
        component: Dashboard,
        name: "dashboard"
      },
      {
        path: "mail/inbox",
        component: Inbox
      },
      {
        path: "mail/sent",
        component: Sent
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
      },
      {
        path: "course/:course_title",
        component: CourseVideos
      },
      {
        path: "logout",
        component: Logout
      }
    ],
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      guest: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem("jwt") == null) {
      next();
    } else {
      next({ path: "/" });
    }
  } else {
    next();
  }
});

export default router;
