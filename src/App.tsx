import React from 'react';
// import {Observe, observable, watch} from 'rewire-core';
import { StyleSheet, Text, View, ClippingRectangle } from 'react-native';

class Person {
  name: string;
  age: number;
  job: string;
  constructor(name: string, age: number, job: string) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
}

interface IDefaultViewProps {
  employee: Person;
}

class DefaultAppView extends React.Component<IDefaultViewProps, any> {
  public employee: any;
  constructor(props: IDefaultViewProps) {
    super(props);
    // this.employee = observable(props.employee);
    this.employee = props.employee;
    // watch(() => this.employee.name, () => console.log(this.employee.name + ' is changed'));
  }

  changeEmployee() {
    setTimeout(() => {
      let dude = this.employee;
      dude.age = 56;
      dude.name = 'dude';
      dude.job = 'plumber';
    }, 2000);
    console.log('employee changed');
  }

  render() {
    this.changeEmployee();
    return (
      // <Observe render = {() =>
        <View style={styles.container}>
          <Text style={styles.text}>{this.employee.name} is my friend</Text>
          <Text style={styles.text}>he is {this.employee.age} year's old</Text>
          <Text style={styles.text}>and works as a {this.employee.job}</Text>
        </View>
      // } />
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <DefaultAppView employee={new Person('bob', 33, 'carpenter')} />
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
