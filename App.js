/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text} from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header';
import SuggestionList from './src/videos/containers/suggestion-list';
import CategoryList from './src/videos/containers/category-list';
import Api from './utils/api';
import Player from './src/player/containers/player';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
  state = {
    suggestionList: [],
    categoriesList: [],
  };

  async componentDidMount() {
    Icon.loadFont();
    const suggestions = await Api.getSuggestions(3);
    const categories = await Api.getMovies();

    this.setState({
      suggestionList: suggestions,
      categoriesList: categories,
    });
  }
  render() {
    return (
      <Provider store={store}>
        <Home>
          <Header />
          <Player />
          <Text>Search</Text>
          <Text>Categories</Text>
          <CategoryList list={this.state.categoriesList} />
          <SuggestionList list={this.state.suggestionList} />
        </Home>
      </Provider>
    );
  }
}

export default App;
