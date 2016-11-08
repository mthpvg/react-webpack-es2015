var path = require('path');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../app/main.js')
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ],
  }
};
