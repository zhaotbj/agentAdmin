const path = require("path");
const webpack = require('webpack');
const resolve = (dir) => {
  return path.join(__dirname, dir);
};
module.exports = {
  publicPath: "./", // hash是./  histroy 是 /  // 根域上下文目录
  outputDir: "dist", // 构建输出的目录
  // assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
  indexPath: "index.html",
  css: {
    // 配置css模块 解决iview 引入样式的错误
    loaderOptions: {
      // 向预处理器 Loader 传递配置选项
      less: {
        // 配置less（其他样式解析用法一致）
        javascriptEnabled: true, // 设置为true
      },
    },
  },
  // 路径相关
  chainWebpack: (config) => {
    config.resolve.alias
      // .set('@', resolve('src'))  // key,value自行定义，比如.set('@@', resolve('src/components'))
      // .set('_c', resolve('src/components'))
      .set("~", resolve(""));
  },
  devServer: {
    open: false,
    host: "0.0.0.0",
    port: 8080,
    overlay: {
      warnings: false,
      errors: false,
    },
    //     proxy: { // 配置跨域
    //       '/api': {
    // 　　　　　// 要访问的跨域的api的域名
    //         target: 'http://192.168.1.202:9900',
    //         changOrigin: true,
    //         pathRewrite: {
    //             '^/api': ''
    //         }
    //       }
    //     }
  },
  lintOnSave: false,
};
