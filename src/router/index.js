import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import DiarioView from "../views/DiarioView.vue";
import SemanalView from "../views/SemanalView.vue";
import MensalView from "../views/MensalView.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/diario",
      name: "diario",
      component: DiarioView,
    },
    {
      path: "/semanal",
      name: "semanal",
      component: SemanalView,
    },
    {
      path: "/mensal",
      name: "mensal",
      component: MensalView,
    },
  ],
});

export default router;
