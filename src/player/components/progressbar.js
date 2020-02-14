import React from 'react';
import {
  ProgressBarAndroid,
  ProgressViewIOS,
  Platform,
  StyleSheet,
  View,
} from 'react-native';

const ProgressBar = props => (
  <View style={styles.container}>
    {
      Platform.OS == 'android' ? <ProgressBarAndroid
      styleAttr="Horizontal"
      indeterminate={false}
      progress={props.progress} 
    /> :  <ProgressViewIOS progress={props.progress} />
    }
    
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 10,
  },
});

export default ProgressBar;
