/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2025-05-15 10:14:35
 */
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {},
    component: () => import('@/views/home/index.vue'),
    children: []
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes
})

export default router
