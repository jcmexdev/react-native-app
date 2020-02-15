import React from 'react';
import { Text } from 'react-native';
import Home from './screens/containers/home';
import Header from './sections/components/header';
import SuggestionList from './videos/containers/suggestion-list';
import CategoryList from './videos/containers/category-list';
import Api from '../utils/api';
import Player from './player/containers/player';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { SET_CATEGORY_LIST, SET_SUGGESTION_LIST } from '../actions/actions';

class AppLayout extends React.Component {

    async componentDidMount() {
        Icon.loadFont();

        const categories = await Api.getMovies();
        this.props.dispatch(SET_CATEGORY_LIST(categories));

        const suggestions = await Api.getSuggestions(3);
        this.props.dispatch(SET_SUGGESTION_LIST(suggestions));
    }

    render() {
        return (
            <Home>
                <Header />
                <Player />
                <Text>Search</Text>
                <Text>Categories</Text>
                <CategoryList />
                <SuggestionList />
            </Home>
        );
    }
}

export default connect(null)(AppLayout);