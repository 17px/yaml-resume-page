module.exports = {
  baseUrl: './',
  outputDir: 'dist',
  configureWebpack: {
    externals: {
      vue: 'Vue',
      axios: 'axios'
    }
  }
};
