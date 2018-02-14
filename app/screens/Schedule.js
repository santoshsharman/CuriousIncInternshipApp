import React, {Component} from 'react';
import {
	ScrollView,
	Text,
	TextInput,
	View,
	Image,
	Alert, 
	ActivityIndicator
} from 'react-native';
import {DrawerNavigator} from 'react-navigation';
import Environment from '../../Environment';
import Login from './Login';
import { NavigationActions } from 'react-navigation';
import {Calendar, Agenda} from 'react-native-calendars';
import { Card, Button, FormLabel, FormInput, Icon } from "react-native-elements";

export default class Schedule extends React.Component{

	static navigationOptions ={
		tabBarLabel: 'Schedule',
		drawerIcon: () => (
        <Icon
          name= 'date-range'
          />)

	}


	render() {

 const {navigate} = this.props.navigation;

		return <View style={{backgroundColor: 'ivory',flex: 1}}>
    <Icon name = "menu"
        onPress={() =>
            this.props.navigation.navigate('DrawerOpen')}/>
		        <Calendar

theme={{
    backgroundColor: 'black',
    calendarBackground: 'ivory',
    textSectionTitleColor: '#b6c1cd',
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: '#ffffff',
    todayTextColor: 'red',
    dayTextColor: '#000000',
    textDisabledColor: '#000000',
    dotColor: '#00adf5',
    selectedDotColor: '#ffffff',
    arrowColor: 'orange',
    monthTextColor: '#b8860b',
  
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16
  }}

  // Initially visible month. Default = Date()
  
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={'2012-05-10'}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  maxDate={'2020-05-30'}
  // Handler which gets executed on day press. Default = undefined
  onDayPress={(day) => {console.log('selected day', day)}}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'MM yyyy'}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={(month) => {console.log('month changed', month)}}
  // Hide month navigation arrows. Default = false
  hideArrows={false}
  // Replace default arrows with custom ones (direction can be 'left' or 'right')
  
  // Do not show days of other months in month page. Default = false
  hideExtraDays={true}
  // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
  // day from another month that is visible in calendar page. Default = false
  disableMonthChange={false}
  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
  firstDay={1}
  // Hide day names. Default = false
  hideDayNames={false}
/> 
              </View>
	}
}

