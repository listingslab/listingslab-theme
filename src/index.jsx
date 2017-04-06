/**
 * Created by Chris Dorward on 16/01/2017
 * index.js listingslab-theme react frontend for WordPress SPA entrypoint
 */

import React from 'react';
import { render } from 'react-dom';
// import { browserHistory } from 'react-router';
import packageJson from '../package.json';
import App from './smartComponents/App';

const welcomeMessage = packageJson.description;
console.log(welcomeMessage);
console.log(`Version ${packageJson.version}`);

render(
  <App />,
  document.getElementById('root')
);
