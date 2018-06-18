import React, { Component } from 'react';
import { Container } from '../components/Container';
import INavigationProps from '../config/INavigationProps';
import { InputWithButton } from '../components/TextInput';
import { QueryList } from '../components/QueryList';

interface IFindProps extends INavigationProps /*airportinterface*/ {
}

export default class FindAirport extends React.Component<IFindProps, any> {
  stuff = 'hijack';
  constructor(props: any) {
    super(props);
    this.state = {search: 'Seattle'};
  }

  handleChangeSearch = (text: string) => {
    this.setState({search: text});
    console.log(this.state.search);
  }

  render() {
    return (
      <Container>
        <InputWithButton onPress={this.handleChangeSearch} buttonText='search airport'/>
        <QueryList variable={this.state.search} stuff={this.stuff} returnDataType='findAllAirports' />
      </Container>
    );
  }
}