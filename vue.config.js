// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src'),
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
}
