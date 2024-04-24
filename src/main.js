import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './router/permission'
// element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import '@/assets/styles/index.scss'
import '@/assets/css/common.css'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)

app.mount('#app')
