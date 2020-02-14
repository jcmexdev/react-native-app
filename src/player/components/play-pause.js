import React from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PlayPause = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}
            style={styles.container}
            hitSlop={styles.histSlo}>
            <Icon name={props.paused ? 'play-circle-o' : 'pause-circle-o'} size={30}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold'
    },
    container: {
        marginRight: 15,
    },
    histSlo: {
        top: 5,
        right: 5,
        bottom: 5,
        left: 5
    }
})
export default PlayPause;