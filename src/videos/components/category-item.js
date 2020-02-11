import React from 'react';
import {
    Text,
    StyleSheet,
    ImageBackground
} from 'react-native';

const CategoryItem = (props) => (
    <ImageBackground source={{ uri: props.background_image }} style={styles.container}>
        <Text style={styles.genre}>{props.genres[0]}</Text>
    </ImageBackground>
);

const styles = StyleSheet.create({
    container: {
        width: 250,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden'
    },
    genre: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0,0,0,0.75)',
        textShadowOffset: {
            width: 2,
            height: 2
        },
        textShadowRadius: 0
    }
});

export default CategoryItem;