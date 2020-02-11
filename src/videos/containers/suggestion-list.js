import React, { Component } from 'react';
import {
  FlatList,
  Text
} from 'react-native';
import SuggestionListLayout from '../components/suggestion-list-layout';
import ListEmpty from '../components/list-empty';
import VerticalSeparator from '../components/vertical-separator.js';
import SuggestionItem from '../components/suggestion-item';

class SuggestionList extends Component {
  renderEmpty = () => <ListEmpty text="No hay sugerencias :(" />;
  renderSeparator = () => <VerticalSeparator />;
  keyStractor = item => item.id.toString();

  render() {
    return (
      <SuggestionListLayout title="Recomendado para ti" >
        <FlatList
          keyExtractor={this.keyStractor}
          data={this.props.list}
          renderItem={({ item }) => <SuggestionItem {...item} />}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </SuggestionListLayout>
    );
  }
}

export default SuggestionList;