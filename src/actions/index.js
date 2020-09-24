import jsonPlaceholder from '../apis/jsonPlaceholder';

// Action Creator -> Action -> Dispatch -< Middleware -> Reducers -> State

// Problems wtihout redux-thunk
// Actions creators must return plain JS objects with a type property
// Action gets to reducer, unable to fetch the data

// Solution - Middleware
// Function that gets called with every action we dispatch
// Has the ability to STOP, MODIFY, or otherwise messa around with actions
// Redux-thunk used to solve async issuess

// Redux-Thunk
// Action creators can return action objects or
// Action creators can return fuctions

// Check if "something" is a object or function
// If it is a function, it invokes the function with a dispatch and getState
// functions as arguments

// Dispatch -> Same dispatch function, allow changes to datat from the redux side
// getState -> Return all the state from the redux store

// Fetch All Posts 
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};


// Fetch One User
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};
