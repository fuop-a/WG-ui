/*
 * @Author: “fuop-a” 3214847461@qq.com
 * @Date: 2023-04-12 19:35:27
 * @LastEditors: “fuop-a” 3214847461@qq.com
 * @LastEditTime: 2023-04-14 21:20:02
 * @FilePath: \ui\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'; 
import axios from 'axios'
import http from '@/http/http.js'
import i18n from '@/i18n/index.js'
import locale from 'element-ui/lib/locale/lang/en'
Vue.config.productionTip = false
Vue.use(ElementUI,{ locale }) 	// 注用ElementUI组件库
Vue.prototype.axios = axios // 使用axios实例替代default组件的request实例
Vue.prototype.$http=http
require('@/mock')
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
