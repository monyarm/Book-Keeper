// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
module.exports = {
  publicPath: process.env.NODE_ENV == 'development' ? __dirname + '/dist/' :
      '/Book-Keeper/',
  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src'),
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
}
