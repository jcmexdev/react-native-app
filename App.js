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

class App extends Component {
  state = {
    suggestionList:[],
    categoriesList:[]
  }

  async componentDidMount() {
    const suggestions = await Api.getSuggestions(2);
    const categories = await Api.getMovies();

    this.setState({
      suggestionList: suggestions,
      categoriesList: categories
    })
  }
  render() {
    return (
      <Home>
        <Header>
          <Text>Child</Text>
        </Header>
        <Text>Search</Text>
        <Text>Categories</Text>
        <CategoryList list={this.state.categoriesList} />
        <SuggestionList list={this.state.suggestionList} />
      </Home>
    );
  }
}

export default App;
