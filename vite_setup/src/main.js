import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
const app = createApp(App);
app.use(router)
import 'virtual:svg-icons-register' // 引入注册脚本
import SvgIcon from './components/SvgIcon/index.vue' // 引入组件
app.component('svg-icon', SvgIcon)

import axios from './http/index'
app.config.globalProperties.$api = axios;
import { createPinia } from 'pinia'
// import store from '@/store/aa.js'

import piniaPersist from 'pinia-plugin-persist'
const pinia = createPinia()
pinia.use(piniaPersist)
app.use(pinia)
app.use(axios)


import focusDirective  from '@/http/index2.js'
// Vue.component(SvgIcon.name, SvgIcon)

app.use(focusDirective).mount('#app')
