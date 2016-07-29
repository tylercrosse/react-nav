var bourbon = require('node-bourbon').includePaths;

const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + "/src/index.html",
  filename: "index.html",
  inject: "body"
})

module.exports = {
  entry: [
    "./src/index.js"
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass?includePaths[]=" + bourbon]
      },
      {
        test: /\.modernizrrc$/,
        loader: "modernizr"
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig
  ],
  resolve: {
    alias: {
      modernizr$: "../.modernizrrc"
    }
  }
}