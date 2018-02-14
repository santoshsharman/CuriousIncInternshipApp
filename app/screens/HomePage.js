import React, {Component} from 'react';
import {
	ScrollView,
	Text,
	TextInput,
	View,
	Image,
	Alert, 
	ActivityIndicator,
	Modal,
	TouchableHighlight
} from 'react-native';
import {DrawerNavigator, TabNavigator} from 'react-navigation';
import Environment from '../../Environment';
import Login from './Login';
import Tasks from './Tasks';
import Profile from './Profile';
import { NavigationActions } from 'react-navigation';
import { Card, Button, FormLabel, FormInput, Icon, Header } from "react-native-elements";

const Homepage = TabNavigator({
  Tasks: {
    screen: Tasks,
  },
  Profile: {
    screen: Profile,
  },
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: 'gold',
    showIcon: false,
    labelStyle: {
    fontSize: 12
  },
  style: {
    backgroundColor: 'rebeccapurple',
  },
  }
});
export default class HomePage extends React.Component{

static navigationOptions ={
		drawerLabel: 'Home',
        drawerIcon: () => (
        <Icon
          name= 'home'
          />)
    }
	render(){

	const {navigate} = this.props.navigation;
	return <Homepage/>;


	}
}

	
