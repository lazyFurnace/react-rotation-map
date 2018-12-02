/**
 * 本项目中 webpack 默认配置文件
 * @property {Object} module - 编译语法模块
 * @property {Array} plugins - 插件模块
 * @property {Array} optimization - webpack 优化模块
 * @property {Object} devServer - 开发服务器模块
 * @property {Object} resolve - 寻找模块配置
 * @property {Object} mode - 模式配置
 * @property {String} devtool - 文件生成方式配置模块
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const { alias } = require('./baseConfig');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                use: ['babel-loader', 'eslint-loader'],
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
                loader: 'url-loader'
            }, {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '../src/index.html')
        }),
        new StyleLintPlugin({
            context: "src",
            configFile: path.resolve(__dirname, '../stylelint.config.js'),
            files: '**/*.less',
            failOnError: false,
            quiet: true,
            syntax: 'less'
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'initial',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                    priority: 10,
                    enforce: true
                }
            }
        }
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        host: 'localhost',
        port: 8018,
        hot: true
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias
    },
    mode: 'development',
    devtool: 'inline-source-map'
};
