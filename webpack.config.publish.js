/**
 * 构建发布版程序
 * 只需要组件内容不要其他依赖包
 */
const path = require('path');
// 不打包 node_modules 里的文件
const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, './src/publish.jsx'),
    output: {
        path: path.join(__dirname, './publish'),
        filename: 'publish.js',
        // 转化符合 commonjs 语法
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [{
            test: /\.js|jsx$/,
            use: ['babel-loader'],
            exclude: /node_modules/
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            use: [{ loader: 'url-loader' }]
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
            loader: 'file-loader'
        }]
    },
    plugins: [new CleanWebpackPlugin(['publish'])],
    externals: [nodeExternals()],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    mode: 'development',
    devtool: 'inline-source-map'
}
