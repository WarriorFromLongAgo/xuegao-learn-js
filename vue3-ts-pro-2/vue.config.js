// const { defineConfig } = require('@vue/cli-service')
const { defineConfig } = require('@vue/cli-service')

const apiUrl = process.env.VUE_APP_API_HOST;

// module.exports = defineConfig({
module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    port: 9000,
    host: '127.0.0.1',
    https: false,
    open: true,
    //反向代理配置，注意rewrite写法，开始没看文档在这里踩了坑
    proxy: {
      '/api': {
        // 接口域名（你请求的第三方接口）
        target: 'http://localhost:8000',
        // 是否跨域 （虚拟的站点需要更管origin）
        changeOrigin: true,
        // 路径重置
        pathRewrite: { '^/api': '' }
      }
    }
  },
})