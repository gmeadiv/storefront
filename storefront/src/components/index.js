import { createStore, combineReducers } from "redux";

import candidateReducer from './categories.js';

let reducers = combineReducers({votes: candidateReducer});

const store = () => {
  return createStore(reducers)
}

export default store;