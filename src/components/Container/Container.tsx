import React, {Component} from 'react';
import {View} from 'react-native';
import styles from './styles';

interface IContainerProps {
  // ts union type
  // children: JSX.Element|JSX.Element[];
  children: any;
  hide?: boolean;
  style?: any;
}

const Container = (props: IContainerProps) => {
  const containerStyles = props.style || [styles.container];
  if (props.hide) {
    // must pass null to render
    // tslint:disable-next-line:no-null-keyword
    return null;
  }
  return (
    <View style={containerStyles}>
      {...props.children}
    </View>
  );
};

export default Container;