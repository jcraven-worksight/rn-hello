import { Text } from 'react-native';
import React from 'react';
import { LoadingIndicator } from '../components/LoadingIndicator';
import { Container } from '../components/Container';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Query } from 'react-apollo';
import { query1, query2 } from '../gql/testQueries';
import { PersonSmall } from '../models/Person';

const logme = () => alert('im pressed!');
import styles from '../components/Container/styles';

// bracket nesting is a bit nuts...
export default (/* onLoginSelected: any */) => (
  <Query query={query2}>
    {({ loading, error, data }) => {
      if (loading) return <LoadingIndicator />;
      if (error) return <Text style={styles.text}>Error...</Text>;
      return (
        <Container>
          {data.test.map((person: PersonSmall, idx: number) => (
            <Text style={styles.text} key={idx}>{person.name} is {person.age} years old</Text>
          ))}
          {/* <Button title='press me' onPress={onLoginSelected}/> */}
        </Container>
      );
    }}
  </Query>
);