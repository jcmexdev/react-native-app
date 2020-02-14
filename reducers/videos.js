import * as actionTypes from '../actions/action-types';

function videos(state = {}, action) {
  switch (action.type) {
    case actionTypes.SET_CATEGORY_LIST: {
      return { ...state, ...action.payload };
    }
    case actionTypes.SET_SUGGESTION_LIST: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}

export default videos;
