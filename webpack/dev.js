var OpenPackPlugin = require('openpack');

module.exports = {
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0'
  },
  plugins:[
    new OpenPackPlugin({
      lan: true
    })
  ]
};
