import React from 'react';
import Home from './screens/HomeScreen';
import Login from './screens/LoginScreen';
import Empty from './screens/EmptyScreen';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {merge} from 'lodash';

// dont show this warning...only appearing with react-navigation
import { YellowBox } from 'react-native';
import LoginScreen from './screens/LoginScreen';
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
  // LoginScreens,
  merge(LoginScreens, MainScreens),
  {
    initialRouteName: 'Login'
  }
);

const MainTab = createBottomTabNavigator(
  MainScreens
  // {
  //   initialRouteName: 'Login'
  // }
  // navigationOptions: ({navigation}) => ({
  //   tabBarIcon: ({ focused, tintColor }) => {
  //     const {routeName} = navigation.state;
  //     return null;
  //   }
  //  })
);

export default class App extends React.Component {
  render() {
    // return <MainTab/>;
    return <RootStackNavigator />;
  }
}
