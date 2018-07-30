const webpack = require('webpack')
const util = require('./util')
const resolve = util.resolve
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: {
        main: './index.js'
    },
    output: {
        path: resolve('/dist'),
        publicPath: "/dist/",
        filename: 'fetch-polyfill.js',
        library: "fetch-polyfill",
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            sourceMap: true
                        },
                    }
                ],
                exclude: /node_modules/,
            }
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new UglifyJsPlugin({
            parallel: true,
            sourceMap: true,
        })
    ]
};
