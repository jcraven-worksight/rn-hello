import React, { Component } from 'react';
import {Text, TouchableHighlight, Button, TextInput } from 'react-native';
import INavigationProps from '../config/INavigationProps';
import {client} from '../App';
import EStyleSheet from 'react-native-extended-stylesheet';
import {query1, query2} from '../gql/testQueries';
import {Container} from '../components/Container';

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
    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
    this.state = {
      email: props.email || 'temp@temp.temp',
      password: props.password || 'p',
      title: 'hello, login here'
    };

    // this.testQuery();
  }

  testQuery() {
    client.query({ query: query1, variables: {type: 'airport', numOfAirports: 3}}).then(result => {
      const data: any = result.data;
      const aps = data.searchType;
      console.log(aps[0]);
    });
  }

  focusNextField(id: string) {
    this.inputs[id].focus();
  }

  login() {
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
          // value={this.state.text}
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
          // value={this.state.text}
          placeholder='password'
          ref={ input => {
            this.inputs.two = input;
          }}
        />
        <TouchableHighlight>
          <Button
            onPress={this.login.bind(this)}
            title='Login'
            color='#841584'
          />
        </TouchableHighlight>
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
    marginHorizontal: 20,
    marginBottom: 20
  }
});