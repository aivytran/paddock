import { RECEIVE_COORD} from '../actions/coord_actions';
import merge from 'lodash/merge';

const coordReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_COORD:
      const newCoord = {coord: action.coord};
      return merge({}, state, newCoord);
    default:
      return state;
  }
};

export default coordReducer;
