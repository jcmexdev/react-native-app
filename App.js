/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text } from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import CategoryList from './src/videos/containers/category-list';
import Api from './utils/api';
import Player from './src/player/containers/player';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { SET_CATEGORY_LIST, SET_SUGGESTION_LIST } from './actions/actions';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from './src/sections/components/loading';

class App extends Component {
  async componentDidMount() {
    Icon.loadFont();

    const categories = await Api.getMovies();
    store.dispatch(SET_CATEGORY_LIST(categories));

    const suggestions = await Api.getSuggestions(3);
    store.dispatch(SET_SUGGESTION_LIST(suggestions));
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<Loading />}>
          <Home>
            <Header />
            <Player />
            <Text>Search</Text>
            <Text>Categories</Text>
            <CategoryList />
            <SuggestionList />
          </Home>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
