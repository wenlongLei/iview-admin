/* eslint-disable */
const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

/*
 * 项目部署基础
 * 默认情况下，我们假设你的应用将被部署在域的根目录下,
 * 例如：https://www.my-app.com/
 * 默认：'/'
 * 如果您的应用程序部署在子路径中，则需要在这指定子路径
 * 例如：https://www.foobar.com/my-app/
 * 需要将它改为'/my-app/'
 * iview-admin线上演示打包路径： https://file.iviewui.com/admin-dist/
 */
/* eslint-disable */
const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/'
  : '/'

module.exports = {
  /*
   * Project deployment base
   * By default we assume your app will be deployed at the root of a domain,
   * e.g. https://www.my-app.com/
   * If your app is deployed at a sub-path, you will need to specify that
   * sub-path here. For /example, if your app is deployed at
   * https://www.foobar.com/my-app/
   * then change this to '/my-app/'
   */
  publicPath: BASE_URL,
  /*
   * tweak internal webpack configuration.
   * see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
   * 如果你不需要使用eslint，把lintOnSave设为false即可
   */
  pages: {
    index: {
      entry: 'example/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  lintOnSave: true,
  /*
   * css: {
   * loaderOptions: {
   * // 给 sass-loader 传递选项
   * sass: {
   * // @/ 是 src/ 的别名
   * // 所以这里假设你有 `src/variables.scss` 这个文件
   * data: `@import "~@/variables.scss";`
   * }
   * }
   * },
   */
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('example'))
      // key,value自行定义，比如.set('@@', resolve('/example/packages'))
      .set('_c', resolve('packages'))

    /*
     * Object.keys(pages).forEach(page => {
     * config.plugins.delete(`preload-${page}`)
     * config.plugins.delete(`prefetch-${page}`)
     * })
     */
  },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false
  /*
   * 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
   * devServer: {
   *   proxy: 'localhost:3000'
   * }
   */
}
