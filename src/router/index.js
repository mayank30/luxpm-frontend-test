import Vue from "vue";
import VueRouter from "vue-router";

import { AppLayout } from "../util/constants";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Default",
    component: () => import("../views/Default.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: { layout: AppLayout.Auth },
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: { layout: AppLayout.Auth },
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/forgot-password",
    name: "Forgot Password",
    meta: { layout: AppLayout.Auth },
    component: () => import("../views/Forgot.vue"),
  },
  {
    path: "/blank",
    name: "Blank",
    component: () => import("../views/Blank.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
