import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FullScreen = props => (
  <TouchableOpacity style={styles.container} onPress={props.onPress}>
    <Icon name="arrows-alt" size={30} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
});

export default FullScreen;
