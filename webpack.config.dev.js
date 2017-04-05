/* eslint-disable import/no-extraneous-dependencies */

var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'httpdocs/wp-content/themes/listingslab/listingslab-react'),
    filename: 'listingslab.bundle.js?version=5.2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }
};
