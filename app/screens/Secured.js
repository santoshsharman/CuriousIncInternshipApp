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
import {StackNavigator} from 'react-navigation';
import Environment from '../../Environment';
import Login from './Login';
import apitesting from './apitesting';
import HomePage from './HomePage';
import Schedule from './Schedule';
import Search from './Search';
import map from './map';
import Graphs from './Graphs';
import { NavigationActions } from 'react-navigation';
import { NavigationOptions } from 'react-navigation';

import  {DrawerNavigator, DrawerItems, DrawerNavigation} from 'react-navigation';

const DrawerMenu = DrawerNavigator(
{
	HomePage: {
	screen: HomePage},

	apitesting: {
	screen: apitesting},

	Schedule: {
		screen: Schedule
	},

	Search: {
		screen: Search
	},

	map: {
		screen: map
	},

	Graphs: {
		screen: Graphs
	}
},
{
	initialRouteName: 'HomePage',
	drawerPosition: 'left',
	drawerBackgroundColor: "plum",
    drawerWidth: 250,
    contentOptions: {
      activeTintColor: 'rebeccapurple',
     paddingTop: 10
    },
	contentComponent: (props) =>
<View style={{flex: 1}}>
<Image style={{padding: 10, height: 100, width: 250}} source={ require("../images/9.jpg")}/>
<ScrollView>
<DrawerItems {...props} />
</ScrollView>
</View>
}



	);

export default class Secured extends React.Component {
static navigationOptions = {
	header: null,


};

render(){

	const {navigate} = this.props.navigation;
	return <DrawerMenu/>;

}
}