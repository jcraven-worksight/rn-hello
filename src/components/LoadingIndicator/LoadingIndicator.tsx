import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

// types if specified must happen after descructuring
// ex. {txt, name}: {txt: string, name: string}
const LoadingIndicator = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size='large' color='#32cd32' />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});

export default LoadingIndicator;