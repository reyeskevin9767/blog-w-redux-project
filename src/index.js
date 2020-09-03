import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

// Redux -> The redux library
// React-redux -> Integration layer between react and redux
// Axios -> Helps make network requests
// Redux-thunk -> Middleware to help us make requests in a redux application

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
