import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import { Provider } from 'react-redux';
import applicationStore from './store/applicationStore';

ReactDOM.render(
  <Provider store={applicationStore}>
    <App />
  </Provider>,
  document.getElementById('app')
);
