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
      categoryList,
    },
  };
};

export const SET_SELECTED_MOVIE = movie => {
  return {
    type: actionTypes.SET_SELECTED_MOVIE,
    payload: {
      selectedMovie: movie,
    },
  };
};

export const REMOVE_SELECTED_MOVIE = () => {
  return {
    type: actionTypes.REMOVE_SELECTED_MOVIE,
    payload: {
      selectedMovie: null,
    },
  };
};
