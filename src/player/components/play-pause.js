import React from 'react';
import {
    Text,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';

const PlayPause = (props) => {
    return (
        <TouchableHighlight onPress={props.onPress}
            style={styles.container}
            underlayColor="red"
            hitSlop={{
                top: 5,
                right: 5,
                bottom: 5,
                left: 5
            }}>
            <Text style={styles.button}>{props.paused ? 'PLAY' : 'PAUSE'}</Text>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    button: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold'
    },
    container: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 25,
        marginRight: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: 'gray'
    }
})
export default PlayPause;