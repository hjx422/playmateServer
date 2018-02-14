/**
 * Created by hjx on 9/30/2017.
 */
const path = require('path')

module.exports = [{
    name: 'koa server',
    devtool: 'cheap-source-map',
    target: 'node',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src'),
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}]