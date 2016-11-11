var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../app/main.js')
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    loaders: [
      {
        test: /\.pug$/,
        loader: 'pug'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../app/views/template.pug'),
      inject: 'body',
      chunks: ['app']
    })
  ]
};
