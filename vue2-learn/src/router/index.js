import VueRouter from "vue-router";
import Vue from "vue";
import xuegaoIndex from "../components/xuegaoIndex.vue";
import xuegaoA from "../components/xuegaoA.vue";
import xuegaoLogin from "../view/xuegaoLogin.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: "/",
            component: xuegaoIndex
        },
        {
            path: "/a",
            component: xuegaoA
        },
        {
            path: "/login",
            component: xuegaoLogin
        },
    ]
})

export default router;