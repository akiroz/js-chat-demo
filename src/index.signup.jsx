import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import skygear from 'skygear';

import config from './config.json';
import Authenticate from './Authenticate.jsx';

skygear.config(config.skygearConfig)
.then(function() {
  const root = document.createElement('div');
  document.body.appendChild(root);
  ReactDOM.render(<Authenticate signup/>, root);
});
