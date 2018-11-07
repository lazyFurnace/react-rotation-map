const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let entry = path.join(__dirname, './src/index.jsx');
let plugins = [
    new HtmlWebpackPlugin({
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
];

/**
 * - 开发模式启动 webpack/hot/only-dev-server 热加载配置，不要使用插件 webpack.HotModuleReplacementPlugin
 * - 构建模式启动清理 dist 文件的插件
 */
if (process.env.NODE_ENV === 'dev') {
    entry = ['webpack/hot/only-dev-server', entry];
} else {
    plugins.push(new CleanWebpackPlugin(['dist']));
}

module.exports = {
    entry,
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'index.[hash:8].js',
        chunkFilename: '[name].[chunkhash:8].js',
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
    plugins,
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
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        host: 'localhost',
        port: 8018,
        hot: true
    },
    mode: 'development',
    devtool: 'inline-source-map'
}
