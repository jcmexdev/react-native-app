import { createStore } from 'redux';
import reducer from './reducers/videos';

const initialState = {
  suggestionList: [],
  categoryList: [],
};

const store = createStore(reducer, initialState);

export default store;
