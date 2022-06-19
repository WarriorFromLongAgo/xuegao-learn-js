import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ImMainView from '@/views/ImMainView.vue'
import GotoTest from '@/views/GotoTest.vue'
import testView from './testView'
import VueWeChatDemoRouter from "@/router/VueWeChatDemo";

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
        path: '/GotoTest',
        name: 'GotoTest',
        component: GotoTest
    }, {
        path: '/ImMainView',
        name: 'ImMainViewName',
        component: ImMainView
    },
    ...testView,
    ...VueWeChatDemoRouter
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
