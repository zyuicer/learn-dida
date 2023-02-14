import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
const Task = () => import("@/components/task/TheTask.vue");
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/task",
  },
  {
    path: "/task",
    component: Task,
    name: "task",
  },
];
export const router = createRouter({
  routes,
  history: createWebHistory(),
});
