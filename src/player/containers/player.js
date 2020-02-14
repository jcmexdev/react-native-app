import React, {Component} from 'react';
import PlayerLayout from '../components/player-layout';
import ControlLayout from '../../player/components/control-layout';
import PlayPause from '../../player/components/play-pause';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';
import ProgressBar from '../components/progressbar';
import {ActivityIndicator, StyleSheet, Platform} from 'react-native';
import Video from 'react-native-video';

class Player extends Component {
  state = {
    loading: true,
    paused: true,
    volume: 1,
    isMuted: false,
    fullScreen: false,
    progress: 0,
  };

  onErrorVideo = error => {
    console.log(error);
  };

  onBuffer = ({isBuffering}) => {
    this.setState({
      loading: isBuffering,
    });
  };

  playPause = () => {
    this.setState(prevState => {
      return {
        paused: !prevState.paused,
      };
    });
  };

  onVolumePress = () => {
    this.setState(prevState => {
      return {
        volume: prevState.volume == 0 ? 1 : 0,
        isMuted: prevState.volume == 0 ? false : true,
      };
    });
  };

  toggleFullScreen = () => {
    if (this.state.fullScreen) {
      this.videoRef.dismissFullscreenPlayer();
    } else {
      this.videoRef.presentFullscreenPlayer();
    }
    this.setState(prevState => {
      return {
        fullScreen: !prevState.fullScreen,
      };
    });
  };

  onProgress = payload => {
    this.setState({
      progress: payload.currentTime / payload.seekableDuration,
    });
  };

  render() {
    return (
      <PlayerLayout
        loading={this.state.loading}
        video={
          <Video
            ref={ref => (this.videoRef = ref)}
            resizeMode="contain"
            source={{
              uri:
                'http://mirror.cessen.com/blender.org/peach/trailer/trailer_iphone.m4v',
            }}
            style={styles.player}
            volume={this.state.volume}
            onError={this.onErrorVideo}
            onBuffer={this.onBuffer}
            onLoad={() => {
              this.setState({loading: false});
            }}
            paused={this.state.paused}
            onProgress={this.onProgress}
            fullscreen={true}
          />
        }
        loader={<ActivityIndicator color="red" />}
        constrols={
          <ControlLayout>
            <PlayPause onPress={this.playPause} paused={this.state.paused} />
            <ProgressBar progress={this.state.progress} />
            <Volume onPress={this.onVolumePress} isMuted={this.state.isMuted} />
            <FullScreen onPress={this.toggleFullScreen} />
          </ControlLayout>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  player: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default Player;
