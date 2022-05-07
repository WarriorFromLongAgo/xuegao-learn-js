import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MyHome from '../views/MyHome.vue'

const routes: Array<RouteRecordRaw> = [
    // const routes = [
    {
        path: '/',
        name: 'myHome',
        component: MyHome
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/LoginRegist.vue')
    },
    {
        path: '/testVuex',
        name: 'testVuex',
        component: () => import('../views/test/MyVuex.vue')
    },
    {
        path: '/testVuex2',
        name: 'testVuex2',
        component: () => import('../views/test/MyVuex2.vue')
    },
    {
        path: '/testVuex3',
        name: 'testVuex3',
        component: () => import('../views/test/MyVuex3.vue')
    },
    // ]
]

const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory(),
    routes
})

export default router