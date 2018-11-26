const defaultCongif = require('./default');
const { externals } = require('./public');
const { entry, output, plugins } = require('./common');

/**
 * 获取 webpack 各环境下的配置文件
 * @param {String} env 环境变量
 */
function getWebpackConfig(env) {
    /**
     * webpack 配置文件所需要的各个属性模块
     * @property common - 所有配置都需要的模块
     * @property dev - 开发环境所需模块
     * @property public - 构建开源代码所需模块
     */
    const props = {
        common: ["entry", "output", "module", "plugins", "resolve", "mode", "devtool"],
        build: ["optimization"],
        dev: ["devServer"],
        public: ["externals"]
    }
    /**
     * 根据各环境变量配置 webpack 所需模块
     * [public | build | dev]
     */
    const envConfig = {
        public: [...props.common, ...props.public],
        build: [...props.common, ...props.build],
        dev: [...props.common, ...props.dev]
    }

    // 拥有函数获取配置的模块
    const propsFun = { externals, entry, output, plugins };

    return envConfig[env].reduce((total, item) => {
        if (propsFun[item]) {
            return {
                ...total,
                [item]: propsFun[item](env)
            };
        } else {
            return {
                ...total,
                [item]: defaultCongif[item]
            }
        }
    }, {})
}

module.exports = { getWebpackConfig };
