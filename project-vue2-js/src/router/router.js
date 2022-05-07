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
            // 路由配置里有个属性叫 meta，它的数据结构是一个对象。你可以放一些key-value进去，方便在钩子函数执行的时候用。
            // requiresAuth标志位 也是自己加的
            // 然后在 全局钩子函数 beforeEach中去校验目标页面是否需要登录。
            meta: { requiresAuth: true }
            // 路由独享钩子函数
            // beforeEnter: (to, from, next) => {
            // }
        }
    ],
    // 在利用vue-router去做跳转的时候，到了新页面如果对页面的滚动条位置有要求的话，可以利用下面这个方法。
    // 如果有描点，则滚动到描点。
    // scrollBehavior(to, from, savedPosition) {
    //     // return 期望滚动到哪个的位置
    // }
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