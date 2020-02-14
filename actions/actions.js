import * as actionTypes from './action-types';

export const SET_SUGGESTION_LIST = suggestionList => {
  return {
    type: actionTypes.SET_SUGGESTION_LIST,
    payload: {
      suggestionList,
    },
  };
};

export const SET_CATEGORY_LIST = categoryList => {
  return {
    type: actionTypes.SET_CATEGORY_LIST,
    payload: {
        categoryList
    },
  };
};
