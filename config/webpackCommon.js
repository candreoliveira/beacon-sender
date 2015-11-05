var path = require('path');
module.exports = {
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /(node_modules|bower_components)/ },
    ]
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  resolve: {
    root: path.join(__dirname, 'components'),
    extensions: ['', '.js']
  },
  devtool: 'eval'
};
