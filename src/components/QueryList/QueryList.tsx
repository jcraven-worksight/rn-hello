import React, { Component } from 'react';
import {FlatList, Text} from 'react-native';
import { Query } from 'react-apollo';
import { findAirportsQuery } from '../../gql/testQueries';
import { LoadingIndicator } from '../../components/LoadingIndicator';
import containerStyles from '../Container/styles';

interface IListProps {
  query?: string;
  variables?: string[];
  variable?: string;
  stuff?: string;
  returnDataType: string;
}

// a component that takes a query, and renders as a list
export default class QueryList extends React.Component<IListProps, any> {
  constructor(props: IListProps) {
    super(props);
  }

  render() {
    if (!this.props.variable.length) {
      return (
        <Text>NOTHING THERE</Text>
      );
    }
    return (
      <Query query={findAirportsQuery} variables={{search: this.props.variable}}>
        {({ loading, error, data }) => {
          if (loading) return <LoadingIndicator />;
          if (error) return <Text>Error...</Text>;
          data = data[this.props.returnDataType];
          // todo: give this keys...but obj seems immutable?
          // let r = xx.map((item: any, idx: number) => {
          //   item.key = idx;
          //   return item;
          // });

          return (
            <FlatList
              data={data}
              renderItem={(obj: any) => {
                return <Text style={containerStyles.text}>{ obj.item.airportname }</Text>;
              }}
            />
          );
        }}
      </Query>
    );
  }

}
