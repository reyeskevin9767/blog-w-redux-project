import jsonPlaceholder from '../apis/jsonPlaceholder';

// Cannot use async and await in action creator,
// creator must return a regular js function

// By the time action gets to the reducer, we won't have fetched our data

// Solution
// Redux Thunk -> Allows for action creators to return functions

// Redux Thunk (and other middleware) will allow you to delay the dispatching of the action
// until the request fully resolves. After it resolves, the action will be sent back into the Redux Thunk
// pipeline again at which point it should be a plain action object
// and dispatched to the Redux store as we would typically expect.

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response });
};
