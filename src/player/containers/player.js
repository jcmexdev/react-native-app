import React, { Component } from 'react'
import PlayerLayout from '../components/player-layout';
import ControlLayout from '../../player/components/control-layout';
import PlayPause from '../../player/components/play-pause';
import { ActivityIndicator, StyleSheet, Text } from 'react-native';
import Video from 'react-native-video';

class Player extends Component {
    state = {
        loading: true,
        paused: true,
    }

    onErrorVideo = (error) => {
        console.log(error);
    }
    onBuffer = ({ isBuffering }) => {
        this.setState({
            loading: isBuffering
        })

    }
    playPause = () => {
        this.setState((prevState) => {
            return {
                paused: !prevState.paused
            }
        });
    }

    render() {
        return <PlayerLayout
            loading={this.state.loading}
            video={
                <Video
                    resizeMode='contain'
                    source={{ uri: 'http://mirror.cessen.com/blender.org/peach/trailer/trailer_iphone.m4v' }}
                    style={styles.player}
                    volume={0}
                    onError={this.onErrorVideo}
                    onBuffer={this.onBuffer}
                    onLoad={() => { this.setState({ loading: false }) }}
                    paused={this.state.paused}
                />}
            loader={<ActivityIndicator color='red' />}
            constrols={
                <ControlLayout>
                    <PlayPause onPress={this.playPause} paused={this.state.paused} />
                    <Text>Progress bar |</Text>
                    <Text>Time left |</Text>
                    <Text>Full screen |</Text>
                </ControlLayout>
            }
        />
    }
}

const styles = StyleSheet.create({
    player: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
})

export default Player;