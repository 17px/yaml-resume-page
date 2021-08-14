module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Choi 简历生成器'
      return args
    })
  },
  configureWebpack: {
    externals: {
      vue: 'Vue',
      axios: 'axios'
    }
  }
}
