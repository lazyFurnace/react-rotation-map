/**
 * webpack 公共配置获取
 * 根据不同的环境变量配置
 * [lib | build | dev]
 */
const path = require("path");
const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const defaultCongif = require('./defaultConfig');

/**
 * 获取 webpack 入口文件
 * @param {String} env 环境变量
 */
function entry(env) {
    const entryConfig = {
        lib: path.join(__dirname, "../src/lib.js"),
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
        lib: {
            path: path.join(__dirname, '../lib'),
            filename: 'index.js',
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
        lib: [
            new CleanWebpackPlugin(['lib'], { root: rootPath })
        ],
        build: [
            ...defaultCongif.plugins,
            new UglifyJsPlugin(),
            new CleanWebpackPlugin(['dist'], { root: rootPath })
        ],
        dev: [
            ...defaultCongif.plugins
        ]
    }
    return pluginsConfig[env];
}

/**
 * 构建 package 代码所依赖配置
 * webpack-node-externals - 排除 node_modules 内代码
 */
function externals() {
    return [nodeExternals()]
}


module.exports = { entry, output, plugins, externals };
