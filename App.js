import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  doSomeStuff() {
    const o = {
      name: 'bob',
      age: 44
    }
    console.log('my name is' + o.name);
  }
  render() {
    console.log('hi');
    this.doSomeStuff();
    return (
      <View style={styles.container}>
        <Text>on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
