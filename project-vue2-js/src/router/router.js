import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../view/Home.vue'

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routers: [
        {
            path: '/',
            name: 'home',
            component: Home,
            // 路由独享钩子函数
            // beforeEnter: (to, from, next) => {
            // }
        }
    ]
});

// router.beforeEach((to, from, next) => {
//     //do something
//     next();
// });
router.beforeEach(() => {
    console.log('beforeEach');
});


// router.afterEach((to, from, next) => {
//     console.log(to.path);
// });
router.afterEach((to) => {
    console.log(to.path);
});

//   作者：城南
//   链接：https://juejin.cn/post/6844903480805556231
//   来源：稀土掘金
//   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


export default router


// 每个钩子方法接收三个参数：

// to: Route: 即将要进入的目标 路由对象
// from: Route: 当前导航正要离开的路由
// next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

// next():  进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed （确认的）。

// next(false): 中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么     URL 地址会重置到 from 路由对应的地址。

// next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。

// 确保要调用 next 方法，否则钩子就不会被 resolved。