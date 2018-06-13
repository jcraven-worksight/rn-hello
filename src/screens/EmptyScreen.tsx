import { View, Text, Button } from 'react-native';
import React from 'react';
import INavigationProps from '../config/INavigationProps';

import {Query} from 'react-apollo';
import {query1, query2} from '../gql/testQueries';
import {PersonSmall} from '../models/Person';

class What extends React.Component<any, any> {
  render() {
    return <Text>hello world </Text>;
  }
}

// bracket nesting is a bit nuts :|
export default () => (
  <Query query={query2}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>;
      if (error) return <Text>Error...</Text>;
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {data.test.map((person: PersonSmall, idx: number) => (
            <Text key={idx}>{person.name} is {person.age} years old</Text>
          ))}
        </View>
      );
    }}
  </Query>
);