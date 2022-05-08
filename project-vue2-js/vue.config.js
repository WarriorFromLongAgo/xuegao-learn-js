const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    proxy: {
      '/vue': {
        target: 'http://localhost:10000',
        changeOrigin: true,
        pathRewrite: {
          '^/vue': ''
        }
      },
      '/upload': {
        target: 'http://localhost:11000',
        changeOrigin: true,
        pathRewrite: {
          '^/upload': ''
        }
      }
    }
  }
}