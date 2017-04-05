/* Webpack config for Listingslab Theme Development Server */

const path = require('path');

module.exports = {

  entry: './src/index.js',

  output: {
    filename: 'listingslab-theme.js',
    path: path.resolve(__dirname, 'listingslab-theme/react')
  },

  devServer: {
    contentBase: path.join(__dirname, 'listingslab-theme/react'),
    port: 1975
  }
};
