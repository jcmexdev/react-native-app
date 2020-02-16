import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import SuggestionListLayout from '../components/suggestion-list-layout';
import ListEmpty from '../components/list-empty';
import VerticalSeparator from '../../sections/components/vertical-separator';
import SuggestionItem from '../components/suggestion-item';
import { connect } from 'react-redux';
import { SET_SELECTED_MOVIE } from '../../../actions/actions';

class SuggestionList extends Component {
  renderEmpty = () => <ListEmpty text="No hay sugerencias :(" />;
  renderSeparator = () => <VerticalSeparator />;
  keyStractor = item => item.id.toString();
  setSelectedMovie = item => {
    this.props.dispatch(SET_SELECTED_MOVIE(item));
  };
  renderItem = ({ item }) => {
    return (
      <SuggestionItem
        {...item}
        onPress={() => {
          this.setSelectedMovie(item);
        }}
      />
    );
  };

  render() {
    return (
      <SuggestionListLayout title="Recomendado para ti">
        <FlatList
          keyExtractor={this.keyStractor}
          data={this.props.list}
          renderItem={this.renderItem}
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
