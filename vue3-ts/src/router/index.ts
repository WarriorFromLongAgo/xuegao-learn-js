import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Vue3TsLearn from '../views/Vue3TsLearn.vue'
import Vue3TsLearn2 from '../views/Vue3TsLearn2.vue'
import Vue3TsLearn3 from '../views/Vue3TsLearn3.vue'

// https://v3.cn.vuejs.org/guide/routing.html#%E4%BB%8E%E9%9B%B6%E5%BC%80%E5%A7%8B%E7%AE%80%E5%8D%95%E7%9A%84%E8%B7%AF%E7%94%B1
const NotFoundComponent = { template: '<p>Page not found</p>' }
const HomeComponent = { template: '<p>Home page</p>' }
const AboutComponent = { template: '<p>About page</p>' }

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Vue3TsLearn',
    name: 'Vue3TsLearn',
    component: Vue3TsLearn
  },
  {
    path: '/Vue3TsLearn2',
    name: 'Vue3TsLearn2',
    component: Vue3TsLearn2
  },
  {
    path: '/Vue3TsLearn3',
    name: 'Vue3TsLearn3',
    component: Vue3TsLearn3
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
