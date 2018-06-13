import React from 'react';
import Home from './screens/HomeScreen';
import Login from './screens/LoginScreen';
import Empty from './screens/EmptyScreen';

import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {merge} from 'lodash';

import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';
import {gqlEndPoint} from './config/config';

export const client = new ApolloClient({
  uri: gqlEndPoint
});

// dont show this warning...only appearing with react-navigation
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);

const MainScreens = {
    Empty: {
      screen: (props: any) => <Empty {...props} />
      // screen: Object.assign(Empty, navigationOptions)
    },
    Home: {
      screen: (props: any) => <Home {...props} />
    }
};

const LoginScreens = {
    Login: {
      screen: (props: any) => <Login {...props} />
    }
};

const RootStackNavigator = createStackNavigator(
  merge(LoginScreens, MainScreens),
  {
    initialRouteName: 'Login'
  }
);

const MainTab = createBottomTabNavigator(
  MainScreens
);

export default class App extends React.Component {
  render() {
    return <RootStackNavigator />;
  }
}
