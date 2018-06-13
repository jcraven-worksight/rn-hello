import { View, Text, Button } from 'react-native';
import React from 'react';
import INavigationProps from '../config/INavigationProps';

class What extends React.Component<any, any> {
  render() {
    return <Text>hello world </Text>;
  }
}
export default class EmptyScreen extends React.Component<INavigationProps, any> {
  static navigationOptions = {
    headerTitle: <What />
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize: 20}}>Some stuff goes here</Text>
        <Text/>
        <Button
          title='Go to Login'
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}
