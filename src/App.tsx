import React from 'react';
import Home from './screens/HomeScreen';
import Login from './screens/Login';
import Empty from './screens/EmptyScreen';
import {createStackNavigator} from 'react-navigation';

// dont show this warning...only appearing with react-navigation
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);

const RootStack = createStackNavigator(
  {
    Empty: {
      screen: (props: any) => <Empty {...props} />
    },
    Home: {
      screen: (props: any) => <Home {...props} />
    },
    Login: {
      screen: (props: any) => <Login {...props} />
    }
  },
  {
    initialRouteName: 'Empty'
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
