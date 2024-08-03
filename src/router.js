import { createRouter, createWebHistory } from "vue-router";

import SignIn from "./components/SignIn.vue";
import MidSection from "./components/MidSection.vue";
import AppDashboard from "./components/AppDashboard.vue";
import AppHome from "./components/AppHome.vue";
import AppProjectCard from "./components/AppProjectCard.vue";
const routes = [
  {
    name: "SignIn",
    path: "/signIn",
    component: SignIn,
  },
  { name: "Jobs", path: "/jobs", component: AppProjectCard },

  {
    name: "Home",
    path: "/",
    component: AppHome,
  },
  {
    name: "Logout",
    path: "/logout",
    component: MidSection,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    component: AppDashboard,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
