import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import Register from "../views/RegisterView.vue";
import Login from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Mon blog",
      },
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
      meta: {
        title: "About",
      },
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        title: "Sing up",
      },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        title: "connection",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;

  next();
});

export default router;
