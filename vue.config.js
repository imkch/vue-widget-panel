module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-waterfall-render/dist/' : '/',
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '基于vue.js实现内容自适应的部件面板组件'
    }
  }
}
