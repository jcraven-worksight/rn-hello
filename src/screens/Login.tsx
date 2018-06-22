import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';
import INavigationProps from '../config/INavigationProps';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Container } from '../components/Container';
import { NiceButton } from '../components/Button';

interface Props extends INavigationProps {
  email: string;
  password: string;
  ooga: string;
}

interface State {
  title: string;
  email: string;
  password: string;
}

export default class LoginScreen extends Component<Props, State> {
  inputs: any;

  constructor(props: Props) {
    super(props);
    this.inputs = {};
    this.state = {
      email: props.email || 'temp@temp.temp',
      password: props.password || 'p',
      title: 'hello, login here'
    };
  }

  focusNextField = (id: string) =>  this.inputs[id].focus();

  login = () => {
    if (this.state.password === 'p') {
      this.props.navigation.navigate('Home', { email: this.state.email, name: 'bob man', job: 'carpenter' });
    } else {
      alert('wrong password');
    }
  }

  render() {
    return (
      <Container>
        <Text style={[styles.text, {marginBottom: 15}]}>{this.state.title}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(email) => this.setState({email})}
          placeholder='email'
          autoFocus={false}
          keyboardType='email-address'
          blurOnSubmit={false}
          returnKeyType={'next'}
          ref={ input => {
            this.inputs.one = input;
          }}
          onSubmitEditing={() => {
            this.focusNextField('two');
          }}
        />
        <TextInput
          style={styles.input}
          onChangeText={(password) => this.setState({password})}
          placeholder='password'
          ref={ input => {
            this.inputs.two = input;
          }}
        />
          <NiceButton onTouch={this.login} title='Login' />
      </Container>
    );
  }
}

const styles = EStyleSheet.create({
  text: {
    color: '$white',
    fontWeight: 'bold',
    fontSize: 25
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: '$white',
    marginHorizontal: 20,
    marginBottom: 20,
    color: '$white'
  }
});