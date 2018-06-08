import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Person {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

export default class App extends React.Component {
  doSomeStuff(): Person {
    return new Person('bob', 44);
  }
  render() {
    const person: Person = this.doSomeStuff();
    return (
      <View style={styles.container}>
        <Text style={styles.text}>on your app!</Text>
        <Text style={styles.text}>{person.name} testicles fly</Text>
        <Text style={styles.text}>somxe random errors</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
