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

class App extends Component {
  render() {
    return (
      <Home>
        <Header>
          <Text>hOLA Q Hace</Text>
        </Header>
        <Text>Search</Text>
        <Text>Categories</Text>
        <Text>Suggestions</Text>
      </Home>
    );
  }
};

export default App;
