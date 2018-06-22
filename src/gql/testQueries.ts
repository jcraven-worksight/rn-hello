import gql from 'graphql-tag';
import { client } from '../App';
import { Airport } from '../models/Airport';

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

export const testPeopleQuery = gql`
  query test{
    test{
      name
      age
    }
  }
`;

export const findAirportsQuery = gql`
  query($search:String!) {
    findAllAirports(cityOrIcaoOrFaa: $search) {
      ... on Airport{
        airportname
        country
        faa
        icao
        city
      }
    }
  }
`;

export const testAirportFetch = async (): Promise<Airport[]> => {
  return client.query({ query: findAirportsQuery, variables: { search: 'Seattle' } }).then(result => {
    const data: any = result.data;
    return data.findAllAirports;
  });
};