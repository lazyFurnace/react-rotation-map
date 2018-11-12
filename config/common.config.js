const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

function getEntry(env) {
    switch (env) {
        case "public":
            return path.join(__dirname, "../src/public.js");
        case "dev":
            return ['webpack/hot/only-dev-server', path.join(__dirname, '../src/index.jsx')];
        case "build":
            return path.join(__dirname, '../src/index.jsx');
        default:
            throw new Error("环境变量错误");
    }
}

function getOutput(env) {
    switch (env) {
        case "public":
            return {
                path: path.join(__dirname, '../public'),
                filename: 'public.js',
                libraryTarget: 'commonjs2'
            };
        case "dev":
        case "build":
            return {
                path: path.join(__dirname, '../dist'),
                filename: 'index.[hash:8].js',
                chunkFilename: '[name].[chunkhash:8].js',
                libraryTarget: 'umd'
            };
        default:
            throw new Error("环境变量错误");
    }
}

function getModule(env) {

    const defaultRules = [{
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
        exclude: /node_modules/
    }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    }, {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{ loader: 'url-loader' }]
    }, {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
    }];

    switch (env) {
        case "public":
            defaultRules.push({
                test: /\.js|jsx$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            })
            break;
        case "dev":
        case "build":
            defaultRules.push({
                test: /\.js|jsx$/,
                use: ['babel-loader', 'eslint-loader'],
                exclude: /node_modules/
            })
            break;
        default:
            throw new Error("环境变量错误");
    }
}

function getPlugins(env) {
    if (env === "public") {
        return [new CleanWebpackPlugin(['public'])];
    }

    const defaultPlugins = [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '../src/index.html')
        }),
        new StyleLintPlugin({
            context: "src",
            configFile: path.resolve(__dirname, '../stylelint.config.js'),
            files: '**/*.less',
            failOnError: false,
            quiet: true,
            syntax: 'less'
        })
    ]
    const buildPlugins = [new CleanWebpackPlugin(['dist'])];

    if (env === "dev") {
        return defaultPlugins;
    } else if (env === "build") {
        return [...defaultPlugins, ...buildPlugins];
    } else {
        throw new Error("环境变量错误");
    }
}