import React from 'react';

import Home from './screens/Home';
import Login from './screens/Login';
import Empty from './screens/Empty';
import Flex from './screens/HowToFlex';
import FindAirport from './screens/FindAirports';

import EStyleSheet from 'react-native-extended-stylesheet';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { merge } from 'lodash';

import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { gqlEndPoint } from './config/config';

export const client = new ApolloClient({
  uri: gqlEndPoint
});

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',

  $white: '#FFFFFF',
  $lightGray: '#F0F0F0',
  $border: '#E2E2E2',
  $inputText: '#797979',
  $darkText: '#343434'
});

const MainScreens = {
  Flex: { screen: (props: any) => <Flex {...props} /> },
  FindAirport: { screen: (props: any) => <FindAirport {...props} /> },
  Empty: { screen: (props: any) => <Empty {...props} /> },
  Home: { screen: (props: any) => <Home {...props} /> }
};

const LoginScreens = {
  Login: { screen: (props: any) => <Login {...props} /> }
};

const RootStackNavigator = createStackNavigator(
  merge(LoginScreens, MainScreens),
  {
    // initialRouteName: 'Login'
    initialRouteName: 'FindAirport'
  }
);

export default () => (
  <ApolloProvider client={client}>
    <RootStackNavigator onNavigationStateChange={undefined} />
  </ApolloProvider>
);