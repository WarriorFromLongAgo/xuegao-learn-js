import {RouteRecordRaw} from "vue-router"
import index from '@/wechat1/page/WeChat1Index.vue';
import login from '@/wechat1/page/WeChat1Login.vue';
import chatIndex from '@/wechat1/page/WeChat1ChatIndex.vue';

const VueWeChatDemoRouter: Array<RouteRecordRaw> = [
    {
        path: "/wechat1/index",
        component: index,
        meta: {
            title: "wechat1 index title"
        }
    }, {
        path: "/wechat1/login",
        component: login,
        meta: {
            title: "wechat1 login title"
        }
    }, {
        path: "/wechat1/chatIndex",
        name: "wechat1ChatIndex",
        component: chatIndex,
        meta: {
            title: "wechat1 chatIndex title"
        }
    }
];

export default VueWeChatDemoRouter;
