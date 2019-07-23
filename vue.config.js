const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
// iview-admin线上演示打包路径： https://file.iviewui.com/admin-dist/
const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/'
  : '/'

module.exports = {
  // Project deployment base
  // By default we assume your app will be deployed at the root of a domain,
  // e.g. https://www.my-app.com/
  // If your app is deployed at a sub-path, you will need to specify that
  // sub-path here. For example, if your app is deployed at
  // https://www.foobar.com/my-app/
  // then change this to '/my-app/'
  publicPath: BASE_URL,
  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  pages: {
    index: {
      entry: 'example/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  lintOnSave: true,
  /* css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        data: `@import "~@/variables.scss";`
      }
    }
  }, */
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('example')) // key,value自行定义，比如.set('@@', resolve('example/packages'))
      .set('_c', resolve('packages'))
    // config.module
    //   .rule('js')
    //   .include
    //   .add(['/packages', 'example'])
    //   .end()
    //   .use('babel')
    //   .loader('babel-loader')
    //   .tap(options => {
    //     // 修改它的选项...
    //     return options
    //   })
    // config.module
    //   .rule('vue')
    //   .include
    //   .add(['/packages', 'example'])
    //   .end()
    //   .use('cache-loader')
    //   .loader('cache-loader')
    //   .tap(options => {
    //     // 修改它的选项...
    //     return options
    //   })
    // config.module
    //   .rule('vue')
    //   .include
    //   .add(['/packages', 'example'])
    //   .end()
    //   .use('vue-loader')
    //   .loader('vue-loader')
    //   .tap(options => {
    //     // 修改它的选项...
    //     return options
    //   })
    config.module.rule('vue').include.add(['/packages', 'example']).end().use('cache-loader').loader('cache-loader')
    config.module.rule('vue').include.add(['/packages', 'example']).end().use('vue-loader').loader('vue-loader')
    config.module.rule('images').include.add(['/packages', 'example']).end().use('url-loader').loader('url-loader')
    config.module.rule('svg').include.add(['/packages', 'example']).end().use('file-loader').loader('file-loader')
    config.module.rule('media').include.add(['/packages', 'example']).end().use('url-loader').loader('url-loader')
    config.module.rule('fonts').include.add(['/packages', 'example']).end().use('url-loader').loader('url-loader')
    config.module.rule('pug').oneOf('pug-vue').include.add(['/packages', 'example']).end().use('pug-plain-loader').loader('pug-plain-loader')
    config.module.rule('pug').oneOf('pug-template').include.add(['/packages', 'example']).end().use('raw').loader('raw')
    config.module.rule('pug').oneOf('pug-template').include.add(['/packages', 'example']).end().use('pug-plain').loader('pug-plain')
    config.module.rule('css').oneOf('vue-modules').include.add(['/packages', 'example']).end().use('vue-style-loader').loader('vue-style-loader')
    config.module.rule('css').oneOf('vue-modules').include.add(['/packages', 'example']).end().use('css-loader').loader('css-loader')
    config.module.rule('css').oneOf('vue-modules').include.add(['/packages', 'example']).end().use('postcss-loader').loader('postcss-loader')
    config.module.rule('css').oneOf('vue').include.add(['/packages', 'example']).end().use('vue-style-loader').loader('vue-style-loader')
    config.module.rule('css').oneOf('vue').include.add(['/packages', 'example']).end().use('css-loader').loader('css-loader')
    config.module.rule('css').oneOf('vue').include.add(['/packages', 'example']).end().use('postcss-loader').loader('postcss-loader')
    config.module.rule('css').oneOf('normal-modules').include.add(['/packages', 'example']).end().use('vue-style-loader').loader('vue-style-loader')
    config.module.rule('css').oneOf('normal-modules').include.add(['/packages', 'example']).end().use('css-loader').loader('css-loader')
    config.module.rule('css').oneOf('normal-modules').include.add(['/packages', 'example']).end().use('postcss-loader')
    config.module.rule('css').oneOf('normal').include.add(['/packages', 'example']).end().use('vue-style-loader')
    config.module.rule('css').oneOf('normal').include.add(['/packages', 'example']).end().use('css-loader')
    config.module.rule('css').oneOf('normal').include.add(['/packages', 'example']).end().use('postcss-loader')
    config.module.rule('postcss').oneOf('vue-modules').include.add(['/packages', 'example']).end().use('vue-style-loader')
    config.module.rule('postcss').oneOf('vue-modules').include.add(['/packages', 'example']).end().use('css-loader')
    config.module.rule('postcss').oneOf('vue-modules').include.add(['/packages', 'example']).end().use('postcss-loader')
    config.module.rule('postcss').oneOf('vue').include.add(['/packages', 'example']).end().use('vue-style-loader')
    config.module.rule('postcss').oneOf('vue').include.add(['/packages', 'example']).end().use('css-loader')
    config.module.rule('postcss').oneOf('vue').include.add(['/packages', 'example']).end().use('postcss-loader')
    config.module.rule('postcss').oneOf('normal-modules').include.add(['/packages', 'example']).end().use('vue-style-loader')
    config.module.rule('postcss').oneOf('normal-modules').include.add(['/packages', 'example']).end().use('css-loader')
    config.module.rule('postcss').oneOf('normal-modules').include.add(['/packages', 'example']).end().use('postcss-loader')
    config.module.rule('postcss').oneOf('normal').include.add(['/packages', 'example']).end().use('vue-style-loader')
    config.module.rule('postcss').oneOf('normal').include.add(['/packages', 'example']).end().use('css-loader')
    config.module.rule('postcss').oneOf('normal').include.add(['/packages', 'example']).end().use('postcss-loader')
    config.module.rule('scss').oneOf('vue-modules').include.add(['/packages', 'example']).end().use('vue-style-loader')
    config.module.rule('scss').oneOf('vue-modules').include.add(['/packages', 'example']).end().use('css-loader')
    config.module.rule('scss').oneOf('vue-modules').include.add(['/packages', 'example']).end().use('postcss-loader')
    config.module.rule('scss').oneOf('vue-modules').include.add(['/packages', 'example']).end().use('sass-loader')
    config.module.rule('scss').oneOf('vue').include.add(['/packages', 'example']).end().use('vue-style-loader')
    config.module.rule('scss').oneOf('vue').include.add(['/packages', 'example']).end().use('css-loader')
    config.module.rule('scss').oneOf('vue').include.add(['/packages', 'example']).end().use('postcss-loader')
    config.module.rule('scss').oneOf('vue').include.add(['/packages', 'example']).end().use('sass-loader')
    config.module.rule('scss').oneOf('normal-modules').include.add(['/packages', 'example']).end().use('vue-style-loader')
    config.module.rule('scss').oneOf('normal-modules').include.add(['/packages', 'example']).end().use('css-loader')
    config.module.rule('scss').oneOf('normal-modules').include.add(['/packages', 'example']).end().use('postcss-loader')
    config.module.rule('scss').oneOf('normal-modules').include.add(['/packages', 'example']).end().use('sass-loader')
    config.module.rule('scss').oneOf('normal').include.add(['/packages', 'example']).end().use('vue-style-loader')
    config.module.rule('scss').oneOf('normal').include.add(['/packages', 'example']).end().use('css-loader')
    config.module.rule('scss').oneOf('normal').include.add(['/packages', 'example']).end().use('postcss-loader')
    config.module.rule('scss').oneOf('normal').include.add(['/packages', 'example']).end().use('sass-loader')
    config.module.rule('sass').oneOf('vue-modules').include.add(['/packages', 'example']).end().use('vue-style-loader')
    config.module.rule('sass').oneOf('vue-modules').include.add(['/packages', 'example']).end().use('css-loader')
    config.module.rule('sass').oneOf('vue-modules').include.add(['/packages', 'example']).end().use('postcss-loader')
    config.module.rule('sass').oneOf('vue-modules').include.add(['/packages', 'example']).end().use('sass-loader')
    config.module.rule('sass').oneOf('vue').include.add(['/packages', 'example']).end().use('vue-style-loader')
    config.module.rule('sass').oneOf('vue').include.add(['/packages', 'example']).end().use('css-loader')
    config.module.rule('sass').oneOf('vue').include.add(['/packages', 'example']).end().use('postcss-loader')
    config.module.rule('sass').oneOf('vue').include.add(['/packages', 'example']).end().use('sass-loader')
    config.module.rule('sass').oneOf('normal-modules').include.add(['/packages', 'example']).end().use('vue-style-loader')
    config.module.rule('sass').oneOf('normal-modules').include.add(['/packages', 'example']).end().use('css-loader')
    config.module.rule('sass').oneOf('normal-modules').include.add(['/packages', 'example']).end().use('postcss-loader')
    config.module.rule('sass').oneOf('normal-modules').include.add(['/packages', 'example']).end().use('sass-loader')
    config.module.rule('sass').oneOf('normal').include.add(['/packages', 'example']).end().use('vue-style-loader')
    config.module.rule('sass').oneOf('normal').include.add(['/packages', 'example']).end().use('css-loader')
    config.module.rule('sass').oneOf('normal').include.add(['/packages', 'example']).end().use('postcss-loader')
    config.module.rule('sass').oneOf('normal').include.add(['/packages', 'example']).end().use('sass-loader')
    config.module.rule('less').oneOf('vue-modules').include.add(['/packages', 'example']).end().use('vue-style-loader')
    config.module.rule('less').oneOf('vue-modules').include.add(['/packages', 'example']).end().use('css-loader')
    config.module.rule('less').oneOf('vue-modules').include.add(['/packages', 'example']).end().use('postcss-loader')
    config.module.rule('less').oneOf('vue-modules').include.add(['/packages', 'example']).end().use('less-loader')
    config.module.rule('less').oneOf('vue').include.add(['/packages', 'example']).end().use('vue-style-loader')
    config.module.rule('less').oneOf('vue').include.add(['/packages', 'example']).end().use('css-loader')
    config.module.rule('less').oneOf('vue').include.add(['/packages', 'example']).end().use('postcss-loader')
    config.module.rule('less').oneOf('vue').include.add(['/packages', 'example']).end().use('less-loader')
    config.module.rule('less').oneOf('normal-modules').include.add(['/packages', 'example']).end().use('vue-style-loader')
    config.module.rule('less').oneOf('normal-modules').include.add(['/packages', 'example']).end().use('css-loader')
    config.module.rule('less').oneOf('normal-modules').include.add(['/packages', 'example']).end().use('postcss-loader')
    config.module.rule('less').oneOf('normal-modules').include.add(['/packages', 'example']).end().use('less-loader')
    config.module.rule('less').oneOf('normal').include.add(['/packages', 'example']).end().use('vue-style-loader')
    config.module.rule('less').oneOf('normal').include.add(['/packages', 'example']).end().use('css-loader')
    config.module.rule('less').oneOf('normal').include.add(['/packages', 'example']).end().use('postcss-loader')
    config.module.rule('less').oneOf('normal').include.add(['/packages', 'example']).end().use('less-loader')
    config.module.rule('stylus').oneOf('vue-modules').include.add(['/packages', 'example']).end().use('vue-style-loader')
    config.module.rule('stylus').oneOf('vue-modules').include.add(['/packages', 'example']).end().use('css-loader')
    config.module.rule('stylus').oneOf('vue-modules').include.add(['/packages', 'example']).end().use('postcss-loader')
    config.module.rule('stylus').oneOf('vue-modules').include.add(['/packages', 'example']).end().use('stylus-loader')
    config.module.rule('stylus').oneOf('vue').include.add(['/packages', 'example']).end().use('vue-style-loader')
    config.module.rule('stylus').oneOf('vue').include.add(['/packages', 'example']).end().use('css-loader')
    config.module.rule('stylus').oneOf('vue').include.add(['/packages', 'example']).end().use('postcss-loader')
    config.module.rule('stylus').oneOf('vue').include.add(['/packages', 'example']).end().use('stylus-loader')
    config.module.rule('stylus').oneOf('normal-modules').include.add(['/packages', 'example']).end().use('vue-style-loader')
    config.module.rule('stylus').oneOf('normal-modules').include.add(['/packages', 'example']).end().use('css-loader')
    config.module.rule('stylus').oneOf('normal-modules').include.add(['/packages', 'example']).end().use('postcss-loader')
    config.module.rule('stylus').oneOf('normal-modules').include.add(['/packages', 'example']).end().use('stylus-loader')
    config.module.rule('stylus').oneOf('normal').include.add(['/packages', 'example']).end().use('vue-style-loader')
    config.module.rule('stylus').oneOf('normal').include.add(['/packages', 'example']).end().use('css-loader')
    config.module.rule('stylus').oneOf('normal').include.add(['/packages', 'example']).end().use('postcss-loader')
    config.module.rule('stylus').oneOf('normal').include.add(['/packages', 'example']).end().use('stylus-loader')
    config.module.rule('js').include.add(['/packages', 'example']).end().use('cache-loader')
    config.module.rule('js').include.add(['/packages', 'example']).end().use('babel-loader')
    config.module.rule('eslint').include.add(['/packages', 'example']).end().use('eslint-loader')
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  // devServer: {
  //   proxy: 'localhost:3000'
  // }
}
