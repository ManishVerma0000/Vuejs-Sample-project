import "./assets/main.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import SignIn from "./components/SignIn.vue";
import AppNavBarSecond from "./components/AppNavBarSecond.vue";
import Home from "./components/Home.vue";
import Dashboard from "./components/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Dashboard },
    { path: "/Home", component: Home },
  ],
});

const app = createApp(App);

app.use(router);

app.mount("#app");
