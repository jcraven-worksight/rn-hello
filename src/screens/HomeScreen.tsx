import {Person, IPerson} from '../models/Person';
import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import INavigationProps from '../config/INavigationProps';

interface IHomeProps extends INavigationProps, IPerson {
}

export default class Home extends React.Component<IHomeProps, any> {
  static navigationOptions = {
    title: 'Home'
  };
  public employee: Person;

  constructor(props: any) {
    super(props);
    const nav = this.props.navigation;
    this.employee = new Person(nav.getParam('name', 'some dude'), nav.getParam('job', 'hobo'), nav.getParam('email', 'none'));
  }

  render() {
    const {navigate, goBack} = this.props.navigation;
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Welcome {this.employee.name}</Text>
          <Text style={styles.text}>Your email address is {this.employee.email}</Text>
          <Text style={styles.text}>Your Job title is {this.employee.job}</Text>
          <Button title='Go to empty' onPress={() => navigate('Empty', {})}/>
          <Text/>
          <Button title='Logout' onPress={() => goBack()}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 25
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginHorizontal: 20
  }
});