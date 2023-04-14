<!--
 * @Author: “fuop-a” 3214847461@qq.com
 * @Date: 2023-04-12 19:35:27
 * @LastEditors: “fuop-a” 3214847461@qq.com
 * @LastEditTime: 2023-04-14 15:04:13
 * @FilePath: \ui\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* 解决子组件中 height: 100% 不生效问题 */
html,body,#app{
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
</style>
