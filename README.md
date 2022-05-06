# xuegao-learn-js


安装vue

安装vue-cli
    npm install -g @vue/cli
安装vuex
    npm i vuex
安装 typescript
    vue add @vue/typescript
        ? Use class-style component syntax? Yes
        ts版本和js版本在引入的时候有很多不一样的地方

        ? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
        Babel 编译语法，ts解析成js

        ? Convert all .js files to .ts? Yes
        将js配置文件转成ts文件

        ? Allow .js files to be compiled? Yes
        js文件自动编译

        ? Skip type checking of all declaration files (recommended for apps)? Yes
        跳过所有声明文件的类型检查
package.json
    配置
    eslintConfig.rules = "no-unused-vars": 0

router
```java

index.ts

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MyHome from '../views/MyHome.vue'

const routes: Array<RouteRecordRaw> = [
    // const routes = [
    {
        path: '/',
        name: 'myHome',
        component: MyHome
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/LoginRegist.vue')
    }
    // ]
]

const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory(),
    routes
})

export default router

main.ts

import { createApp } from 'vue'
import App from './App.vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import router from './router'

const app = createApp(App)

// app.use(ElementPlus)
app.use(router)
app.mount('#app')

App.vue

  <router-view />

```

```
携带参数

import { createRouter, createWebHistory } from 'vue-router'
import UserPost from './views/UserPost.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/users/:username/posts/:postId', component: UserPost }],
})

<template>
  <div>
    User {{ $route.params.username }} with post {{ $route.params.postId }}
  </div>
</template>


```

捕获所有路由或 404 Not found 路由



