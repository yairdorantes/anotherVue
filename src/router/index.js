import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Test from "../components/Test.vue";
import HelloWorld from "../components/HelloWorld.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/test",
    name: "test",
    component: Test,
  },
  {
    path: "/test/dynamic/:id",
    name: "dynamic",
    component: HelloWorld,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
