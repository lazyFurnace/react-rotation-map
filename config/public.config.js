const nodeExternals = require('webpack-node-externals');

function getExternals(env) {
    return [nodeExternals()]
}

module.exports = { getExternals };
