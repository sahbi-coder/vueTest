import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard";
import store from "@/store/store";

const routes = [
  { path: "/", component: Login, meta: { auth: false } },
  {
    path: "/dashboard",
    component: Dashboard,
    meta: {
      auth: true,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isAuth) {
    next('/');
  } else if (!to.meta.auth && store.getters.isAuth) {
    next('/dashboard');
  } else {
    next();
  }
});

export default router;
