// Redux -> The redux library
// React-redux -> integration layer between react and redux
// axios -> make network requests
// redux-thunk -> Middleware to help us make requests in a redux application

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
