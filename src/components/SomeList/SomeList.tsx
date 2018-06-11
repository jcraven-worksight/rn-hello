import React, { Component } from 'react';
import {FlatList, Text} from 'react-native';

interface IListProps {
  list: string[];
}

export default class SomeList extends Component<IListProps, any> {
  list: string[];
  constructor(props: IListProps) {
    super(props);
    this.list = props.list;
    console.log(this.list);
  }

  render() {
    return (
      <FlatList
        data={this.list}
        renderItem={(item) => <Text>{item}</Text>}
      />
    );
  }
}
