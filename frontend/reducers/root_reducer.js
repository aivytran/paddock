import { combineReducers } from 'redux';

import coordReducer from './coord_reducer';

const RootReducer = combineReducers({
  coord: coordReducer
});

export default RootReducer;
