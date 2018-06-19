import React, { Component } from 'react';
import { Container } from '../components/Container';
import INavigationProps from '../config/INavigationProps';
import { InputWithButton } from '../components/TextInput';
import { QueryList } from '../components/QueryList';
import gql from 'graphql-tag';
import {IAirportJSON} from '../models/Airport';
import containerStyles from '../components/Container/styles';
import {Text} from 'react-native';

interface IFindProps extends INavigationProps /*airportinterface*/ {
}

const findAirportsQuery = gql`
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

export default class FindAirport extends React.Component<IFindProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {search: 'Seattle'};
  }

  handleChangeSearch = (text: string) => {
    this.setState({search: text});
  }

  render() {
    return (
      <Container>
        <InputWithButton onPress={this.handleChangeSearch} buttonText='search airport' />
        <QueryList
          query={findAirportsQuery}
          variables={{ search: this.state.search }}
          returnDataType='findAllAirports'
          propToUseAsListKey='icao'
          renderResult={(obj: IAirportJSON) => (
              <Text style={containerStyles.text}>{obj.airportname}</Text>
            )
          }
        />
      </Container>
    );
  }
}