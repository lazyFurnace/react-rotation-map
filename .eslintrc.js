module.exports = {
    "parser": "babel-eslint",
    // 指定校验的 ECMAScript 的版本及特性
    "parserOptions": {
        "ecmaVersion": 7,           // ECMAScript 版本，7 为 ES7
        "sourceType": "module",     // 默认 script，如果代码是 ECMAScript 模块，设置为 module
        "ecmaFeatures": {           // 使用额外的语言特性
            // 启用JSX
            "jsx": true
        }
    },
    // 当访问未定义的变量时，no-undef 规则将发出警告
    // 指定脚本的运行环境。每种环境都有一组特定的预定义全局变量
    "env": {
        "es6": true,
        "node": true,
        "browser": true,
    },
    // 当访问未定义的变量时，no-undef 规则将发出警告
    // 脚本在执行期间访问的额外的全局变量
    "globals": {
        "document": true,
        "navigator": true,
        "window": true,
        "node": true
    },
    // 使用第三方 airbnb 开发配置合集
    "extends": "airbnb",
    // eslint-import-resolver-webpack 解决 alias 使用问题
    "settings": {
        "import/resolver": {
            "webpack": {
                "config": "./config/defaultConfig.js"
            }
        }
    },
    // eslint-config-airbnb 包括了以下3个插件
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    // 定义自己的规则
    "rules": {
        "linebreak-style": ["off", "windows"],      // 换行符设置
        "comma-dangle": ["error", "never"],         // 要求或禁止末尾逗号：不允许逗号
        "indent": ["error", 4],                     // JavaScript 代码强制使用一致的缩进：4格缩进
        "react/jsx-indent": ["error", 4],           // react jsx-indent 4缩进
        "react/jsx-indent-props": ["error", 4],     // react jsx-indent-props 4缩进
    }
};