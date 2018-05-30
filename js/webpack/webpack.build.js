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
        path: path.resolve(__dirname, '../webapp')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                include: path.resolve(__dirname, 'src'),
            }
        ]
    }
}]