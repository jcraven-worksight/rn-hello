import { View, Text, Button } from 'react-native';
import React from 'react';
import  { LoadingIndicator }  from '../components/LoadingIndicator';

import {Query} from 'react-apollo';
import {query1, query2} from '../gql/testQueries';
import {PersonSmall} from '../models/Person';

class What extends React.Component<any, any> {
  render() {
    return <Text>hello world </Text>;
  }
}

// bracket nesting is a bit nuts...
export default (/* onLoginSelected: any */) => (
  <Query query={query2}>
    {({ loading, error, data }) => {
      if (loading) return <LoadingIndicator />;
      if (error) return <Text>Error...</Text>;
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {data.test.map((person: PersonSmall, idx: number) => (
            <Text key={idx}>{person.name} is {person.age} years old</Text>
          ))}
          {/* <Button title='press me' onPress={onLoginSelected}/> */}
        </View>
      );
    }}
  </Query>
);
