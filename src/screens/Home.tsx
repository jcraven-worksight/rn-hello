import { Person, IPerson } from '../models/Person';
import React from 'react';
import { Text } from 'react-native';
import INavigationProps from '../config/INavigationProps';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Container } from '../components/Container';
import { NiceButton } from '../components/Button';

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
        <Container>
          <Text style={styles.text}>welcome {this.employee.name}</Text>
          <Text style={styles.text}>email: {this.employee.email}</Text>
          <Text style={styles.text}>job: {this.employee.job}</Text>
          <Text/>
          <NiceButton title='Go Somewhere Else' onTouch={() => navigate('Empty', {})}/>
        </Container>
    );
  }
}

const styles = EStyleSheet.create({
  text: {
    color: '$white',
    fontWeight: 'bold',
    fontSize: 20
  },
  button: {
    marginHorizontal: 20
  }
});