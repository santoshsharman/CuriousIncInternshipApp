import React, {Component} from 'react';
import {
	ScrollView,
	Text,
	TextInput,
	View,
	Button,
	Image,
	Alert, 
	ActivityIndicator
} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import Environment from '../../Environment';
import Login from './Login';
import { NavigationActions } from 'react-navigation';
import {Calendar, Agenda} from 'react-native-calendars';

export default class Schedule extends React.Component{

	static navigationOptions ={
		tabBarLabel: 'Schedule',

	}


	render() {
		return <View style={{ padding: 20}}>
		       <Text>
		       Screen 2
		       </Text>  
              </View>
	}
}

