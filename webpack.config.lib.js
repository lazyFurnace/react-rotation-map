//用于发布 npm 包的 webpack 配置文件
const path = require('path')
//不打包 node_module s里的文件
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: path.join(__dirname, './src/index.lib.jsx'),
    output: {
        path: path.join(__dirname, './lib-webpack'),
        filename: 'index.lib.js',
        //转化符合 commonjs 语法
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                use: ['babel-loader', 'eslint-loader'],
                exclude: /node_modules/
            },{
                test: /\.less$/,
                use: ['style-loader', 'css-loader?modules&localIdentName=[local]-[hash:base64:5]', 'postcss-loader', 'less-loader'],
                exclude: /node_modules/
            },{
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                }]
             }
        ]
    },
    externals: [nodeExternals()],
    resolve: {
        extensions: ['.js','.jsx']
    },
    mode: 'development',
    devtool: ''
}