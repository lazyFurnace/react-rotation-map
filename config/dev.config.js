const path = require('path');

function getOptimization(env) {
    return {
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
    }
}

function getDevServer(env) {
    return {
        contentBase: path.join(__dirname, '../dist'),
        host: 'localhost',
        port: 8018,
        hot: true
    }
}

module.exports = { getOptimization, getDevServer };
