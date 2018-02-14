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
import {DrawerNavigator} from 'react-navigation';
import Environment from '../../Environment';
import Login from './Login';
import { NavigationActions } from 'react-navigation';
import {Calendar, Agenda} from 'react-native-calendars';
import { Card, Button, FormLabel, FormInput, Icon, Rating } from "react-native-elements";
import { SmoothLine } from 'react-native-pathjs-charts';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
});

export default class GraphOne extends React.Component{

	static navigationOptions ={
    tabBarLabel: 'Graph 1',
    tabBarIcon: () => (
        <Icon
          name= 'home'
          />)

  }

 render() {
    let data = [
      [{
        "x": -10,
        "y": -1000
      }, {
        "x": -9,
        "y": -729
      }, {
        "x": -8,
        "y": -512
      }, {
        "x": -7,
        "y": -343
      }, {
        "x": -6,
        "y": -216
      }, {
        "x": -5,
        "y": -125
      }, {
        "x": -4,
        "y": -64
      }, {
        "x": -3,
        "y": -27
      }, {
        "x": -2,
        "y": -8
      }, {
        "x": -1,
        "y": -1
      }, {
        "x": 0,
        "y": 0
      }, {
        "x": 1,
        "y": 1
      }, {
        "x": 2,
        "y": 8
      }, {
        "x": 3,
        "y": 27
      }, {
        "x": 4,
        "y": 64
      }, {
        "x": 5,
        "y": 125
      }, {
        "x": 6,
        "y": 216
      }, {
        "x": 7,
        "y": 343
      }, {
        "x": 8,
        "y": 512
      }, {
        "x": 9,
        "y": 729
      }, {
        "x": 10,
        "y": 1000
      }],
      [{
        "x": -10,
        "y": 100
      }, {
        "x": -9,
        "y": 81
      }, {
        "x": -8,
        "y": 64
      }, {
        "x": -7,
        "y": 49
      }, {
        "x": -6,
        "y": 36
      }, {
        "x": -5,
        "y": 25
      }, {
        "x": -4,
        "y": 16
      }, {
        "x": -3,
        "y": 9
      }, {
        "x": -2,
        "y": 4
      }, {
        "x": -1,
        "y": 1
      }, {
        "x": 0,
        "y": 0
      }, {
        "x": 1,
        "y": 1
      }, {
        "x": 2,
        "y": 4
      }, {
        "x": 3,
        "y": 9
      }, {
        "x": 4,
        "y": 16
      }, {
        "x": 5,
        "y": 25
      }, {
        "x": 6,
        "y": 36
      }, {
        "x": 7,
        "y": 49
      }, {
        "x": 8,
        "y": 64
      }, {
        "x": 9,
        "y": 81
      }, {
        "x": 10,
        "y": 100
      }]
    ]

    let options = {
      width: 280,
      height: 280,
      color: '#66cdaa',
      margin: {
        top: 20,
        left: 45,
        bottom: 25,
        right: 20
      },
      animate: {
        type: 'delayed',
        duration: 200
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        label: {
          fontFamily: 'Arial',
          fontSize: 14,
          fontWeight: true,
          fill: '#34495E'
        }
      },
      axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        label: {
          fontFamily: 'Arial',
          fontSize: 14,
          fontWeight: true,
          fill: '#34495E'
        }
      }
    }

    return (
      <View style={styles.container}>
        <SmoothLine data={data} options={options} xKey='x' yKey='y' />
        <Rating
  type='star'
  ratingColor='#8a2be2'
  ratingBackgroundColor='#8a2be2'
  ratingCount={5}
  imageSize={30}
  style={{ paddingVertical: 10 }}
/>
      </View>
    )
  }

}