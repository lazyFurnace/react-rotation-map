// 用于发布 npm 包的 webpack 配置文件
const path = require('path')
// 不打包 node_modules 里的文件
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: path.join(__dirname, './src/index.assembly.jsx'),
    output: {
        path: path.join(__dirname, './main'),
        filename: 'react-rotation-map.js',
        // 转化符合 commonjs 语法
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }, {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                use: [{ loader: 'url-loader' }]
            }, {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            }
        ]
    },
    externals: [nodeExternals()],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    mode: 'development',
    devtool: ''
}