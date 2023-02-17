import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { settingRouter } from './setting'
const Task = () => import('@/pages/task/Task.vue')
const Setting = () => import('@/pages/setting/Setting.vue')
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/task',
  },
  {
    path: '/task',
    component: Task,
    name: 'task',
  },
  settingRouter,
]

export const router = createRouter({
  routes,
  history: createWebHistory(),
})
