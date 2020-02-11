import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const VerticalSeparator = (props) => {
    return (
        <View style={[styles.separator, { borderTopColor: props.color ? props.color : '#BDBDBD' }]}>
        </View>
    );
}

const styles = StyleSheet.create({
    separator: {
        borderTopWidth: 1,
    }
});
export default VerticalSeparator;