import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import SuggestionListLayout from '../components/suggestion-list-layout';
import ListEmpty from '../components/list-empty';
import VerticalSeparator from '../../sections/components/vertical-separator';
import SuggestionItem from '../components/suggestion-item';
import { connect } from 'react-redux';

class SuggestionList extends Component {
  renderEmpty = () => <ListEmpty text="No hay sugerencias :(" />;
  renderSeparator = () => <VerticalSeparator />;
  keyStractor = item => item.id.toString();

  render() {
    return (
      <SuggestionListLayout title="Recomendado para ti">
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

const mapStateToProps = state => {
  return {
    list: state.suggestionList,
  };
};

export default connect(mapStateToProps)(SuggestionList);
