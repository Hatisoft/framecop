var path = require('path');
var webpack = require('webpack');

var config = {
  context: path.join(__dirname),
  entry: {
    index: ['./client/index.js', 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000']
  },
  output: {
    path: path.join(__dirname, 'www'),
    filename: '[name].js',
    publicPath: '/assets/'
  },
  plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
  ]
};
module.exports = config;
