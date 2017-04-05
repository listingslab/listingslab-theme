/* Webpack config for Listingslab Theme Development Server */

const path = require('path');

module.exports = {

  entry: './src/index.jsx',

  output: {
    filename: 'listingslab-theme.js',
    path: path.resolve(__dirname, 'listingslab-theme/react')
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      }
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, 'listingslab-theme/react'),
    port: 1975
  }
};
