import {createStore} from 'redux';
import reducer from './reducers/videos';

const store = createStore(reducer, {key: 'value'});

export default store;
