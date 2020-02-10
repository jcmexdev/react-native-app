import React, { Component } from 'react';
import {
    FlatList,
    Text
} from 'react-native';
import SuggestionListLayout from '../components/suggestion-list-layout';

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
            <SuggestionListLayout title="Recomendado para ti" >
                <FlatList
                    data={list}
                    renderItem={({ item }) => <Text key={item.key}>{item.title}</Text>}
                    />
            </SuggestionListLayout>
        );
    }
}

export default SuggestionList;