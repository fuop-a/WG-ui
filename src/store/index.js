/*
 * @Author: “fuop-a” 3214847461@qq.com
 * @Date: 2023-04-12 19:35:27
 * @LastEditors: “fuop-a” 3214847461@qq.com
 * @LastEditTime: 2023-04-14 17:03:26
 * @FilePath: \ui\src\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user'
import common from '@/store/modules/common'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
      user,
      common
  }
})