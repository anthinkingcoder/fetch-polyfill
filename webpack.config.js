const webpack = require('webpack')
const util = require('./util')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const resolve = util.resolve
module.exports = {
  mode:'production',
  entry: {
    main: './global-env.js'
  },
  output: {
    path: resolve('/dist'),
    publicPath: "/dist/",
    filename: 'fetch-polyfill.js',
    library: "fetchp",
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              sourceMap: false
            },
          }
        ],
        exclude: /node_modules/,
      }
    ],
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: false,
    })
  ]
};
