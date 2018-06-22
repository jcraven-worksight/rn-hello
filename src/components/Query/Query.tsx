import { Query } from 'react-apollo';
import { LoadingIndicator } from '../../components/LoadingIndicator';
import containerStyles from '../Container/styles';
import { View, Text } from 'react-native';
import React from 'react';

interface IChildrenProps {
  data: any;
}

interface IQueryProps {
  query: any;
  expectedResultType: string;
  variables?: string[];
  skip?: boolean;
  onReceiveData?: Function;
  children(props: IChildrenProps): JSX.Element;
}

const GqlQuery = (props: IQueryProps) => {
  return props.skip
    ? <View />
    : (<Query query={props.query} variables={props.variables} skip={props.skip}>
      {({ loading, error, data }: { loading: any, error?: any, data: any }) => {
        if (loading) return <LoadingIndicator />;
        if (error) return <Text style={containerStyles.textError}>{error.message}</Text>;
        data = data[props.expectedResultType];

        if (props.onReceiveData) {
          props.onReceiveData(data);
        }

        // render children
        return props.children(data);
      }}
    </Query>
    );
};

 export default GqlQuery;