import React from 'react';
import { FlatList, Text } from 'react-native';
import { Query } from 'react-apollo';
import { LoadingIndicator } from '../../components/LoadingIndicator';

interface IQueryListProps {
  query: any; // documentNode??
  propToUseAsListKey?: string; // a property of the expected query result to use as a list key, otherwise defaults to item index
  returnDataType: string; // what type of data is the query returning?
  renderResult: Function;
  variables?: any;
}

export default class QueryList extends React.Component<IQueryListProps, any> {
  constructor(props: IQueryListProps) {
    super(props);
  }

  render() {
    return (
      <Query query={this.props.query} variables={this.props.variables}>
        {({ loading, error, data }) => {
          if (loading) return <LoadingIndicator />;
          if (error) return <Text>Error...</Text>;
          data = data[this.props.returnDataType];

          return (
            <FlatList
              data={data}
              renderItem={(obj: any) => this.props.renderResult(obj.item)}
              keyExtractor={(item: any, idx: number) => this.props.propToUseAsListKey ? item[this.props.propToUseAsListKey] : idx.toString()}
            />
          );
        }}
      </Query>
    );
  }
}
