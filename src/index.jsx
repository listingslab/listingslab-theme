/*
  Entry point for listingslab-theme react frontend for WordPress
*/

const packageJson = require('../package.json');

const welcomeMessage = packageJson.description;

console.log(welcomeMessage);
console.log(`Version ${packageJson.version}`);
