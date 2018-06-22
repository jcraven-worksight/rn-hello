/*
  will break if not running in debug!
  proxy issue
*/
import React from 'react';
import INavigationProps from '../config/INavigationProps';
import gql from 'graphql-tag';
import { IAirportJSON, Airport } from '../models/Airport';

import { Container } from '../components/Container';
import { QueryableFlatList } from '../components/QueryableFlatList';
import { InputWithButton } from '../components/InputWithButton';
import { TouchableListItem } from '../components/TouchableListItem';
// import {Observe, observable, watch} from 'rewire-core';

interface IFindProps extends INavigationProps {
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
        id
      }
    }
  }
`;

export default class FindAirport extends React.Component<IFindProps, any> {
  defaultCitySearch: string;
  airports: Airport[];
  constructor(props: any) {
    super(props);
    this.defaultCitySearch = 'Seattle';
    this.state = {search: this.defaultCitySearch, results: undefined };
    this.airports = [];
    // this.airports = observable([]);
  }

  handleChangeSearch = (text: string) => {
    this.setState({search: text});
  }

  handleReceiveData = (data: any) => {
    // this.airports = data;
  }

  handleAirportTouch = (id: any) => {
    const airport = this.airports.find(ap => ap.id === id);
    console.log(airport);
  }

  render() {
    return (
      <Container>
        <InputWithButton onPress={this.handleChangeSearch} buttonText='search airport' defaultValue={this.defaultCitySearch} />
        <QueryableFlatList
          skip={!this.state.search.length}
          propToUseAsListKey='id'
          query={findAirportsQuery}
          variables={{ search: this.state.search }}
          returnDataType='findAllAirports'
          onReceiveData={this.handleReceiveData}
          renderResult={(obj: IAirportJSON) => (
            <TouchableListItem displayText={obj.airportname} onTouch={this.handleAirportTouch} idx={obj.id} />
          )}
        />
      </Container>
    );
  }
}