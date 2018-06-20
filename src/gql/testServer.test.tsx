import ApolloClient from 'apollo-boost';
import { gqlEndPoint } from '../config/config';
import {testPeopleQuery} from './testQueries';
// import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { graphql } from 'graphql';

// tslint:disable-next-line:no-empty
jest.mock('react-dom/server', () => {}, {virtual: true});

const mocks = [
  {
    request: {
      query: testPeopleQuery,
      variables: {}
    },
    result: {
      data: {
        test: [{ name: 'bob', age: 44 }, { name: 'mark', age: 22 }]
      }
    }
  }
];

// const setupTests = () => {
//   const networkInterface = mockNetworkInterface(...mocks);
//   const client = new ApolloClient({networkInterface});

// }

// beforeAll(() => setupTests());

it.only('can get airports from travel sample db', async () => {

  // const result = await cl.query({ query: testPeopleQuery});
  // const data: any = result.data;
  // expect(data).toHaveProperty('test');
  // const s = data.test;
  // expect(s[0].name).toBe('bob');
  //   const aps = data.searchType;
  //   done();
  //   return 1;
  // }
  });