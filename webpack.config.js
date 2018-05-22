const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, './src/index.html')
        })
    ],
    mode: 'development',
    devtool: ''
}