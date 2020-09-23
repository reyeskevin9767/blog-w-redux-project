import { getDefaultNormalizer } from '@testing-library/react';
import { combineReducers } from 'redux';

// Trick redux into having a valid reducer
export default combineReducers({
  replaceMe: () => 10,
});
