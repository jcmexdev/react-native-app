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

    render() {
        let list = [{
            "title": "pellentesque viverra pede",
            "year": 2010,
            "rating": 1,
            "id": "86-9721441"
          }, {
            "title": "nisl duis",
            "year": 1988,
            "rating": 5,
            "id": "45-3442027"
          }, {
            "title": "risus dapibus augue vel",
            "year": 1964,
            "rating": 1,
            "id": "36-7946750"
          }, {
            "title": "curabitur at ipsum ac tellus",
            "year": 2012,
            "rating": 5,
            "id": "61-5936111"
          }, {
            "title": "amet lobortis sapien",
            "year": 2007,
            "rating": 3,
            "id": "18-3939739"
          }, {
            "title": "magnis dis",
            "year": 2006,
            "rating": 4,
            "id": "86-5022010"
          }, {
            "title": "in quis justo maecenas",
            "year": 2011,
            "rating": 5,
            "id": "23-5303554"
          }, {
            "title": "cras mi pede malesuada",
            "year": 1992,
            "rating": 1,
            "id": "69-9432936"
          }, {
            "title": "ipsum primis in",
            "year": 1988,
            "rating": 2,
            "id": "99-1415760"
          }, {
            "title": "ultrices enim lorem",
            "year": 2010,
            "rating": 2,
            "id": "31-1824629"
          }, {
            "title": "ipsum dolor sit amet consectetuer",
            "year": 2009,
            "rating": 3,
            "id": "51-1928130"
          }, {
            "title": "pede venenatis non sodales sed",
            "year": 2001,
            "rating": 5,
            "id": "92-4392830"
          }, {
            "title": "fermentum justo",
            "year": 1999,
            "rating": 1,
            "id": "28-1415088"
          }, {
            "title": "magna vulputate luctus cum",
            "year": 1999,
            "rating": 3,
            "id": "05-6000672"
          }, {
            "title": "leo maecenas pulvinar",
            "year": 1995,
            "rating": 2,
            "id": "03-0053339"
          }, {
            "title": "sit amet nunc viverra",
            "year": 1998,
            "rating": 1,
            "id": "23-5807728"
          }, {
            "title": "primis in faucibus orci",
            "year": 2001,
            "rating": 4,
            "id": "60-4511827"
          }, {
            "title": "ridiculus mus vivamus vestibulum",
            "year": 1997,
            "rating": 1,
            "id": "29-3979125"
          }, {
            "title": "nec dui luctus",
            "year": 2009,
            "rating": 3,
            "id": "40-1114406"
          }, {
            "title": "sed tristique in",
            "year": 2006,
            "rating": 4,
            "id": "59-3077503"
          }];
        return (
            <SuggestionListLayout title="Recomendado para ti" >
                <FlatList
                    data={list}
                    renderItem={({ item }) => <SuggestionItem {...item} />}
                    ListEmptyComponent={this.renderEmpty}
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </SuggestionListLayout>
        );
    }
}

export default SuggestionList;