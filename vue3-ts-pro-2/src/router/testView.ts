import { RouteRecordRaw } from "vue-router"
import TestView1 from '../views/TestView/TestView1.vue'
import HttpTest from '../views/TestView/HttpTest.vue'

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
  }
];

export default TestViewRouter;
