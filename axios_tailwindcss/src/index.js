import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.min-6.css'
import App from './App';

import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);


