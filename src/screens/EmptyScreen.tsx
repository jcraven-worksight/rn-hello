import { View, Text, Button } from 'react-native';
import React from 'react';
import INavigationProps from '../config/INavigationProps';

export default class EmptyScreen extends React.Component<INavigationProps, any> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title='Go to Home'
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}