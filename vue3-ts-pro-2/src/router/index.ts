import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import TestRouter from '../views/TestRouter.vue'

// 导入所有router
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

// const metaRouterArr = require.context('./', true, /\.ts$/)
// Object.keys(metaRouterArr).forEach(item => {
	
// });

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
