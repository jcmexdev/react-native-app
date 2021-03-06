import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';

const SuggestionItem = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container} key={props.id}>
        <View style={styles.left}>
          <Image
            style={styles.cover}
            source={{ uri: props.medium_cover_image }}
          />
          <Text style={styles.genre}>{props.genres[0]}</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.year}>{props.year}</Text>
          <Text style={styles.rating}>{props.rating} Estrellas</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  left: {},
  right: {
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  cover: {
    width: 100,
    height: 150,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    color: '#44546b',
  },
  year: {
    color: 'white',
    backgroundColor: '#70b124',
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 5,
    overflow: 'hidden',
    fontSize: 11,
    alignSelf: 'flex-start',
  },
  rating: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold',
  },
  genre: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'black',
    color: 'white',
    fontSize: 11,
    paddingVertical: 2,
    paddingHorizontal: 5,
  },
});

export default SuggestionItem;
