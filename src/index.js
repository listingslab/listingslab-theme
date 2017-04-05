/*
  Entry point for listingslab-theme react frontend for WordPress
*/

const vs = '5.9.0';
const welcomeMessage = `Hello. We are using react and this is the front end,
build by webpack and ready for production`;
console.log (welcomeMessage);
console.log (`Version ${vs}`);


// This will only work when ES6 is enabled
// alert (`${welcomeMessage version ${version}`);

/*
  const Webpack = require("webpack");
  const WebpackDevServer = require("./node_modules/webpack-dev-server/lib/Server");
  const webpackConfig = require("./webpack.config");
  const compiler = Webpack(webpackConfig);
  const server = new WebpackDevServer(compiler, {
  	stats: {
  		colors: true
  	}
  });
  server.listen(8080, "127.0.0.1", function() {
  	console.log("Starting server on http://localhost:8080");
  });
*/
