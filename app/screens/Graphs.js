import React, {Component} from 'react';
import {
	ScrollView,
	Text,
	TextInput,
	View,
	Image,
	Alert, 
	ActivityIndicator,
  StyleSheet
} from 'react-native';
import {DrawerNavigator, TabNavigator} from 'react-navigation';
import Environment from '../../Environment';
import Login from './Login';
import { NavigationActions } from 'react-navigation';
import {Calendar, Agenda} from 'react-native-calendars';
import { Card, Button, FormLabel, FormInput, Icon } from "react-native-elements";
import { SmoothLine } from 'react-native-pathjs-charts';
import GraphOne from './GraphOne';
import GraphTwo from './GraphTwo';
import GraphThree from './GraphThree';


const GraphNavigation = TabNavigator({
  GraphOne: {
    screen: GraphOne,
  },
  GraphTwo: {
    screen: GraphTwo,
  },
  GraphThree: {
    screen: GraphThree,
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


export default class Graphs extends React.Component{

	static navigationOptions ={
		tabBarLabel: 'Graphs',
		drawerIcon: () => (
        <Icon
          name= 'trending-up'
          />)

	}

 render() {
    const {navigate} = this.props.navigation;
  return <GraphNavigation/>;

}
}