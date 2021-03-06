import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

const PlayerLayout = props => (
  <View style={styles.container}>
    <View style={styles.video}>{props.video}</View>
    <View style={styles.overlay}>{props.loading && props.loader}</View>
    {props.constrols}
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: '56.25%',
  },
  video: {
    backgroundColor: 'black',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PlayerLayout;
