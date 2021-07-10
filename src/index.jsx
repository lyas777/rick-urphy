import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import ApplicationContextProvider from './providers/AplicationContextProvider';

ReactDOM.render(
  <ApplicationContextProvider>
    <App />
  </ApplicationContextProvider>,
  document.getElementById('app')
);
