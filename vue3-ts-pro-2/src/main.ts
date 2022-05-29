import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import axios from "axios";

// createApp(App).use(router).mount('#app')
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
// app.config.globalProperties.$http = axios;

