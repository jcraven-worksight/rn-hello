import gql from 'graphql-tag';

export const query1 = gql`
  query($type:String!, $numOfAirports: Int!) {
    searchType(type: $type, num: $numOfAirports) {
      ... on Airport{
        airportname
        country
      }
    }
  }
`;

export const query2 = gql`
  query test{
    test{
      name
      age
    }
  }
`;