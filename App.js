
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry, Statusbar
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Login from './app/screens/Login';
import Secured from './app/screens/Secured';

const Authentication = StackNavigator({
  Login: {screen: Login},
  Secured: {screen: Secured},
});

export default class App extends React.Component<{}> {
  render() {
    return <Authentication/>;
     
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
