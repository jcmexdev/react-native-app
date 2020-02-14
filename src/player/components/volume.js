import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Volume = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.container}
      hitSlop={styles.hitSlop}>
      <Icon name={props.isMuted ? 'volume-off' : 'volume-up'} size={30} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  hitSlop: {
    top: 5,
    right: 5,
    bottom: 5,
    left: 5,
  },
});

export default Volume;
