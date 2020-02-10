import React, { Component } from 'react';
import {
    FlatList,
    Text
} from 'react-native';

class SuggestionList extends Component {
    render() {
        let list = [
            { title: 'uno', key: '1' },
            { title: 'dos', key: '2' },
            { title: 'tres', key: '3' },
            { title: 'cuatro', key: '4' },
            { title: 'cinco', key: '5' },
        ];
        return (
            <FlatList
                data={list}
                renderItem={({ item }) => <Text key={item.key}>{item.title}</Text>}
            />
        );
    }
}

export default SuggestionList;