const path = require('path') // 引入path模块
function resolve(dir) {
  return path.join(__dirname, dir) // path.join(__dirname)设置绝对路径
}
module.exports = {
  css: {
    extract: false,
    sourceMap: false
  },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  devServer: {
    proxy: {
      'cds/': {
        target: 'http://192.168.16.23',
        changeOrigin: true // 是否跨域
        // pathRewrite: {
        //   '^/api': '/'
        //   // 将所有匹配到的 /api 替换为 /
        //   //比如我们请求了  http://localhost:8080/api/getList, 那么实际请求的是  http://133.30/getList
        // }
      }
    }
  },
  // productionSourceMap: false, // 关闭文件映射，避免生产环境F12看到源码
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('components', resolve('./src/components'))
      .set('assets', resolve('./src/assets'))
    // set第一个参数：设置的别名，第二个参数：设置的路径
  }
}
