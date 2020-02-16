import React from 'react';
import MovieLayout from '../components/movie-layout';
import Header from '../../sections/components/header';
import Player from '../../player/containers/player';
import Close from '../components/close';
import { connect } from 'react-redux';
import { REMOVE_SELECTED_MOVIE } from '../../../actions/actions';
import Details from '../../videos/components/details';
import { Animated } from 'react-native';

class Movie extends React.Component {
  state = {
    opacity: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 1000,
    }).start();
  }
  closeVideo = () => {
    this.props.dispatch(REMOVE_SELECTED_MOVIE());
  };

  render() {
    return (
      <Animated.View style={{ flex: 1, opacity: this.state.opacity }}>
        <MovieLayout>
          <Header>
            <Close onPress={this.closeVideo} />
          </Header>
          <Player />
          <Details {...this.props.selectedMovie} />
        </MovieLayout>
      </Animated.View>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedMovie: state.selectedMovie,
  };
};
export default connect(mapStateToProps)(Movie);
