import { createStore, combineReducers } from 'redux';

import playersReducer from './reducers/players';

const rootReducer = combineReducers({
  players: playersReducer
});

// create the store
// add an argument in the () if you want it to dynamically create the store
const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
