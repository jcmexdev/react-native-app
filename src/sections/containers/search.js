import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import API from '../../../utils/api';
import { SET_SELECTED_MOVIE } from '../../../actions/actions';
import { connect } from 'react-redux';

class Search extends React.Component {
  state = {
    title: '',
    searching: false,
  };

  searchMovie = title => {
    this.setState({
      title,
    });
  };

  handleSubmit = async () => {
    this.setState({
      searching: true,
    });
    const movie = await API.searchMovieByTitle(this.state.title);
    this.setState({
      searching: false,
    });
    if (movie.length > 0) {
      this.props.dispatch(SET_SELECTED_MOVIE(movie[0]));
    } else {
      Alert.alert(
        `Lo sentimos no tenemos resultados para ${this.state.title} :(`,
      );
    }
  };

  handleIconOrIndicator = () => {
    if (this.state.searching) {
      return <ActivityIndicator style={styles.icon} />;
    } else {
      return <Icon name="search" size={24} />;
    }
  };

  render() {
    return (
      <View style={styles.constainer}>
        <TextInput
          placeholder="Busca tu pelicula favorita"
          underlineColorAndroid="transparent"
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.input}
          onChangeText={this.searchMovie}
          onSubmitEditing={this.handleSubmit}
        />
        {this.handleIconOrIndicator()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  constainer: {
    borderWidth: 1,
    borderColor: '#ededed',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  icon: {
    width: 32,
  },
  input: {
    flex: 1,
    padding: 15,
    fontSize: 15,
  },
});

export default connect(null)(Search);
