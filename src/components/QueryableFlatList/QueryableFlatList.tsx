import React from 'react';
import { FlatList, Text, View } from 'react-native';
import containerStyles from '../Container/styles';
import {uniq} from 'lodash';
import { GqlQuery } from '../Query';

interface IQueryListProps {
  query: any; // documentNode??
  propToUseAsListKey?: string; // a property of the expected query result to use as a list key, otherwise defaults to item index
  returnDataType: string; // what type of data is the query returning?
  renderResult: Function;
  variables?: any;
  skip?: boolean;
  onReceiveData?: Function;
}

export default class QueryableFlatList extends React.Component<IQueryListProps, any> {
  constructor(props: IQueryListProps) {
    super(props);
  }

  render() {
    return (
      <GqlQuery
        query={this.props.query}
        variables={this.props.variables}
        skip={this.props.skip}
        expectedResultType={this.props.returnDataType}
        onReceiveData={this.props.onReceiveData}
        children={(data: any) => {
          return (
            <View style={{ width: '90%' }}>
              <FlatList
                data={uniq(data)}
                renderItem={(obj: any) => this.props.renderResult(obj.item)}
                keyExtractor={(item: any, idx: number) => item[this.props.propToUseAsListKey].toString() || idx.toString()}
                ItemSeparatorComponent={() => <View style={containerStyles.itemSeparator} />}
              />
            </View>
          );
        }}
      />
    );
  }
}
