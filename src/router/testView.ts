import { RouteRecordRaw } from "vue-router"
import TestView1 from '../views/TestView/TestView1.vue'
import HttpTest from '../views/TestView/HttpTest.vue'
import RouterTest1 from '../views/TestView/RouterTest1.vue'
import RouterTest2 from '../views/TestView/RouterTest2.vue'

// 自定义指令模块
const TestViewRouter: Array<RouteRecordRaw> = [
  {
    path: "/testView1",
    component: TestView1,
    meta: {
      title: "自定义指令"
    }
  },
  {
    path: "/HttpTest",
    component: HttpTest,
    meta: {
      title: "自定义指令"
    }
  },
  {
    path: "/RouterTest1",
    component: RouterTest1,
    meta: {
      title: "RouterTest1"
    }
  }
  ,
  {
    path: "/RouterTest2",
    component: RouterTest2,
    meta: {
      title: "RouterTest2"
    }
  }
];

export default TestViewRouter;
