import React from 'react';
import {View, StyleSheet} from 'react-native';

const ControlLayout = props => {
  return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    height: 35,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default ControlLayout;
