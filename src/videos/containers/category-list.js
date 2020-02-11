import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList
} from 'react-native';
import ListEmpty from '../components/list-empty';
import HorizontalSeparator from '../../sections/components/horizontal-separator';
import CategoryItem from '../components/category-item';
import CategoryListLayout from '../components/category-list-layout';

class CategoryList extends Component {
    renderEmpty = () => <ListEmpty text="No hay categorías :(" />
    keyExtractor = item => item.id.toString()

    render() {
        return <CategoryListLayout title="Lista de categorías">
            <FlatList
                horizontal={true}
                keyExtractor={this.ketExtractor}
                data={this.props.list}
                ListEmptyComponent={this.renderEmpty}
                ItemSeparatorComponent={() => <HorizontalSeparator />}
                renderItem={({ item }) => <CategoryItem {...item} />}
            />
        </CategoryListLayout>
    }
}

export default CategoryList