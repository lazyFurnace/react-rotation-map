const { getWebpackConfig } = require('./config');

module.exports = getWebpackConfig(process.env.NODE_ENV);
