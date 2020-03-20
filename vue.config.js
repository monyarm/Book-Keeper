// vue.config.js
var path = require('path');

module.exports = {
    lintOnSave: false,
    publicPath: process.env.NODE_ENV == 'production' ? __dirname + '/dist/' :
        '/Book-Keeper/',
    configureWebpack: {
        plugins: [
            
        ],

    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
}