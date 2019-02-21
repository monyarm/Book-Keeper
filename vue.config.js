// vue.config.js
var WebpackPreBuildPlugin = require('pre-build-webpack');
var path = require('path');
module.exports = {
    lintOnSave: false,
    publicPath: process.env.NODE_ENV == 'production' ?
        '/Book-Keeper/' : __dirname + '/dist/',
    configureWebpack: {
        plugins: [
            new WebpackPreBuildPlugin(function (stats) {
                const fs = require('fs');
                const glob = require('glob');

                let output = [];

                glob('books/**/*.json', (error, files) => {
                    files.forEach((filename) => {
                        const contents = JSON.parse(fs.readFileSync(filename, 'utf8')).books;
                        contents.map(x => {
                            x.source = filename.replace('books/', '').replace('.json', '')
                        })
                        output = output.concat(contents);
                    });
                    if (output != fs.readFileSync('books.json', 'utf8')) {
                        fs.writeFileSync('books.json', JSON.stringify(output));
                    }
                });
            })
        ],

    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
}