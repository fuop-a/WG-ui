const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 定义启动端口
  devServer: {
    port: 9000,
    proxy: {
      '/api': {
          target: 'http://localhost:8081',
          // 允许跨域
          changeOrigin: true,
          ws: true,
          pathRewrite: {
              '/api': ''
          }
      }
  }
  }
})
