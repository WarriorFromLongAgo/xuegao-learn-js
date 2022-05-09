import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Vue3TsLearn from '../views/Vue3TsLearn.vue'
import Vue3TsLearn2 from '../views/Vue3TsLearn2.vue'
import Vue3TsLearn3 from '../views/Vue3TsLearn3.vue'

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
