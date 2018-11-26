/**
 * webpack 公共配置获取
 * 根据不同的环境变量配置
 * [public | build | dev]
 */
const path = require("path");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const defaultCongif = require('./default');

/**
 * 获取 webpack 入口文件
 * @param {String} env 环境变量
 */
function entry(env) {
    const entryConfig = {
        public: path.join(__dirname, "../src/public.js"),
        build: path.join(__dirname, '../src/index.jsx'),
        dev: [
            'webpack/hot/only-dev-server',
            path.join(__dirname, '../src/index.jsx')
        ]
    }
    return entryConfig[env];
}
/**
 * 获取 webpack 出口文件
 * @param {String} env 环境变量
 */
function output(env) {
    const outputConfig = {
        public: {
            path: path.join(__dirname, '../public'),
            filename: 'public.js',
            libraryTarget: 'commonjs2'
        },
        build: {
            path: path.join(__dirname, '../dist'),
            filename: 'index.[hash:8].js',
            chunkFilename: '[name].[chunkhash:8].js',
            libraryTarget: 'umd'
        },
        dev: {
            path: path.join(__dirname, '../dist'),
            filename: 'index.[hash:8].js',
            chunkFilename: '[name].[chunkhash:8].js',
        }
    }
    return outputConfig[env];
}
/**
 * 获取 webpack 插件配置
 * @param {String} env 环境变量
 */
function plugins(env) {
    const rootPath = path.join(__dirname, "../");
    const pluginsConfig = {
        public: [
            new CleanWebpackPlugin(['public'], { root: rootPath })
        ],
        build: [
            ...defaultCongif.plugins,
            new CleanWebpackPlugin(['dist'], { root: rootPath })
        ],
        dev: [
            ...defaultCongif.plugins
        ]
    }
    return pluginsConfig[env];
}


module.exports = { entry, output, plugins };
