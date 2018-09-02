const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
// css样式规范检测工具
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
    // webpack/hot/only-dev-server 热加载配置，不要使用插件 webpack.HotModuleReplacementPlugin
    entry: [
        'webpack/hot/only-dev-server',
        path.join(__dirname, './src/index.jsx')
    ],
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'index.js',
        chunkFilename: '[name].js',
        libraryTarget: 'umd'
    },
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
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                }]
             }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, './src/index.html')
        }),
        // css样式规范检测工具
        new StyleLintPlugin({
            context: "src",
            configFile: path.resolve(__dirname, './stylelint.config.js'),
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
    resolve: {
        extensions: ['.js','.jsx']
    },
    devServer: {
        // 启动路径
        contentBase: path.join(__dirname, 'dist'),
        // 域名
        host:'localhost',
        // 端口号
        port: 8018,
        hot: true
    },
    mode: 'development',
    devtool: ''
}