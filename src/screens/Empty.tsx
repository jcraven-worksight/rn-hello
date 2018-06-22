import { Text } from 'react-native';
import React from 'react';
import { Container } from '../components/Container';
import { GqlQuery } from '../components/Query';
import { testPeopleQuery } from '../gql/testQueries';
import { PersonSmall } from '../models/Person';
import styles from '../components/Container/styles';

export default () => (
  <GqlQuery
    query={testPeopleQuery}
    expectedResultType='test'
    children={(data: any) => (
      <Container>
        {data.map((person: PersonSmall, idx: number) => (
          <Text style={styles.text} key={idx}>{person.name} is {person.age} years old</Text>
        ))}
      </Container>
    )}
  />
);