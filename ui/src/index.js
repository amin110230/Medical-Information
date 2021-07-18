import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/custom-grids.css';
import App from './components/app';
import {Provider} from 'react-redux';
import store from './store/store';

ReactDOM.render(
  <Provider store = {store}>
       <App/>         
  </Provider>,
  document.getElementById('root')
);

