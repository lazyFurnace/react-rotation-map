const path = require('path');
const { compilerOptions } = require('../jsconfig.json');

/**
 * 根据 jsconfig.json 配置文件获取 webpack alias 配置
 * $ - 供 js、jsx 使用
 * @ - 供 css、less 使用
 * @param {object} paths 
 */
const getAliasPath = paths => {
    const alias = {};
    Object.keys(paths).forEach(item => {
        alias[removePath(item)] = path.join(__dirname, `../${removePath(paths[item][0])}`);
    })
    return alias;
}

/**
 * 去除 alias 不需要的路径
 * @param {string} url 
 */
const removePath = url => url.replace('/*', '');

module.exports = {
    alias: getAliasPath(compilerOptions.paths)
}
