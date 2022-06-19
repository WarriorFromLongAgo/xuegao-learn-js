import {RouteRecordRaw} from "vue-router"
import VueWeChatDemo from '@/VueWeChatDemo/page/VueWeChatDemo.vue';

const VueWeChatDemoRouter: Array<RouteRecordRaw> = [
    {
        path: "/VueWeChatDemo",
        component: VueWeChatDemo,
        meta: {
            title: "VueWeChatDemo Title"
        }
    }
];

export default VueWeChatDemoRouter;
