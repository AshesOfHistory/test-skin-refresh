/*
 * @Author: 沧澜
 * @Date: 2021-12-20 04:34:46
 * @LastEditors: 沧澜
 * @LastEditTime: 2022-01-10 06:19:36
 * @Description:
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/list",
    name: "List",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/List.vue"),
  },
  {
    path: "/mine",
    name: "Mine",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Mine.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
