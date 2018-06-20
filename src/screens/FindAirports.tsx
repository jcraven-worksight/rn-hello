import React from 'react';
import INavigationProps from '../config/INavigationProps';
import gql from 'graphql-tag';
import { IAirportJSON } from '../models/Airport';

import { Container } from '../components/Container';
import { QueryList } from '../components/QueryList';
import { InputWithButton } from '../components/TextInput';
import { TouchableListItem } from '../components/TouchableListItem';

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
        id
      }
    }
  }
`;

export default class FindAirport extends React.Component<IFindProps, any> {
  defaultCitySearch: string;
  constructor(props: any) {
    super(props);
    this.defaultCitySearch = 'Seattle';
    this.state = {search: this.defaultCitySearch, results: undefined };
  }

  handleChangeSearch = (text: string) => {
    this.setState({search: text});
  }

  handleReceiveData = (data: any) => {
    // this.setState({results: data}); // repeadedly calling setstate while rendering something else
  }

  // tslint:disable-next-line:no-empty
  handleAirportTouch = (text: string) => {
  }

  render() {
    return (
      <Container>
        <InputWithButton onPress={this.handleChangeSearch} buttonText='search airport' defaultValue={this.defaultCitySearch} />
        <QueryList
          skip={!this.state.search.length}
          propToUseAsListKey='id'
          query={findAirportsQuery}
          variables={{ search: this.state.search }}
          returnDataType='findAllAirports'
          onReceiveData={this.handleReceiveData}
          renderResult={(obj: IAirportJSON) => (
            <TouchableListItem displayText={obj.airportname} onTouch={this.handleAirportTouch} />
          )}
        />
      </Container>
    );
  }
}