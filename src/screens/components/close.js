import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Close = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.container}
      hitSlop={styles.hitSlop}>
      <Text style={styles.button}>X</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  button: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  hitSlop: {
    top: 5,
    right: 5,
    left: 5,
  },
});
export default Close;
