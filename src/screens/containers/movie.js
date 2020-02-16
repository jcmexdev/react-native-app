import React from 'react';
import MovieLayout from '../components/movie-layout';
import Header from '../../sections/components/header';
import Player from '../../player/containers/player';
import Close from '../components/close';
import { connect } from 'react-redux';
import { REMOVE_SELECTED_MOVIE } from '../../../actions/actions';

class Movie extends React.Component {
  closeVideo = () => {
    this.props.dispatch(REMOVE_SELECTED_MOVIE());
  };

  render() {
    return (
      <MovieLayout>
        <Header>
          <Close onPress={this.closeVideo} />
        </Header>
        <Player />
      </MovieLayout>
    );
  }
}

export default connect(null)(Movie);
