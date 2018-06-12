import Person from '../models/Person';
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import INavigationProps from '../config/INavigationProps';

export default class Home extends React.Component<INavigationProps, any> {
  public employee: any;

  constructor(props: INavigationProps) {
    super(props);
    this.employee = new Person('bob', 33, 'carpenter');
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}>
          <Text style={styles.text}>{this.employee.name} is my friend</Text>
          <Text style={styles.text}>he is {this.employee.age} year's old</Text>
          <Text style={styles.text}>and works as a {this.employee.job}</Text>
          <Button title='Go to login' onPress={() => navigate('Login', {})}
        />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  }
});