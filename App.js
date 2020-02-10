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

class App extends Component {
  render() {
    return (
      <Home>
        <Header>
          <Text>Child</Text>
        </Header>
        <Text>Search</Text>
        <Text>Categories</Text>
        <SuggestionList />
      </Home>
    );
  }
};

export default App;
