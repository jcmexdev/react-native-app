import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList
} from 'react-native';
import ListEmpty from '../components/list-empty';
import VerticalSeparator from '../components/vertical-separator';
import SuggestionItem from '../components/suggestion-item';

class CategoryList extends Component {
    renderEmpty = () => <ListEmpty text="No hay categorías :(" />
    keyExtractor = item => item.id.toString()

    render() {
        return <FlatList
            horizontal={true}
            keyExtractor={this.ketExtractor}
            data={this.props.list}
            ListEmptyComponent={this.renderEmpty}
            ItemSeparatorComponent={() => <VerticalSeparator />}
            renderItem={({ item }) => <SuggestionItem {...item} />}
        />
    }
}

export default CategoryList