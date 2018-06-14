import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './styles';

// using () instead of {} implicity returns
const Container = ({ children }: { children: any }) => {
  // needs to be an array
  const containerStyles = [styles.container];
  return (
  <View style={containerStyles}>
    {children}
  </View>
  );
 };

export default Container;