/*
 * @Author: “fuop-a” 3214847461@qq.com
 * @Date: 2023-04-12 19:35:27
 * @LastEditors: “fuop-a” 3214847461@qq.com
 * @LastEditTime: 2023-04-14 21:15:09
 * @FilePath: \ui\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import { getToken } from '@/http/auth.js'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/components/common/404.vue')
  },
  {
    // 用于用户退出后返回登录页面
    path: '/Login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/Home',
    name: 'Home', 
     component: HomeView,
     redirect: {
      name: 'HomePage'
  },children: [{
    path: '/Home/Page',
    name: 'HomePage',
    component: () => import('@/views/menu/HomePage.vue'),
    meta: {
      isRouter: true,
      isTab: true,
  }
  },
  {
    path: '/Home/Demo/Echarts',
    name: 'Echarts',
    component: () => import('@/views/menu/Echarts.vue'),
    meta: {
      isRouter: true,
      isTab: true,
  }
  },
  {
    path: '/Home/Demo/Ueditor',
    name: 'Ueditor',
    component: () => import('@/views/menu/Ueditor.vue'),
    meta: {
      isRouter: true,
      isTab: true,
  }
  },
  {
    path: '/Home/Demo/Taobao',
    name: 'Taobao',
    component:()=>import('@/views/menu/Taobao.vue'),
            meta: {
                isRouter: true,
                isTab: true,
                iframeUrl: 'https://www.taobao.com/'
            }
  }
  ]
  },
]

const router = new VueRouter({
   // routes 用于定义 路由跳转 规则
   routes,
   // mode 用于去除地址中的 #
   mode: 'history',
   // scrollBehavior 用于定义路由切换时，页面滚动。
   scrollBehavior: () => ({
       y: 0
   })
})

// 解决相同路径跳转报错
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject)
        return routerPush.call(this, location, onResolve, onReject)
    return routerPush.call(this, location).catch(error => error)
};
// 添加全局路由导航守卫
router.beforeEach((to, from, next) => {
  // 当开启导航守卫时，验证 token 是否存在。
  if (to.meta.isRouter) {
      // 获取 token 值
      let token = getToken()
      console.log(token)
      // token 不存在时，跳转到 登录页面
      if (!token || !/\S/.test(token)) {
          next({name: 'Login'})
      }
  }
  next()
})
export default router
