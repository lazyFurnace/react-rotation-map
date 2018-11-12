function getPropertyConfig() {

}

function getWebpackConfig(env) {
    const common = ["entry", "output", "module", "plugins", "resolve", "mode", "devtool"];
    const dev = ["optimization", "devServer"];
    const public = ["externals"];
    switch (env) {
        case "dev":
        case "build":
            return [...common, ...dev];
        case "public":
            return [...common, ...public];
    }
}

module.exports = { getPropertyConfig, getWebpackConfig};
