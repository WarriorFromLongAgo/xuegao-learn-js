import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 用户定义
import axios from 'axios'

App.config.globalProperties.$http = axios

createApp(App).use(router).mount('#app')
