import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import VuexCommit from "@/views/VuexCommit.vue"
import VuexIndex from "@/views/VuexIndex.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'VuexIndex',
        component: VuexIndex
    },
    {
        path: '/VuexCommit',
        name: 'VuexCommit',
        component: VuexCommit
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
