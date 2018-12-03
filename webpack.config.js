const { getWebpackConfig } = require('./config');

// 查看 webpack 错误、警告的调用栈
process.traceDeprecation = true

module.exports = getWebpackConfig(process.env.NODE_ENV);
