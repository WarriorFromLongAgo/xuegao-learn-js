import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import TestRouter from '../views/TestRouter.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }, {
    path: '/login',
    name: 'login',
    component: LoginView
  }, {
    path: '/testRouter',
    name: 'testRouter',
    component: TestRouter
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
