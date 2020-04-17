import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)//全局使用ElementUI

import "./common/stylus/icon.styl"

import $api from './store/index'
Vue.prototype.$api = $api

import axios from 'axios'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// axios({
//   url: 'http://httpbin.org/', // httpbin.org/   // 默认是Get请求
//   method: 'get',
//   // 专门针对get请求的参数拼接
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

