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
import { Card, Button, FormLabel, FormInput, Icon } from "react-native-elements";
import { SmoothLine, Radar } from 'react-native-pathjs-charts';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
});

export default class GraphThree extends React.Component{

  static navigationOptions ={
    tabBarLabel: 'Graph 3',
    tabBarIcon: () => (
        <Icon
          name= 'home'
          />)

  }


   onLabelPress = (label, value) => {
    alert(label + ':' + value);
  }

 render() {
   let data = [{
      "speed": 74,
      "brake": 29,
      "acceleration": 40,
      "parameter": 40,
      "paramet3": 30,
      "parameter4": 25,
      "safety": 44
    }]

    let options = {
      width: 350,
      height: 320,
      margin: {
        top: 20,
        left: 20,
        right: 30,
        bottom: 20
      },
      r: 150,
      max: 100,
      fill: "rebeccapurple",
      stroke: "black",
      animate: {
        type: 'oneByOne',
        duration: 200
      },
      label: {
        fontFamily: 'Arial',
        fontSize: 14,
        fontWeight: true,
        fill: '#34495E',
        onLabelPress: this.onLabelPress
      }
    }

    return (
      <View style={styles.container}>
        <Radar data={data} options={options} />

        <Text style={{padding: 5}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Aliter enim nosmet ipsos nosse non possumus.

In his igitur partibus duabus nihil erat, quod Zeno commutare gestiret.
Duo Reges: constructio interrete.
Qua igitur re ab deo vincitur, si aeternitate non vincitur?
Ex rebus enim timiditas, non ex vocabulis nascitur.</Text>
      </View>
    )
  }

}