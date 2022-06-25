import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import VuexCommit from "@/views/VuexCommit.vue"
import VuexIndex from "@/views/VuexIndex.vue"
import VuexAction from "@/views/VuexAction.vue"
import VuexModule from "@/views/VuexModule.vue"
import VuexUse1 from "@/views/VuexUse1.vue"
import VuexUse2DealForm from "@/views/VuexUse2DealForm.vue"

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
    },
    {
        path: '/VuexAction',
        name: 'VuexAction',
        component: VuexAction
    },
    {
        path: '/VuexModule',
        name: 'VuexModule',
        component: VuexModule
    },
    {
        path: '/VuexUse1',
        name: 'VuexUse1',
        component: VuexUse1
    },
    {
        path: '/VuexUse2DealForm',
        name: 'VuexUse2DealForm',
        component: VuexUse2DealForm
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
