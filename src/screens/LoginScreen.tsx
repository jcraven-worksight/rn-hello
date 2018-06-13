import React, { Component } from 'react';
import {TouchableHighlight, StyleSheet, View, Button, TextInput } from 'react-native';
import INavigationProps from '../config/INavigationProps';
import {client} from '../App';
import {query1, query2} from '../gql/testQueries';

export default class LoginScreen extends Component<INavigationProps, any> {
  static navigationOptions = {
    title: 'Home'
  };

  inputs: any;
  constructor(props: INavigationProps) {
    super(props);
    this.state = { email: 'temp@temp.temp', password: 'p' };
    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
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
    // console.log(`logging in with email: ${this.state.email}, pw ${this.state.password}`);
    if (this.state.password === 'p') {
      this.props.navigation.navigate('Home', { email: this.state.email, name: 'bob man', job: 'carpenter' });
    } else {
      alert('wrong password');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(email) => this.setState({email})}
          value={this.state.text}
          placeholder='email'
          autoFocus={true}
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
          value={this.state.text}
          placeholder='password'
          ref={ input => {
            this.inputs.two = input;
          }}
        />
        <TouchableHighlight>
        <Button
          onPress={this.login.bind(this)}
          title='Submit'
          color='#841584'
        />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 20,
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTouched: {
    borderColor: 'red',
    borderWidth: 2
  }
});