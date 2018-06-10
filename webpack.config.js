const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
//css样式规范检测工具
const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, './src/index.jsx'),
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
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, './src/index.html')
        }),
        //css样式规范检测工具
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
        contentBase: path.join(__dirname, 'dist'),  //启动路径
        host:'localhost',  //域名
        port: 8018,  //端口号
    },
    mode: 'development',
    devtool: ''
}