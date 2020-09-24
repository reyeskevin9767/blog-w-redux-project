import { combineReducers } from 'redux';
import postReducer from './postReducer';

// Rules of Reducers
// Must return any value besides 'undefined'

// Produces 'state' or data to be used inside of your app using only
// previous state and the action

// Must not return reach 'out of itself' to decide what value to return
// (reducers are pure)

// Must not mutate its input 'state' argument

// Why You DONT'T MUTATE
// Its like a box containing some stuff, 
// which I keep in the same place in my cupboard. 
// Even if I take the box out, rearrange the stuff inside 
// or add/remove stuff, if I put the box back in the same place in the cupboard, 
// thunk will see it as 'the same box' and therefore not make any change


// How to mutate the data the correct way
// Remove an element from array -> state.filter(element => element !== 'hi' )
// Add an element to an array -> [...state, 'hi']
// Rpelace an element in an array -> state.map(el -> el === 'hi' ? 'bye': el)

// Update a property in an object -> {...state, name: 'Sam'}
// Adding a property to an object -> {...state, age: 30}
// Removing a property from an object -> {...state, age: undefined} or _.omit(state,'age')


// Trick redux into having a valid reducer
export default combineReducers({
  posts: postReducer,
});

