/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2025-05-15 10:14:10
 */
import { createApp } from 'vue'
import App from './App.vue'

//引入路由
import router from './router'

const app = createApp(App)

app.use(router).mount('#app')
