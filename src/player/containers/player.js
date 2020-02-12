import React, { Component } from 'react'
import PlayerLayout from '../components/player-layout';
import { ActivityIndicator } from 'react-native';
import Video from 'react-native-video';

class Player extends Component {
    state = {
        loading: true,
    }

    onErrorVideo = (error) => {
        console.log(error);
    }
    onBuffer = ({ isBuffering }) => {
        this.setState({
            loading: isBuffering
        })

    }

    render() {
        return <PlayerLayout
            loading={this.state.loading}
            video={
                <Video
                    resizeMode='contain'
                    source={{ uri: 'http://mirror.cessen.com/blender.org/peach/trailer/trailer_iphone.m4v' }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                    }
                    }
                    onError={this.onErrorVideo}
                    onBuffer={this.onBuffer}
                    onLoad={() => { this.setState({ loading: false }) }}
                />}
            loader={<ActivityIndicator color='red' />}
        />
    }
}

export default Player;