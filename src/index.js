// Redux -> The redux library
// React-redux -> integration layer between react and redux
// axios -> make network requests
// redux-thunk -> Middleware to help us make requests in a redux application

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Need applyMiddleware for redux-thunk
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

// Components are responsible for fetching data they need by calling an action creator
// From the componenetDidMount Method

// Actions creators are responsible for making API requests

// Fetched data into a component by generating new state in our redux store, then getting
// that into our component from the mapStateToProps
