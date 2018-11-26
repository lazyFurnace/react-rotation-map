/**
 * 构建开源代码所依赖配置
 * webpack-node-externals - 排除 node_modules 内代码
 */
const nodeExternals = require('webpack-node-externals');

function externals() {
    return [nodeExternals()]
}

module.exports = { externals };
